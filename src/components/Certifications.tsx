"use client";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Project Management Professional (PMP)® Certificate",
    issuer: "PMI",
    id: "4134029",
    date: "30 June 2025",
  },
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Coursera",
    id: "TJUC468UXPXD",
    date: "28 July 2024",
  },
  {
    title: "Certified Master Trainer in Drone Service Technician",
    issuer: "ESSCI",
    date: "August 2022",
  },
  {
    title:
      "Certified Master Trainer in Drone Manufacturing and Assembly Technician",
    issuer: "ESSCI",
    date: "August 2022",
  },
  {
    title: "Microchip Certified Trainer in Embedded System Development",
  },
  {
    title: "ARM Certified Trainer in Embedded System Development",
  },
  {
    title: "Cypress Certified Trainer in Embedded System Development",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>

      <ul className="space-y-6 max-w-3xl mx-auto">
        {certifications.map((cert, idx) => (
          <li
            key={idx}
            className="flex items-start gap-4 p-4 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
          >
            <Award className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm opacity-80">
                {cert.issuer && `Issued by ${cert.issuer}`}
                {cert.id && ` | ${cert.id}`}
                {cert.date && ` | ${cert.date}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
