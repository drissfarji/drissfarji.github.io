import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-concrete text-ink font-body min-h-screen antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-concrete focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
