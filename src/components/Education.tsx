"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering (BE) in Electronics",
    institution: "Vidyalankar Institute of Technology",
    details: "CGPA: 7.48 | Graduated in 2017",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-brand-accent"
        >
          Education
        </motion.h2>

        <div className="mt-12 space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-2xl shadow"
            >
              <GraduationCap className="w-8 h-8 text-brand-accent mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
