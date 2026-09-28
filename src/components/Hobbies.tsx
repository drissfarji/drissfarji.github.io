import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

export default function Hobbies() {
  const { t } = useTranslation()
  const items = t('hobbies.items', { returnObjects: true }) as {
    icon: string; name: string; desc: string
  }[]

  const gradients = [
    'from-blue-500/10 to-cyan-500/5',
    'from-amber-500/10 to-orange-500/5',
    'from-emerald-500/10 to-teal-500/5',
  ]
  const borders = [
    'border-blue-500/20 hover:border-blue-400/40',
    'border-amber-500/20 hover:border-amber-400/40',
    'border-emerald-500/20 hover:border-emerald-400/40',
  ]
  const accents = ['text-blue-400', 'text-amber', 'text-emerald-400']

  return (
    <section id="hobbies" className="section-pad bg-card/20">
      <div className="max-w-7xl mx-auto px-0">
        <SectionTitle title={t('hobbies.title')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden bg-gradient-to-br ${gradients[index]} backdrop-blur-xl border ${borders[index]} rounded-2xl p-8 transition-all duration-300`}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-card/60 rounded-2xl" />

              <div className="relative">
                <span className="text-5xl mb-6 block">{hobby.icon}</span>
                <h3 className={`font-display font-bold text-xl mb-3 ${accents[index]}`}>
                  {hobby.name}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">{hobby.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
