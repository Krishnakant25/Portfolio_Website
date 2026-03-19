/**
 * Central data file for all portfolio projects.
 * Edit this file to add / remove / update projects.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "ai-voice-agent",
    title: "AI Voice Agent",
    description:
      "Conversational voice AI agent built with LLMs, capable of handling multi-turn dialogues, intent recognition, and task execution in real-time via speech interfaces.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    githubUrl: "https://github.com/krishnakantsahu/ai-voice-agent",
    tags: ["Python", "LLM", "OpenAI", "Speech API", "FastAPI"],
    featured: true,
  },
  {
    id: "telegram-stock-bot",
    title: "Telegram Stock Trading Bot",
    description:
      "Automated stock trading bot integrated with Telegram. Sends real-time buy/sell signals, portfolio summaries, and price alerts using live market data APIs.",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop",
    githubUrl: "https://github.com/krishnakantsahu/telegram-stock-bot",
    tags: ["Python", "Telegram API", "Finance API", "Pandas", "Automation"],
    featured: true,
  },
  {
    id: "restaurant-booking",
    title: "Restaurant Booking System",
    description:
      "Full-stack restaurant reservation platform with real-time table availability, automated confirmation emails, admin dashboard, and analytics reporting.",
    thumbnail:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop",
    githubUrl: "https://github.com/krishnakantsahu/restaurant-booking",
    tags: ["Python", "Django", "PostgreSQL", "Celery", "REST API"],
  },
  {
    id: "invoice-extraction",
    title: "Invoice Data Extraction System",
    description:
      "AI-powered document intelligence pipeline that extracts structured data from unstructured invoices and receipts using OCR and LLM parsing, with 95%+ accuracy.",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&auto=format&fit=crop",
    githubUrl: "https://github.com/krishnakantsahu/invoice-extractor",
    tags: ["Python", "OCR", "GPT-4", "Pandas", "SQL"],
    featured: true,
  },
];
