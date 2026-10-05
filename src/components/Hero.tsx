import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DeparturesBoard from './DeparturesBoard'

function useParisTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en'
  const time = useParisTime()

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="name-display font-display text-[clamp(5.5rem,17vw,15rem)] -ml-1">
              Driss
              <br />
              Farji
            </h1>
            <p className="mt-8 font-display font-bold text-2xl md:text-3xl">{t('hero.title')}</p>
            <p className="mt-2 text-lg text-slate max-w-xl">{t('hero.subtitle').replace(/ · /g, ', ')}</p>
            <p className="mt-5 flex items-center gap-2.5 text-[15px] font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-cleared" aria-hidden />
              {t('hero.available')}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={`${import.meta.env.BASE_URL}${lang === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf'}`}
                download
                className="px-6 py-3.5 bg-ink text-concrete font-semibold hover:bg-signal hover:text-ink active:scale-[0.97] transition-[color,background-color,transform] duration-150 ease-out"
              >
                {t('hero.cta_cv')}
              </a>
              <a href="#contact" className="font-semibold underline decoration-signal decoration-[3px] underline-offset-[6px] hover:decoration-ink">
                {t('hero.cta_contact')}
              </a>
            </div>
          </div>

          <figure className="lg:col-span-4 max-w-sm w-full lg:justify-self-end">
            <img
              src={`${import.meta.env.BASE_URL}photo-profil-crop.jpg`}
              alt="Driss Farji"
              width={400}
              height={400}
              fetchPriority="high"
              className="w-full aspect-[4/5] object-cover grayscale contrast-110"
            />
            <figcaption className="flex items-center justify-between bg-signal text-ink px-4 py-2.5 font-mono text-sm font-medium">
              <span>{t('hero.location')}</span>
              <span className="tabular-nums">{time}</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16">
          <DeparturesBoard />
        </div>
      </div>
    </section>
  )
}
