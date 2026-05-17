"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactConfig } from "@/lib/data"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setState("sending")

    try {
      await emailjs.sendForm(
        contactConfig.serviceId,
        contactConfig.templateId,
        formRef.current,
        contactConfig.publicKey
      )
      setState("success")
      formRef.current.reset()
    } catch {
      setState("error")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mb-2 text-muted-foreground">
            Have a project in mind? Let&apos;s build something great together.
          </p>
          <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-primary" />
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="from_name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="reply_to" className="text-sm font-medium">
                Email
              </label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              placeholder="What's this about?"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            disabled={state === "sending"}
            className="w-full"
          >
            {state === "sending" ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 size-4" />
                Send Message
              </>
            )}
          </Button>

          {state === "success" && (
            <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="size-4 shrink-0" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {state === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="size-4 shrink-0" />
              Something went wrong. Please try again or email me directly.
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
