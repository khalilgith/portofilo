"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mb-2 text-muted-foreground">
            A selection of projects I&apos;ve built recently
          </p>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
