"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative bg-white dark:bg-brand py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-brand/80 dark:to-transparent"></div>

      <div className="container relative z-10 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          <p>
            I am <span className="font-semibold text-blue-600">Prathamesh Satardekar</span>, a{" "}
            <span className="font-semibold text-blue-600">Project Manager</span> with{" "}
            <span className="font-semibold text-blue-600">8+ years of experience</span> driving
            successful projects across{" "}
            <span className="font-semibold text-blue-600">IT, consultancy, and electronics</span>{" "}
            domains.
          </p>

          <p>
            I hold a prestigious{" "}
            <span className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-semibold">
              PMP® Certification
            </span>{" "}
            and specialize in delivering projects with precision, process efficiency, and strong
            team collaboration.
          </p>

          <p>
            My core strengths include{" "}
            <span className="underline decoration-blue-400 decoration-2 underline-offset-4">
              strategic planning
            </span>
            ,{" "}
            <span className="underline decoration-blue-400 decoration-2 underline-offset-4">
              stakeholder communication
            </span>{" "}
            and{" "}
            <span className="underline decoration-blue-400 decoration-2 underline-offset-4">
              cross-functional leadership
            </span>
            . I am passionate about technology, people management, and enabling teams to deliver
            impactful outcomes.
          </p>

          <p>
            With every project, I aim to align{" "}
            <span className="font-semibold text-blue-600">business goals</span> with{" "}
            <span className="font-semibold text-blue-600">team excellence</span>, ensuring long-term
            success for both organization and stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
