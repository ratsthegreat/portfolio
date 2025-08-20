"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Users, Cpu, BarChart, CalendarCheck, Workflow } from "lucide-react"

const skills = [
  {
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    title: "Project Management",
    desc: "Expertise in managing full project lifecycles with Agile & Waterfall methodologies.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Leadership",
    desc: "Leading cross-functional teams and driving collaboration towards business goals.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
    title: "Technology",
    desc: "Strong background in IT, consultancy, and electronics domain solutions.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-blue-600" />,
    title: "Analytics & Reporting",
    desc: "Proficient in tracking KPIs, progress metrics, and ensuring data-driven decisions.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-blue-600" />,
    title: "Planning & Execution",
    desc: "Skilled in scheduling, resource allocation, and timely delivery of milestones.",
  },
  {
    icon: <Workflow className="w-8 h-8 text-blue-600" />,
    title: "Process Optimization",
    desc: "Focused on improving workflows to enhance efficiency and reduce bottlenecks.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-600 dark:text-sky-400 mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-brand/40 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
