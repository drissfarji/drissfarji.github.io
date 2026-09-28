import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

export default function About() {
  const { t } = useTranslation()
  const stats = t('about.stats', { returnObjects: true }) as {
    years: { value: string; label: string }
    missions: { value: string; label: string }
    status: { value: string; label: string }
  }
  const education = t('about.education', { returnObjects: true }) as {
    year: string; degree: string; school: string
  }[]
  const certs = t('about.certs', { returnObjects: true }) as string[]
  const languages = t('about.languages', { returnObjects: true }) as {
    flag: string; name: string; level: string
  }[]

  return (
    <section id="about" className="section-pad max-w-7xl mx-auto">
      <SectionTitle title={t('about.title')} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Bio */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {Object.values(stats).map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 text-center">
                <p className="font-display font-black text-3xl text-accent mb-1">{stat.value}</p>
                <p className="font-mono text-xs text-secondary uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-7 space-y-4"
          >
            <p className="text-secondary leading-relaxed text-base">{t('about.bio')}</p>
            <p className="text-secondary leading-relaxed text-base">{t('about.bio2')}</p>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-5">
              {t('about.education_title')}
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="font-mono text-xs text-accent/60 block mt-0.5">{edu.year}</span>
                  </div>
                  <div>
                    <p className="text-primary text-sm font-medium leading-snug">{edu.degree}</p>
                    <p className="text-secondary text-xs mt-0.5">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-4">
              {t('about.certs_title')}
            </h3>
            <div className="space-y-2">
              {certs.map((cert, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                  <span className="text-secondary text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-4">
              {t('about.languages_title')}
            </h3>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-primary">
                    <span>{lang.flag}</span>
                    {lang.name}
                  </span>
                  <span className="font-mono text-xs text-accent/70 bg-accent/10 px-2 py-0.5 rounded">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
