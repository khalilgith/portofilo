"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface NavLinkProps {
  href: string
  label: string
  isActive?: boolean
  onClick?: () => void
}

export default function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-medium transition-colors duration-200",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="activeSection"
          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
        />
      )}
    </motion.a>
  )
}
