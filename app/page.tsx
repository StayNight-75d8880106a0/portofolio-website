"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import LeetCode from "@/components/leetcode"
import Quotes from "@/components/quotes"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WorkExperience from "@/components/work-experience"
import Education from "@/components/education"

export default function Home() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"))
    if (!sections.length) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    sections.forEach((section, index) => {
      if (prefersReducedMotion) {
        section.classList.add("opacity-100", "translate-y-0")
        return
      }

      section.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700",
        "ease-out",
        "will-change-transform",
      )
      section.style.transitionDelay = `${Math.min(index * 80, 360)}ms`
    })

    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8")
            entry.target.classList.add("opacity-100", "translate-y-0")
            return
          }

          entry.target.classList.remove("opacity-100", "translate-y-0")
          entry.target.classList.add("opacity-0", "translate-y-8")
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <LeetCode />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  )
}
