import { useTranslation } from 'react-i18next'
import Section from './Section'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const { t } = useTranslation()
  const names = t('skills.categories', { returnObjects: true }) as Record<string, string>

  return (
    <Section id="skills" title={t('skills.title')}>
      <dl className="border-t border-ink/25">
        {skillCategories.map(cat => (
          <div key={cat.id} className="grid md:grid-cols-12 gap-x-6 gap-y-3 py-6 border-b border-ink/25">
            <dt className="md:col-span-4 font-extrabold text-lg leading-tight">{names[cat.id]}</dt>
            <dd className="md:col-span-8 flex flex-wrap gap-x-5 gap-y-1.5">
              {cat.skills.map(skill => (
                <span key={skill} className={cat.id === 'legacy' ? 'text-slate' : 'font-medium'}>{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
