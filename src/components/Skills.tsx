"use client"

import { motion } from "framer-motion"
import SkillBar from "@/components/SkillBar"
import { skills } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-primary mb-2">
            // skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Technologies</h2>
        </motion.div>

        <div className="space-y-5">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
