"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const experiences = [
  {
    role: "Operations Manager",
    company: "Vanmat Technologies Pvt. Ltd.",
    period: "January 2025 – Present",
    points: [
      "Leading the end-to-end development of a scenario-based simulation-driven LMS portal; achieved 75% project completion in 5 months.",
      "Assisted in delivering AI & GenAI capability-building programs for Mahindra and RPG Group, supporting 190+ employees.",
      "Coordinating IT consultancy projects and operational workflows ensuring seamless integration of technology solutions.",
    ],
  },
  {
    role: "Senior Manager",
    company: "Vanmat Technologies Pvt. Ltd.",
    period: "January 2022 – December 2024",
    points: [
      "Delivered early-phase AI-focused programs for Mahindra and RPG Group, training 220+ employees.",
      "Led a cross-functional team of 5+ engineers, completing 10+ high-impact projects on time, improving delivery by 25%.",
      "Directed Drone Training Program with ESSCI: 22 sessions, 704 hours, 142 faculty certified.",
      "Improved operations by recruiting 4 team members, boosting productivity by 30%.",
    ],
  },
  {
    role: "Engineering Manager",
    company: "Vanmat Technologies Pvt. Ltd.",
    period: "January 2021 – December 2021",
    points: [
      "Supervised IoT, ML & Drone training programs, improving participant skills by 20%.",
      "Managed AI/Robotics/AR-VR/Drone labs setup across 61 Army Public Schools during COVID-19.",
      "Optimized workflows & accounting processes for financial health.",
    ],
  },
  {
    role: "Senior Systems Engineer",
    company: "Vanmat Technologies Pvt. Ltd.",
    period: "August 2019 – December 2020",
    points: [
      "Led logistics & delivery of 12 training programs.",
      "Delivered Python, ML & Embedded Systems training to 300+ students, over 2000+ hours.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Vanmat Technologies Pvt. Ltd.",
    period: "August 2018 – July 2019",
    points: [
      "Contributed to 4 emerging technology solutions in IoT & AI, ensuring successful deployment.",
    ],
  },
  {
    role: "Junior Systems Engineer",
    company: "Vanmat Technologies Pvt. Ltd.",
    period: "September 2017 – July 2018",
    points: ["Supported 2 foundational AI & Embedded Systems projects."],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".experience-section");
      let currentIndex = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentIndex = i;
        }
      });
      setActiveIndex(currentIndex);

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setShowTimeline(rect.top <= 100 && rect.bottom >= window.innerHeight / 2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative flex">
      {/* Timeline bar */}
      {showTimeline && (
        <div className="hidden md:flex flex-col items-center justify-center fixed left-20 top-0 h-screen z-10">
          <div className="w-1 bg-gray-300 dark:bg-gray-600 h-3/4 relative rounded-full">
            {experiences.map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 transition-all duration-300
                ${activeIndex === i ? "bg-blue-500 scale-125" : "bg-gray-400 dark:bg-gray-500"}`}
                style={{ top: `${(i / (experiences.length - 1)) * 100}%` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Experience sections */}
      <div className="w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-section h-screen flex flex-col justify-center items-center px-6 text-center space-y-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">{exp.role}</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {exp.company} | {exp.period}
            </p>
            <ul className="max-w-3xl text-left space-y-3 text-gray-700 dark:text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
