"use client"

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -bottom-32 right-1/4 size-80 rounded-full bg-blue-500/5 blur-[100px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  )
}
