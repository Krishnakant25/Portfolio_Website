/**
 * Projects data — edit here to add/remove/update project cards.
 * Each project maps to a <ProjectCard> component.
 */
export const projects = [
  {
    id: 1,
    title: 'AI Voice Agent',
    description:
      'An intelligent voice-enabled AI agent capable of real-time conversation, intent detection, and task execution using OpenAI Whisper and TTS APIs.',
    tags: ['Python', 'OpenAI', 'Whisper', 'FastAPI', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    github: 'https://github.com/krishnakantsahu',
    demo: null,
  },
  {
    id: 2,
    title: 'Telegram Stock Trading Bot',
    description:
      'A fully automated Telegram bot that monitors markets, executes trades via broker APIs, and sends real-time alerts with portfolio P&L summaries.',
    tags: ['Python', 'Telegram API', 'Pandas', 'TA-Lib', 'Alpaca API'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    github: 'https://github.com/krishnakantsahu',
    demo: null,
  },
  {
    id: 3,
    title: 'Restaurant Booking System',
    description:
      'End-to-end reservation platform with table management, real-time availability, email confirmations, and an admin analytics dashboard.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Resend'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    github: 'https://github.com/krishnakantsahu',
    demo: null,
  },
  {
    id: 4,
    title: 'Invoice Data Extraction System',
    description:
      'Automated pipeline that ingests PDF invoices, extracts structured data using LLMs + OCR, validates fields, and exports to Excel/ERP systems.',
    tags: ['Python', 'LangChain', 'Tesseract', 'GPT-4o', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    github: 'https://github.com/krishnakantsahu',
    demo: null,
  },
]

/**
 * Navigation links — synced with section IDs on the page.
 */
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Social/contact links.
 */
export const socialLinks = {
  email: 'krishnakantsahu@email.com',
  linkedin: 'https://linkedin.com/in/krishnakantsahu',
  github: 'https://github.com/krishnakantsahu',
}

/**
 * Certifications listed in the About section.
 */
export const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    icon: '▲',
  },
  {
    title: 'IBM Data Science & AI Professional Certificate',
    issuer: 'IBM / Coursera',
    icon: '◆',
  },
  {
    title: 'Machine Learning & Analytics',
    issuer: 'Imperial College London',
    icon: '●',
  },
]
