"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"


type Props = { id: string; title: string; subtitle?: string; children: React.ReactNode; className?: string }


export default function Section({ id, title, subtitle, children, className }: Props) {
return (
<section id={id} className={cn("section", className)}>
<div className="container">
<motion.h2
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.5 }}
className="section-title"
>
{title}
</motion.h2>
{subtitle && <p className="section-sub max-w-2xl">{subtitle}</p>}
<motion.div
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5, delay: 0.05 }}
className="mt-10"
>
{children}
</motion.div>
</div>
</section>
)
}