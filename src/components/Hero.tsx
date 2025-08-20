"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-brand dark:via-brand/90 dark:to-brand">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 dark:opacity-10"></div>

      {/* Floating blobs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Content */}
      <div className="relative z-10 container flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left side: text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            Prathamesh Satardekar
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Project Manager | PMP Certified | 8+ Years Experience
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="btn-glow px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-400 text-blue-600 dark:text-blue-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right side: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 dark:ring-blue-700">
            <Image
              src="/profile.jpg" // place your image in public/profile.jpg
              alt="Prathamesh Satardekar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
