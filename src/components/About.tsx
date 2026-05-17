"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{personalInfo.location}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: "Experience", value: "5+ Years" },
              { label: "Projects", value: "20+" },
              { label: "Clients", value: "15+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-muted/50 p-3 text-center"
              >
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
