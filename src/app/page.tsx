import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </>
  )
}
