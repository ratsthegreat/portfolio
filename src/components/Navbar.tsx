"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href))
      const scrollPos = window.scrollY + window.innerHeight / 2

      sections.forEach((section, i) => {
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY
          const bottom = top + section.clientHeight
          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(navItems[i].href)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/80 dark:bg-brand/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="container flex items-center justify-between py-5 md:py-6">
        {/* Removed Logo / Name */}

        {/* Nav Links */}
        <div className="flex items-center gap-6 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <Button asChild className="btn-glow rounded-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500">
          <a href="/resumeATS_V4.pdf" target="_blank">
            Download Resume
          </a>
        </Button>
      </div>
    </motion.nav>
  )
}
