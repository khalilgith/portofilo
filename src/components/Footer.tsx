import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-center text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <Heart className="inline-block size-3.5 text-red-500" /> using Next.js
        </p>
      </div>
    </footer>
  )
}
