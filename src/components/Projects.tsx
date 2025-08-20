"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "EduvanceAI LMS",
    company: "Vanmat Technologies Pvt. Ltd.",
    timeline: "Jan 2025 – Present",
    description:
      "Leading development of a chatbot-integrated LMS with scenario-driven learning.",
    details: [
      "Leading the development of a scenario-driven chatbot-integrated LMS platform with a team of 5 developers; achieved 75% project completion within 5 months.",
      "Guiding team members on UI/UX design and QA processes alongside other project tasks to ensure timely delivery and alignment with learning objectives.",
    ],
    tags: ["AI", "EdTech", "LMS"],
  },
  {
    title: "Corporate Capability Building",
    company: "Vanmat Technologies Pvt. Ltd.",
    timeline: "2024",
    description:
      "Delivered specialized corporate training programs enhancing workforce capability.",
    details: [
      "Conducted customized training programs for corporate clients in AI, IoT, and Drone Technology.",
      "Strengthened workforce capabilities by aligning training outcomes with industry-specific skill demands.",
      "Provided hands-on workshops and post-training assessments for measurable results.",
    ],
    tags: ["Corporate Training", "IoT", "AI", "Drone Tech"],
  },
  {
    title: "ToT-ToA Drone Training Program",
    company: "Vanmat Technologies Pvt. Ltd.",
    timeline: "Nov 2022 – Dec 2023",
    description:
      "Directed 22 training sessions certifying 142 NSTI/ITI faculty across India.",
    details: [
      "Directed 22 training sessions over 700 hours, certifying 142 NSTI/ITI faculty members across India.",
      "Coordinated logistics, scheduling, travel and equipment, enhancing training delivery.",
      "Guided 8 sessions personally, bolstering the company’s training excellence reputation.",
    ],
    tags: ["Drone Tech", "Training", "ESSCI"],
  },
  {
    title: "Army Public School Lab Setup",
    company: "Vanmat Technologies Pvt. Ltd.",
    timeline: "Aug 2021 – Oct 2022",
    description:
      "Established advanced AI, Robotics, AR-VR, and Drone labs across 61 APS institutes.",
    details: [
      "Established advanced educational labs related to Robotics, AR-VR-AI, Drone, and Space in 61 APS institutes in NorthEast command amid COVID-19.",
      "Coordinated procurement, logistics and strategic planning, ensuring timely delivery and facilitating remote orientation for faculties.",
    ],
    tags: ["AI", "IoT", "AR/VR", "Education"],
  },
  {
    title: "Technology Training Programs",
    company: "Vanmat Technologies Pvt. Ltd.",
    timeline: "Aug 2018 – Jul 2021",
    description:
      "Delivered 3000+ hours of training in IoT, Embedded Systems, ML, and Drone Tech.",
    details: [
      "Delivered 3000+ hours of specialized training in IoT, Embedded Systems, Machine Learning, and Drone technology enhancing the skills of over 1500 students and faculty members.",
      "Coordinated 25 training sessions with detailed scheduling, accommodations, and resource allocation, ensuring high-quality program execution.",
    ],
    tags: ["Python", "ML", "Embedded", "IoT", "Drone"],
  },
  {
    title: "Autograder",
    company: "Vanmat Technologies Pvt. Ltd.",
    timeline: "Sep 2017",
    description:
      "Built automatic grading services for embedded hardware platforms.",
    details: [
      "Developed 2 automatic grading services for various embedded hardware platforms used as part of gradeME™, an advanced skill assessment platform for the electronics industry.",
    ],
    tags: ["Embedded Systems", "Automation"],
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Calculate tallest card height for uniform sizing
  useEffect(() => {
    const heights = refs.current.map((el) => (el ? el.scrollHeight : 0));
    setCardHeight(Math.max(...heights));
  }, []);

  return (
    <section id="projects" className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{ minHeight: cardHeight || "auto" }}
            className={`relative rounded-2xl shadow-md p-6 border transition-colors duration-300 flex flex-col
              ${hovered === idx 
                ? "bg-blue-600 border-blue-700 text-white" 
                : "bg-white border-blue-600 text-gray-900"}`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Title (Always Visible at Top-Center) */}
            <h3 className="text-lg font-semibold text-center mb-2">
            {project.title}
            </h3>

            {/* Default Content */}
            <motion.div
            animate={{ opacity: hovered === idx ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex-1 text-sm"
            >
            <p className="text-xs opacity-80 mt-1 mb-3 text-center">
                {project.company} | {project.timeline}
            </p>
            <p className="opacity-90 mb-4 text-center">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag, i) => (
                <span
                    key={i}
                    className={`px-2 py-0.5 text-xs rounded-full font-medium border 
                    ${hovered === idx 
                    ? "border-white text-white" 
                    : "border-blue-600 text-blue-600"}`}
                >
                    {tag}
                </span>
                ))}
            </div>
            </motion.div>

            {/* Hover Content */}
            {hovered === idx && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-6 flex flex-col rounded-2xl text-sm"
            >
                {/* Start list lower so it doesn’t touch title */}
                <ul className="list-disc list-inside space-y-3 text-xs mt-6">
                {project.details.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
            </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
