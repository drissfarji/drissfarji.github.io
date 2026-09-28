import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr')

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#hobbies', label: t('nav.hobbies') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full transition-colors duration-300 ${
          scrolled ? 'bg-deep/95 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display font-black text-xl tracking-tight text-gradient">
            DF
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-accent text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 font-mono text-xs text-secondary hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <span className={lang === 'fr' ? 'text-accent font-semibold' : ''}>FR</span>
              <span className="text-white/20">|</span>
              <span className={lang === 'en' ? 'text-accent font-semibold' : ''}>EN</span>
            </button>

            <a
              href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'}
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 border border-accent/25 text-accent text-sm font-medium rounded-lg transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('nav.downloadCV')}
            </a>

            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — absolute so it sits flush below the shared header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl border-b border-white/5 px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-secondary hover:text-accent text-base font-medium transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'}
              download
              className="mt-2 flex items-center gap-2 px-4 py-3 bg-accent/10 border border-accent/25 text-accent text-sm font-medium rounded-lg w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('nav.downloadCV')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
