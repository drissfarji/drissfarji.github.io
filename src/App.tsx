import Navbar from './components/Navbar'
import ContactBar from './components/ContactBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-deep text-primary font-body min-h-screen antialiased">
      <header className="fixed top-0 inset-x-0 z-50">
        <Navbar />
        <ContactBar />
      </header>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  )
}
