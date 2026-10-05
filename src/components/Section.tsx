import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  dark?: boolean
  children: ReactNode
}

export default function Section({ id, title, dark = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={dark ? 'on-dark bg-ink text-concrete' : ''}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`border-t-[3px] ${dark ? 'border-signal' : 'border-ink'} pt-5 pb-24 grid lg:grid-cols-12 gap-x-10 gap-y-8`}>
          <h2 className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            {title}
          </h2>
          <div className="lg:col-span-9 pt-1">{children}</div>
        </div>
      </div>
    </section>
  )
}
