export const personalInfo = {
  name: "Khalil Yahyaoui",
  role: "VibeCoder",
  tagline: "Building digital experiences that matter",
  bio: "I'm a Computer Science student with a passion for building clean, performant web applications and solving real-world problems through code. I work across the full stack — from designing intuitive user interfaces to architecting backend systems and databases. I'm constantly exploring new technologies, contributing to side projects, and turning ideas into shipped products. Currently open to internships, collaborations, and entry-level opportunities where I can grow and make an impact.",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
}

export const skills = [
  { name: "Python", level: 90 },
  { name: "HTML / CSS", level: 95 },
  { name: "SQL", level: 95 },
  { name: "React", level: 80 },
  { name: "JavaScript", level: 78 },
  { name: "C", level: 74 },
  { name: "Node.js", level: 65 },
  { name: "TypeScript", level: 60 },
  { name: "REST APIs", level: 75 },
  { name: "Git / GitHub", level: 85 },
  { name: "Docker", level: 45 },
  { name: "Bash / Linux", level: 50 },
  { name: "PowerShell", level: 40 },
]

export const projects = [
  {
    title: "ShopFlow",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing via Stripe, and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/projects/shopflow.jpg",
    link: "https://shopflow.example.com",
    github: "https://github.com/johndoe/shopflow",
  },
  {
    title: "TaskForge",
    description: "Collaborative project management tool with Kanban boards, real-time updates, team chat, and GitHub integration.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/projects/taskforge.jpg",
    link: "https://taskforge.example.com",
    github: "https://github.com/johndoe/taskforge",
  },
  {
    title: "WeatherVue",
    description: "Beautiful weather dashboard with 7-day forecasts, animated weather maps, and location-based alerts.",
    tech: ["Vue.js", "D3.js", "OpenWeather API", "Tailwind"],
    image: "/projects/weathervue.jpg",
    link: "https://weathervue.example.com",
    github: "https://github.com/johndoe/weathervue",
  },
  {
    title: "DevMetrics",
    description: "Analytics platform for developers to track repository stats, code quality, and team productivity across GitHub orgs.",
    tech: ["Next.js", "GraphQL", "Python", "Redis"],
    image: "/projects/devmetrics.jpg",
    link: "https://devmetrics.example.com",
    github: "https://github.com/johndoe/devmetrics",
  },
]

export const socialLinks = {
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  email: "john@example.com",
}

export const contactConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
}

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
