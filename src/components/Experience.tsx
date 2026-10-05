import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'
import { experiences } from '../data/experiences'

export default function Experience() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as 'fr' | 'en'
  const [open, setOpen] = useState<number | null>(1)

  return (
    <Section id="experience" title={t('experience.title')}>
      <ul className="border-t border-ink/25">
        {experiences.map(exp => {
          const isOpen = open === exp.id
          return (
            <li key={exp.id} className={`border-b border-ink/25 relative ${isOpen ? 'bg-white/40' : ''}`}>
              {isOpen && <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-signal" aria-hidden />}
              <button
                onClick={() => setOpen(isOpen ? null : exp.id)}
                aria-expanded={isOpen}
                aria-controls={`exp-${exp.id}`}
                className="w-full text-left grid md:grid-cols-12 gap-x-6 gap-y-2 items-baseline py-5 px-4 hover:bg-white/40 transition-colors"
              >
                <span className="md:col-span-3 font-mono text-sm text-slate">{exp.period[lang]}</span>
                <span className="md:col-span-5">
                  <span className="block font-extrabold text-xl leading-tight">{exp.company}</span>
                  <span className="block text-[15px] text-slate">{exp.role[lang]}</span>
                </span>
                <span className="md:col-span-3">
                  {exp.highlight && (
                    <>
                      <span className="block font-extrabold text-xl leading-tight">{exp.highlight.value}</span>
                      <span className="block text-sm text-slate">{exp.highlight.label[lang]}</span>
                    </>
                  )}
                </span>
                <span className="hidden md:block md:col-span-1 text-right font-mono text-xl" aria-hidden>{isOpen ? '–' : '+'}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`exp-${exp.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-7 md:pl-[calc(25%+0.75rem)] max-w-none">
                      <p className="text-slate leading-relaxed max-w-2xl">{exp.context[lang]}</p>
                      {exp.bullets[lang].length > 0 && (
                        <ul className="mt-4 space-y-2.5 max-w-2xl">
                          {exp.bullets[lang].map((b, i) => (
                            <li key={i} className="border-l-2 border-ink pl-4 leading-snug">{b}</li>
                          ))}
                        </ul>
                      )}
                      <p className="mt-5 font-mono text-[13px] leading-relaxed text-slate max-w-2xl">{exp.tech.join(', ')}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
