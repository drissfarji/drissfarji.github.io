import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function Contact() {
  const { t } = useTranslation()
  const items = t('contact.items', { returnObjects: true }) as { icon: string; label: string; value: string; href: string }[]
  const email = items.find(i => i.icon === 'email')
  const others = items.filter(i => i.icon !== 'email')

  return (
    <Section id="contact" title={t('contact.title')} dark>
      <p className="text-xl text-concrete/80 max-w-xl">{t('contact.subtitle')}</p>

      {email && (
        <a
          href={email.href}
          className="mt-8 inline-block font-display font-extrabold text-signal text-[clamp(1.6rem,5.2vw,4.4rem)] leading-none tracking-tight break-all underline decoration-[5px] underline-offset-[10px] decoration-signal/40 hover:decoration-signal"
        >
          {email.value}
        </a>
      )}

      <ul className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl">
        {others.map(item => (
          <li key={item.label}>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="block border-t-2 border-concrete/30 hover:border-signal pt-3">
              <span className="block font-bold text-lg">{item.label}</span>
              <span className="block font-mono text-sm text-concrete/70 break-all">{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
