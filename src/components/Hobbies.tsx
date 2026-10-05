import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function Hobbies() {
  const { t } = useTranslation()
  const items = t('hobbies.items', { returnObjects: true }) as { name: string; desc: string }[]

  return (
    <Section id="hobbies" title={t('hobbies.title')}>
      <ul className="border-t border-ink/25">
        {items.map(h => (
          <li key={h.name} className="grid md:grid-cols-12 gap-x-6 gap-y-2 py-7 border-b border-ink/25 group">
            <h3 className="md:col-span-6 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-none group-hover:underline decoration-signal decoration-[6px] underline-offset-[8px]">
              {h.name}
            </h3>
            <p className="md:col-span-6 text-slate leading-relaxed max-w-md">{h.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
