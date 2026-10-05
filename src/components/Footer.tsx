import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="on-dark bg-ink text-concrete/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-2 text-sm">
        <span>{t('footer.built')}</span>
        <span className="font-mono">{t('footer.stack')}</span>
      </div>
    </footer>
  )
}
