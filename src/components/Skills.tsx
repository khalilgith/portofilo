"use client"

import { motion } from "framer-motion"
import SkillBar from "@/components/SkillBar"
import { skills } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <div className="space-y-5">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
