import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import { experiences } from '../data/experiences'

export default function Experience() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as 'fr' | 'en'

  return (
    <section id="experience" className="section-pad bg-card/20">
      <div className="max-w-7xl mx-auto px-0">
        <SectionTitle title={t('experience.title')} />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 md:left-6 top-6 w-3 h-3 rounded-full border-2 border-deep z-10"
                  style={{ backgroundColor: exp.companyColor }}
                />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.companyColor }}
                        />
                        <span className="font-display font-bold text-base text-primary">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-primary">
                        {exp.role[lang]}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-accent/70 bg-accent/8 border border-accent/15 px-3 py-1.5 rounded-lg flex-shrink-0">
                      {exp.period[lang]}
                    </span>
                  </div>

                  {/* Context */}
                  <p className="text-secondary/80 text-sm italic mb-4 leading-relaxed">
                    {exp.context[lang]}
                  </p>

                  {/* Bullets */}
                  {exp.bullets[lang].length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {exp.bullets[lang].map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-secondary">
                          <span className="text-accent/50 flex-shrink-0 mt-0.5">▸</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
