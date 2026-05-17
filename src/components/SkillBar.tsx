"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  level: number
  index: number
}

export default function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-wider text-muted-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-amber-500/70"
        />
      </div>
    </motion.div>
  )
}
