import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en'

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-48 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Available badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {t('hero.available')}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display font-black text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] tracking-[-0.04em] text-primary mb-6"
            >
              DRISS
              <br />
              <span className="text-gradient">FARJI</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={item}
              className="font-display font-semibold text-xl md:text-2xl text-secondary mb-3"
            >
              {t('hero.title')}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="font-mono text-sm text-accent/70 mb-10 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <a
                href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'}
                download
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-[0_0_30px_rgba(79,142,247,0.25)] hover:shadow-[0_0_50px_rgba(79,142,247,0.4)]"
              >
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('hero.cta_cv')}
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 bg-surface/60 border border-white/8 text-primary font-semibold rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              >
                {t('hero.cta_contact')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Meta */}
            <motion.div variants={item} className="flex flex-wrap gap-6 text-sm text-secondary">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('hero.location')}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t('hero.experience')}
              </span>
            </motion.div>
          </motion.div>

          {/* Right column — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-[360px] md:h-[360px] flex items-center justify-center">
              {/* Sonar rings */}
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-accent/25"
                  animate={{ scale: [1, 1.6 + i * 0.2], opacity: [0.5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1.0,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-accent/15" />

              {/* Photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/30 shadow-[0_0_60px_rgba(79,142,247,0.15)]">
                <img
                  src="/photo-profil-crop.jpg"
                  alt="Driss Farji"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep/20 rounded-full" />
              </div>

              {/* Floating badge — years of experience */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-xl"
              >
                <p className="font-display font-bold text-lg text-accent">12+</p>
                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest">Years exp.</p>
              </motion.div>

              {/* Floating badge — current role */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -top-2 -right-6 glass-card px-3 py-2 rounded-xl"
              >
                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest">Currently</p>
                <p className="font-display font-semibold text-sm text-primary">Air France ✈</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-secondary/40" />
        <div className="w-1 h-1 rounded-full bg-secondary/40" />
      </motion.div>
    </section>
  )
}
