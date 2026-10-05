import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'

const PORT = 4173
const URL = `http://localhost:${PORT}`
mkdirSync('review', { recursive: true })

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' })
const waitUp = async () => {
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(URL)).ok) return } catch {}
    await new Promise(r => setTimeout(r, 200))
  }
  throw new Error('preview server did not start')
}

try {
  await waitUp()
  const browser = await chromium.launch()
  for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport })
    await page.goto(URL, { waitUntil: 'networkidle' })
    // Scroll through the page so whileInView animations fire before capture.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y)
        await new Promise(r => setTimeout(r, 150))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(800)
    await page.screenshot({ path: `review/${name}.png`, fullPage: true })
    console.log(`review/${name}.png`)
  }
  await browser.close()
} finally {
  server.kill()
}
