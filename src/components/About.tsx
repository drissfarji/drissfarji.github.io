import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function About() {
  const { t } = useTranslation()
  const education = t('about.education', { returnObjects: true }) as { year: string; degree: string; school: string }[]
  const certs = t('about.certs', { returnObjects: true }) as string[]
  const languages = t('about.languages', { returnObjects: true }) as { name: string; level: string }[]

  return (
    <Section id="about" title={t('about.title')}>
      <p className="font-display font-semibold text-2xl md:text-[1.9rem] leading-[1.25] tracking-tight max-w-3xl">
        {t('about.bio')}
      </p>
      <p className="mt-6 text-lg leading-relaxed text-slate max-w-2xl">{t('about.bio2')}</p>

      <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-10">
        <div>
          <h3 className="font-bold border-b-2 border-ink pb-2 mb-4">{t('about.education_title')}</h3>
          <ul className="space-y-4">
            {education.map(edu => (
              <li key={edu.year}>
                <p className="font-mono text-sm text-slate">{edu.year}</p>
                <p className="font-semibold leading-snug">{edu.degree}</p>
                <p className="text-slate text-[15px]">{edu.school}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold border-b-2 border-ink pb-2 mb-4">{t('about.certs_title')}</h3>
          <ul className="space-y-2">
            {certs.map(c => <li key={c} className="font-semibold">{c}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-bold border-b-2 border-ink pb-2 mb-4">{t('about.languages_title')}</h3>
          <ul className="space-y-2">
            {languages.map(l => (
              <li key={l.name} className="flex justify-between gap-4">
                <span className="font-semibold">{l.name}</span>
                <span className="text-slate">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
