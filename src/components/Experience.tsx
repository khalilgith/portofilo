"use client"

import { motion } from "framer-motion"
import { Briefcase, ExternalLink } from "lucide-react"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-primary mb-2">
            // experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Professional Experience</h2>
        </motion.div>

        <div className="relative space-y-12">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          {experience.map((item, index) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-full border border-border bg-card">
                <Briefcase className="size-4 text-primary" />
              </div>

              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50">
                <div className="mb-3 flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-semibold">{item.role}</h3>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      @ {item.company}
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                </div>

                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <p className="mb-2 text-xs text-muted-foreground">{item.location}</p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
