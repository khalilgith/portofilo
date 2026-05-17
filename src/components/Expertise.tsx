"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Server } from "lucide-react"
import { expertise } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="size-6" />,
  layout: <Layout className="size-6" />,
  server: <Server className="size-6" />,
}

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-primary mb-2">
            // expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">My Expertise</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {iconMap[item.icon] || <Code2 className="size-6" />}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
