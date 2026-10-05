import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { experiences } from '../data/experiences'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const TICK_MS = 45
const SINCE: Record<number, string> = { 1: '03.2024', 2: '09.2022', 3: '03.2022', 4: '12.2021', 5: '05.2021' }

function useTick(maxTicks: number, enabled: boolean) {
  const [tick, setTick] = useState(enabled ? 0 : maxTicks)
  useEffect(() => {
    if (!enabled) { setTick(maxTicks); return }
    const id = setInterval(() => {
      setTick(t => {
        if (t >= maxTicks) { clearInterval(id); return t }
        return t + 1
      })
    }, TICK_MS)
    return () => clearInterval(id)
  }, [maxTicks, enabled])
  return tick
}

function Flaps({ text, tick, offset }: { text: string; tick: number; offset: number }) {
  const chars = text.toUpperCase().split('')
  return (
    <span className="inline-flex whitespace-nowrap">
      <span className="sr-only">{text}</span>
      {chars.map((ch, i) => {
        const start = offset + i * 2
        const flips = 5 + (i % 4)
        let shown = ch
        if (ch !== ' ') {
          if (tick < start) shown = ' '
          else if (tick < start + flips) shown = GLYPHS[(i * 7 + tick * 13) % GLYPHS.length]
        }
        return <span key={i} aria-hidden className="flap">{shown === ' ' ? '' : shown}</span>
      })}
    </span>
  )
}

export default function DeparturesBoard() {
  const { t, i18n } = useTranslation()
  const reduce = useReducedMotion()
  const lang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as 'fr' | 'en'
  const rows = experiences.slice(0, 5)
  const maxTicks = 12 + rows.length * 7 + 40
  const tick = useTick(maxTicks, !reduce)
  const status = (i: number) => (i === 0 ? t('board.current') : t('board.landed'))

  return (
    <div className="bg-board text-concrete rounded-md p-4 sm:p-6 shadow-[0_18px_0_-10px_#FFC20E]">
      <div className="flex items-baseline justify-between pb-4 border-b border-white/15">
        <h2 className="font-display font-extrabold text-xl sm:text-2xl">{t('board.title')}</h2>
        <a href="#experience" className="text-sm text-concrete/70 hover:text-signal underline underline-offset-4 decoration-signal/60">
          {t('board.all')}
        </a>
      </div>

      <ol>
        {rows.map((exp, i) => (
          <li key={exp.id} className="border-b border-white/10 last:border-b-0">
            <a
              href="#experience"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3.5 text-[11px] min-[420px]:text-[13px] sm:text-[15px] hover:bg-white/[0.04] -mx-2 px-2 rounded"
            >
              <Flaps text={SINCE[exp.id]} tick={tick} offset={i * 7} />
              <Flaps text={exp.company} tick={tick} offset={i * 7 + 4} />
              <Flaps text={exp.role[lang]} tick={tick} offset={i * 7 + 8} />
              <span className="sm:ml-auto inline-flex items-center gap-2">
                {i === 0 && <span className="w-2.5 h-2.5 rounded-full bg-[#3DDC84]" aria-hidden />}
                <Flaps text={status(i)} tick={tick} offset={i * 7 + 14} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
