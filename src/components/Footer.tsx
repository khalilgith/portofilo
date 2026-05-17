export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-center text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} Made with passion by Khalil Yahyaoui.
        </p>
        <p className="font-mono text-xs">All rights reserved.</p>
      </div>
    </footer>
  )
}
