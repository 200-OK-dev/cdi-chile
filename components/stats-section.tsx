"use client"
import { motion } from "framer-motion"

export function StatsSection() {
  const stats = [
    { value: "130M+", label: "Weekly downloads" },
    { value: "$500+", label: "Enterprise customers" },
    { value: "13K+", label: "GitHub stars" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
              <span className="text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
