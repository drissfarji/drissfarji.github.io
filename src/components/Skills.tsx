import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const { t } = useTranslation()
  const categoryNames = t('skills.categories', { returnObjects: true }) as Record<string, string>

  return (
    <section id="skills" className="section-pad max-w-7xl mx-auto">
      <SectionTitle title={t('skills.title')} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`glass-card rounded-2xl p-6 ${cat.id === 'dev' ? 'md:col-span-2 xl:col-span-2' : ''}`}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-display font-semibold text-primary text-base">
                {categoryNames[cat.id]}
              </h3>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 + i * 0.02 }}
                  className={cat.id === 'dev' ? 'tag-accent' : 'tag'}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
