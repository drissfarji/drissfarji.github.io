import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  light?: boolean
}

export default function SectionTitle({ title, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <h2
        className={`font-display font-bold text-4xl md:text-5xl tracking-tight mb-5 ${
          light ? 'text-primary' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <div className="w-10 h-0.5 bg-accent rounded-full" />
        <div className="w-3 h-0.5 bg-accent/40 rounded-full" />
        <div className="w-1.5 h-0.5 bg-accent/20 rounded-full" />
      </div>
    </motion.div>
  )
}
