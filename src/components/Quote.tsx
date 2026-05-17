"use client"

import { motion } from "framer-motion"

export default function Quote() {
  return (
    <section className="py-24 px-6 border-y border-border">
      <div className="mx-auto max-w-3xl text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl italic text-muted-foreground leading-relaxed"
        >
          &ldquo;Sometimes the best way to solve a problem is to help others.&rdquo;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-mono text-xs tracking-wider text-primary"
        >
          — Uncle Iroh, &apos;Avatar: The Last Airbender&apos;
        </motion.p>
      </div>
    </section>
  )
}
