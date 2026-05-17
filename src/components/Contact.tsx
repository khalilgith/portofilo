"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { personalInfo, socialLinks, testimonials } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-primary mb-2">
            // contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get In Touch</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-2 text-xl font-semibold">Available for opportunities</h3>
            <p className="mb-8 text-muted-foreground">
              Have an exciting project you need help with? Send me an email or reach out via instant message!
            </p>

            <div className="space-y-4">
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card group-hover:border-primary/50 transition-colors">
                    <Mail className="size-4" />
                  </span>
                  <span className="font-mono text-sm">{socialLinks.email}</span>
                </a>
              )}
              <ContactLink
                href={socialLinks.github}
                icon={
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                }
                label="GitHub"
                username="khalilgith"
              />
              <ContactLink
                href={socialLinks.instagram}
                icon={
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                }
                label="Instagram"
                username="@khaleel__yh"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
              >
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  icon,
  label,
  username,
}: {
  href: string
  icon: React.ReactNode
  label: string
  username: string
}) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
    >
      <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-card group-hover:border-primary/50 transition-colors">
        {icon}
      </span>
      <div>
        <span className="font-mono text-sm">{username}</span>
        <span className="block text-xs text-muted-foreground">{label}</span>
      </div>
    </a>
  )
}
