// ============================================================================
// PORTFOLIO DATA - Edit this file to customize your portfolio test
// ============================================================================

export interface SocialLink {
  platform: "github" | "twitter" | "linkedin" | "email" | "medium" | "calendar";
  url: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  type: "current" | "past" | "internship";
  period: string;
  description: string;
  techStack: string[];
  links?: { label: string; url: string }[];
  logo?: string; // Path to logo image in /public
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: "personal" | "client";
  link?: string;
  liveUrl?: string;
  image?: string; // Path to project image in /public
}

// ============================================================================
// PERSONAL INFO
// ============================================================================

export const personalInfo = {
  name: "Deepanshu Kesarwani",
  firstName: "Deepanshu",
  age: 25,
  location: "India",
  title: "Full Stack Developer",
  bio: "Passionate Full Stack Developer 🚀 specializing in modern web applications, AI-powered solutions, and Web3 systems. Experienced in frontend engineering, backend architecture, and building intelligent agents using LLMs and vector databases. I turn ideas into scalable, production-ready products.",
  profileImage: "/ProfileImage2.jpeg", // Place your profile image in /public
};

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const socialLinks: SocialLink[] = [
  {
    platform: "twitter",
    url: "https://x.com/DeepanshuK25581",
    label: "Twitter",
  },
  {
    platform: "github",
    url: "https://github.com/Deepanshukesarwani",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/deepanshu-kesarwani/",
    label: "LinkedIn",
  },
  {
    platform: "email",
    url: "mailto:kesarwanideepanshu428@gmail.com",
    label: "Email",
  },
];

// ============================================================================
// EXPERIENCE
// ============================================================================

export const experiences: Experience[] = [
  {
    company: "Metaverse Ventures (M0)",
    role: "Full Stack Developer",
    type: "current",
    period: "May 2025 – Present",
    description:
      "Led end-to-end development of two flagship AI + Web3 products:\n\n" +
      "🎨 Meta-Create — AI-powered media generation platform with NFT minting\n" +
      "🎮 GenWorld — Text-to-3D model and game generation platform\n\n" +
      "Key Contributions:\n" +
      "• Frontend: Architected responsive, modular UIs using Next.js, shadcn/ui, Tailwind CSS, Framer Motion, and TanStack.\n" +
      "• Backend: Built scalable APIs with NestJS and FastAPI, integrated Prisma ORM, and implemented Redis for caching and real-time workflows.\n" +
      "• Web3: Designed secure authentication and payment flows using Phantom and MetaMask with Solana and Ethereum wallet adapters.\n" +
      "• AI: Integrated 45+ AI models for image, video, and audio generation, enabling prompt-to-3D, prompt-to-game, and NFT workflows.\n\n" +
      "Impact: Owned system architecture and major technical decisions, delivering production-grade platforms that merge AI creativity with blockchain technology.",
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "FastAPI",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Solana",
      "Ethereum",
    ],
    links: [{ label: "Company Website", url: "https://www.m0.org/" }],
    logo: "/m0.jpg",
  },
  {
    company: "GradHub",
    role: "Frontend Developer (Freelance)",
    type: "past",
    period: "February – April 2025",
    description:
      "Part-time freelance work during college focusing on complete website modernization and architecture overhaul.\n\n" +
      "Key Achievements:\n" +
      "• Revamped entire frontend architecture using Next.js and TypeScript for improved performance and user experience\n" +
      "• Built scalable design system with Mantine UI and comprehensive Storybook documentation\n" +
      "• Developed library of modular, reusable components that reduced code redundancy significantly\n" +
      "• Integrated Redux Toolkit for predictable state management with custom hooks and utilities\n" +
      "• Implemented modern development patterns and best practices across the codebase",

    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Mantine", "Redux Toolkit", "Storybook"],
    links: [{ label: "Website", url: "https://www.linkedin.com/company/gradhubindia/" }],
    logo: "/gradhubindia_logo.jpg",
  },
  {
    company: "ResoluteAI Software",
    role: "Frontend Developer",
    type: "past",
    period: "May – August 2024",
    description:
      "Built scalable frontend infrastructure with focus on performance optimization and reusable component architecture.\n\n" +
      "Key Achievements:\n" +
      "• Built reusable UI components using Material-UI library ensuring design consistency and accelerated development\n" +
      "• Implemented and structured a scalable Redux store for state management with custom hooks for API calls, error handling, and session data\n" +
      "• Integrated lazy loading and debouncing techniques to enhance performance in search functionalities and chart rendering\n" +
      "• Optimized application architecture resulting in improved load times and user experience",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Material-UI"],
    links: [],
    logo: "/resoluteAi.jpg",
  },
  {
    company: "Blockchain Research Lab (AKGEC)",
    role: "Senior Coordinator & Frontend Developer",
    type: "past",
    period: "August 2022 – May 2024",
    description:
      "Led technical team of 45+ members, managing multiple college projects and organizing technical events.\n\n" +
      "Key Responsibilities:\n" +
      "• Maintained and developed various college projects: BRL official website, Visitor Entry Portal, Test Portal, and Registration Portal\n" +
      "• Organized and led multiple technical events on campus, each attracting 350+ students\n" +
      "• Collaborated with cross-functional teams on day-to-day technical activities and project development\n" +
      "• Mentored team members on frontend development best practices and modern web technologies",
    techStack: ["React", "TypeScript", "Angular", "Node.js"],
    links: [{ label: "Website", url: "https://brlakgec.com" }],
    logo: "/brl.jpg",
  },
];

// ============================================================================
// PROJECTS
// ============================================================================

export const projects: Project[] = [
  {
    title: "Meta-Create",
    description:
      "MetaCreate gives creators and developers the tools to generate content faster, smarter, and at a scale previously impossible. Every idea becomes a living, cinematic output — instantly, intuitively, and professionally.",
    techStack: ["Next.js", "TypeScript", "Nest.js", "Atoms-jotai", "Redis", "Prisma", "Tanstack Query", "Tailwind CSS", "Framer Motion","Shadcn/ui", "Phantom Wallet Adapter", "MetaMask Wallet Adapter","Posthog","OpenAI API"],
    category: "client",
    liveUrl: "https://metacreate.ai/",
  },
{
  title: "Generative World (GenWorld)",
  description:
   "GenWorld\n\n" +
"AI infrastructure for 3D creation and ownership. Generate 3D assets and games from prompts, mint as NFTs, and monetize through integrated marketplace.\n\n" +
"Built with AI generation, Web3 ownership, and creator economy tools.",
  techStack: ["Next.js", "TypeScript", "Nest.js", "Atoms-jotai", "Redis", "Prisma", "Tanstack Query", "Tailwind CSS", "Framer Motion","Shadcn/ui", "Phantom Wallet Adapter", "MetaMask Wallet Adapter","Posthog","OpenAI API"],
  category: "client",
  liveUrl: "https://forceful-companies-550444.framer.app/",
},
{
  title: "HealthCare+ - Modern Healthcare Appointment Booking",
  description:
   "Healthcare appointment booking app with Next.js 16, React 19, and TypeScript.\n\n" +
"• Doctor search with advanced filtering\n" +
"• AI-powered symptom matching\n" +
"• Appointment booking and management\n" +
"• Dark mode and responsive design",
  techStack: ["Next.js", "Shadcn/ui", "Tailwind CSS", "Framer Motion", "TypeScript", "React", "OpenAI API"],
  category: "client",
  liveUrl: "https://health-care-gamma-six.vercel.app/",
},
{
  title: "Automated LinkedIn Message Generator",
  description: "AI-powered campaign management system for generating personalized LinkedIn outreach messages. Automates message creation with customizable templates and campaign tracking.",
  techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  category: "personal",
  liveUrl: "https://automated-linkedin-message-generator.vercel.app"
}
];
