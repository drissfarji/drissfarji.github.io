import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-black text-sm text-gradient">DF</span>
          <span className="text-secondary text-sm">{t('footer.built')}</span>
        </div>
        <span className="font-mono text-xs text-secondary/50">{t('footer.stack')}</span>
      </div>
    </footer>
  )
}
