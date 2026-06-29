import type {
  Project,
  CareerEntry,
  Love,
  Social,
  SubEntry,
  Certification,
} from "../types";
import {
  GiWaveSurfer,
  GiGuitar,
  GiCheeseWedge,
  GiRunningShoe,
} from "react-icons/gi";
import { PiHairDryer } from "react-icons/pi";
import { TbLegoFilled, TbTrafficCone, TbCoffeeOff } from "react-icons/tb";
import { BsWifi1, BsBatteryLow } from "react-icons/bs";

export const skills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Vue3",
  "Vite",
  "Node.js",
  "Express",
  "Spring Boot",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
];

export const career: CareerEntry[] = [
  {
    year: "2026 – Presente",
    role: "Full Stack Developer",
    entity: "Bahia Software",
    type: "work",
    subEntries: [
      {
        year: "Jun 2026 – Presente",
        role: "Programadora Junior",
        entity: "Remoto",
        type: "work",
      },
      {
        year: "Mar 2026 – Jun 2026",
        role: "Desarrolladora Full Stack en prácticas",
        entity: "Remoto",
        type: "work",
      },
    ] satisfies SubEntry[],
  },
  {
    year: " Jul 2026 – Presente",
    role: "Programa AI Engineer",
    entity: "ThePower Tech School",
    type: "education",
    description:
      "Formación especializada en inteligencia artificial aplicada al desarrollo de software: modelos de lenguaje, agentes, RAG, APIs de IA y herramientas del ecosistema actual.",
  },
  {
    year: "2024 – 2026",
    role: "Curso de especialización universitaria en Desarrollo Web Full Stack",
    entity: "UCAM - ThePower Tech School",
    type: "education",
    description:
      "Programa fullstack con enfoque práctico y proyectos reales. React, Next.js, Angular, TypeScript, Node.js, React Native, IONIC, bases de datos, cloud y testing.",
  },
  {
    year: "2024 – 2026",
    role: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    entity: "ThePower Tech School",
    type: "education",
    description:
      "Titulación oficial de Grado Superior en desarrollo web. Base técnica sólida en frontend, backend y bases de datos.",
  },

  {
    year: "2015 – 2025",
    role: "Etapa sanitaria",
    entity: "UDC · UPSA · SERGAS · Sanidad privada",
    type: "work",
    description:
      "Diez años entre formación universitaria y práctica clínica. Me enseñó a trabajar bajo presión, comunicar con claridad y resolver problemas donde no hay solución perfecta.",
    subEntries: [
      {
        year: "2021 – 2025",
        role: "Fisioterapeuta",
        entity: "Servicio Gallego de Salud y sector sanitario privado",
        type: "work",
      },
      {
        year: "2020 – 2021",
        role: "Máster Universitario en Fisioterapia Pediátrica",
        entity: "Universidad Pontificia de Salamanca",
        type: "education",
      },
      {
        year: "2015 – 2020",
        role: "Grado en Fisioterapia",
        entity: "Universidad de A Coruña",
        type: "education",
      },
    ] satisfies SubEntry[],
  },
];

export const projects: Project[] = [
  {
    title: "Snapclash",
    description:
      "App de retos fotográficos diarios con jurado de IA. El sistema evalúa cada foto por velocidad, similitud al tema y originalidad. Grupos privados, leaderboard, feed social y PWA con notificaciones push.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "PWA",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Groq AI",
    ],
    image: "/images/projects/snapclash.webp",
    github: "",
    link: "",
    inProgress: true,
  },
  {
    title: "Garage Manager",
    description:
      "SaaS multiempresa para la gestión integral de talleres mecánicos. Aislamiento lógico de datos. PWA installable, roles de usuario y arquitectura fullstack con React, Express y MongoDB.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "PWA",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Recharts",
    ],
    image: "/images/projects/garagemanager.webp",
    github: "",
    link: "https://garage-manager-frontend-ten.vercel.app",
  },
  {
    title: "Yumflix",
    description:
      "Plataforma de recetas inspirada en Netflix. Explora y busca recetas por región, guárdalas en tu lista y previsualízalas con Smart Positioning y Portals. Tema claro/oscuro, precarga de imágenes y arquitectura basada en Context API.",
    tech: [
      "React",
      "Vite",
      "React Router",
      "Context API",
      "Axios",
      "TheMealDB API",
    ],
    image: "/images/projects/yumflix.webp",
    github: "https://github.com/yriaforjan/yumflix",
    link: "https://yumflix.vercel.app/",
  },
  {
    title: "Retro Videogames API",
    description:
      "API backend con Express y MongoDB. CRUD completo, sistema de autenticación y roles con JWT y BCrypt, e integración con Cloudinary para la gestión del ciclo de vida de las imágenes.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "BCrypt", "Cloudinary"],
    image: "/images/projects/backendapivideogames.webp",
    github: "https://github.com/yriaforjan/retro-game-api-backend",
    link: "https://github.com/yriaforjan/retro-game-api-backend",
  },

  {
    title: "Dootzy App",
    description:
      "PWA de gestión de tareas y calendario con FullCalendar.io, soporte offline y datos persistentes con localStorage. Proyecto en equipo gestionado con GitHub.",
    tech: ["Vite", "JavaScript", "PWA", "FullCalendar", "WeatherAPI"],
    image: "/images/projects/dootzy.webp",
    github: "https://github.com/Cvidal84/proyecto5",
    link: "https://dootzy.vercel.app/",
  },
  {
    title: "Landing Deportista Profesional",
    description:
      "Landing page responsive con efectos parallax, animaciones mediante Intersection Observer y un banner de noticias dinámico que consume un feed RSS en tiempo real.",
    tech: ["Vite", "JavaScript", "Tailwind CSS", "EmailJS", "RSS Feed"],
    image: "/images/projects/lidiaparada.webp",
    github: "",
    link: "https://lidiaparada.vercel.app/",
  },
  {
    title: "PixHive",
    description:
      "Galería de imágenes asíncrona que consume la API de Unsplash, con paginación, filtros de orientación y enfoque en un diseño de interfaz limpio e intuitivo.",
    tech: ["Vite", "JavaScript", "CSS3", "Unsplash API"],
    image: "/images/projects/pixhive.webp",
    github: "https://github.com/yriaforjan/Proyecto-Web-Asincrono",
    link: "https://pixhive.vercel.app/",
  },
  {
    title: "CV Digital",
    description:
      "CV digital en formato SPA construido con Vite y JavaScript vanilla. Diseño responsive, animaciones interactivas y modo claro/oscuro. El predecesor de este portfolio.",
    tech: ["Vite", "JavaScript", "CSS3", "SPA"],
    image: "/images/projects/cv.webp",
    github: "https://github.com/yriaforjan/Proyecto-4-cv",
    link: "https://yriaforjan-cv.vercel.app",
  },

  {
    title: "Bisutere",
    description:
      "Primer proyecto web completo, construido íntegramente con HTML5 y CSS3. Marcado semántico, accesibilidad y diseño limpio para mostrar el catálogo de una pequeña joyería artesanal.",
    tech: ["HTML5", "CSS3"],
    image: "/images/projects/bisutere.webp",
    github: "https://github.com/yriaforjan/Proyecto-1",
    link: "https://bisutere.vercel.app",
  },
];

export const loves: Love[] = [
  { name: "Perseguir olas y disfrutar del mar", icon: GiWaveSurfer },
  { name: "Quemar el asfalto para despejar la mente", icon: GiRunningShoe },
  { name: "Construir obras maestras de LEGO", icon: TbLegoFilled },
  { name: "Los clásicos del Rock que nunca mueren", icon: GiGuitar },
  { name: "El queso", icon: GiCheeseWedge },
];

export const hates: Love[] = [
  { name: "El internet lento", icon: BsWifi1 },
  { name: "Los atascos eternos", icon: TbTrafficCone },
  { name: "Quedarme sin café", icon: TbCoffeeOff },
  { name: "Batería a cero", icon: BsBatteryLow },
  { name: "Un mal día de pelo", icon: PiHairDryer },
];

export const certifications: Certification[] = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    badge: "/images/badges/az-900.webp",
    url: "https://www.credly.com/badges/76a9516c-2c99-4465-99bf-241937ff31e5",
  },
  {
    name: "Microsoft Azure AI Fundamentals (AI-901)",
    badge: "/images/badges/ai-900.webp",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    inProgress: true,
  },
];

export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/yriaforjan" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yria-forjan-oliveira/",
  },
  { name: "Email", url: "mailto:yriaforjan.oliveira@gmail.com" },
];
