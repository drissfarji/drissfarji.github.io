import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en'
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 })

  const toggleLang = () => i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr')
  const cv = `${import.meta.env.BASE_URL}${lang === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf'}`

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#hobbies', label: t('nav.hobbies') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-concrete/90 backdrop-blur-md border-b border-ink/15">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="Driss Farji, top of page" className="flex items-center justify-center w-9 h-9 bg-signal text-ink font-display font-black text-lg tracking-tight">
          DF
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Sections">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-[15px] font-medium text-ink hover:underline decoration-signal decoration-[3px] underline-offset-[6px]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            onClick={toggleLang}
            className="font-mono text-sm text-slate hover:text-ink"
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            <span className={lang === 'fr' ? 'text-ink font-semibold underline decoration-signal decoration-2 underline-offset-4' : ''}>FR</span>
            <span className="mx-1.5 text-slate/50">/</span>
            <span className={lang === 'en' ? 'text-ink font-semibold underline decoration-signal decoration-2 underline-offset-4' : ''}>EN</span>
          </button>

          <a
            href={cv}
            download
            className="hidden md:inline-flex items-center px-4 py-2 bg-ink text-concrete text-sm font-semibold hover:bg-signal hover:text-ink active:scale-[0.97] transition-[color,background-color,transform] duration-150 ease-out"
          >
            {t('nav.downloadCV')}
          </a>

          <button
            className="md:hidden p-2 -mr-2 font-semibold text-sm"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <motion.div style={{ scaleX: progress }} className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-signal origin-left" />

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile sections"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-concrete border-b border-ink/15"
          >
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-extrabold border-b border-ink/10">
                  {link.label}
                </a>
              ))}
              <a href={cv} download className="mt-5 mb-2 inline-flex justify-center px-4 py-3 bg-ink text-concrete font-semibold">
                {t('nav.downloadCV')}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
