export const personalInfo = {
  name: "John Doe",
  role: "Full-Stack Developer",
  tagline: "Building digital experiences that matter",
  bio: "I'm a full-stack developer with 5+ years of experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
}

export const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "Tailwind CSS", level: 92 },
  { name: "GraphQL", level: 78 },
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
