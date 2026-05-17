"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"

const categories = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web-dev" },
  { label: "Data Visualization", value: "data-viz" },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-primary mb-2">
            // work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My Projects</h2>
          <p className="mt-3 text-muted-foreground max-w-lg">
            A selection of projects I&apos;ve built. Each one solves real problems and showcases different technologies.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center gap-4 font-mono text-xs tracking-wider">
          <span className="text-muted-foreground">Filter by</span>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`transition-colors duration-200 ${
                activeFilter === cat.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
              <span className="text-muted-foreground ml-1">
                {cat.value === "all"
                  ? `(${projects.length})`
                  : `(${projects.filter((p) => p.category === cat.value).length})`}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 size-3.5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" className="mr-1 size-3.5" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Source
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
