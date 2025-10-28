export type Project = {
  id: string;
  title: string;
  image: string;
  github?: string;
  demo?: string;
  tech: string[];
  devMode: boolean;
  shortDescription: string;
  longDescription: string;
  date: string;
};

type WorkExperience = {
  id: string;
  title: string;
  undertitle: string;
  date: string;
  desc1: string;
  desc2?: string;
  image: string;
};

type Education = {
  id: string;
  title: string;
  undertitle: string;
  date: string;
  desc1: string;
  desc2?: string;
  image: string;
};

type Award = {
  id: string;
  title: string;
  undertitle: string;
  date: string;
  desc1: string;
  desc2?: string;
  image: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: "new-notecards",
    title: "New NoteCards",
    image: "/projects/notecards.png",
    github: "https://github.com/Berget1411/notecards",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Hono",
      "tRPC",
      "Cloudflare Workers",
      "Drizzle ORM",
      "PostgreSQL",
      "Better-Auth",
      "RAG and AI workflow with Vercel AI SDK",
      "Turborepo",
      "Biome",
    ],
    devMode: true,
    shortDescription:
      "AI-powered flashcard app with Notion integration, rebuilt with modern full-stack architecture",
    longDescription:
      "NoteCards is a comprehensive AI-powered flashcard application with seamless Notion integration, built using a modern monorepo architecture. The app leverages Next.js for the frontend with shadcn/ui components and Tailwind CSS for a polished UI. The backend utilizes Hono, a lightweight and performant server framework, with tRPC for end-to-end type-safe APIs. Data is managed through Drizzle ORM with PostgreSQL, while authentication is handled by Better-Auth. AI capabilities are powered by Mastra and Vercel AI SDK for intelligent flashcard generation. The project is optimized with Turborepo for efficient builds, uses Biome for linting and formatting, and is deployed on Cloudflare Workers for edge performance. Features include AI-driven flashcard creation, Notion workspace integration, and a developer-focused tech stack designed for scalability and type safety.",
    date: "Current, 2025",
  },
  {
    id: "tone",
    title: "Tone",
    image: "/projects/tone.png",
    github: "https://github.com/NikVis01/Tone_AI_v2",
    demo: "https://preview--sales-assist-glow.lovable.app/",
    tech: [
      "Next.js",
      "Express.js",
      "Socket.IO",
      "TypeScript",
      "Tailwind CSS",
      "Google Cloud Speech-to-Text API",
      "Bun",
      "Prisma",
      "PostgreSQL",
    ],
    devMode: false,
    shortDescription:
      "Real-time speech transcription sales copilot with AI-powered analysis",
    longDescription:
      "Tone is an ElevenLabs prize-winning sales copilot built in 20 hours for the Project Europe x Lovable x ElevenLabs hackathon. It features real-time speech-to-text conversion using Google Cloud Speech-to-Text API, live bidirectional communication via Socket.IO, and direct browser microphone integration with the MediaRecorder API. The application provides instant interim and final transcription results with a modern, intuitive interface built using Next.js and Tailwind CSS. The backend is powered by Express.js and Bun runtime, with PostgreSQL database management through Prisma ORM.",
    date: "Jul 2025",
  },
  {
    id: "smartpylogger",
    title: "SmartPyLogger",
    image: "/projects/smartpylogger.png",
    github: "https://github.com/Berget1411/Couchbase_Hack_25",
    demo: "https://smartpylogger.vercel.app/",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Polar.sh",
      "Python",
      "FastAPI",
      "Python packages",
      "Couchbase",
    ],
    devMode: false,
    shortDescription:
      "FastAPI logging tool with full request tracking, AI analysis, and traffic control. Built during the 2025 AWS x Couchbase x Cillers hackathon.",
    longDescription:
      "SmartPyLogger is a lightweight FastAPI tool for developers, built in under two weeks at the 2025 AWS x Couchbase x Cillers hackathon by Niklavs Visockis, Jonas Lorenz, and Ludvig Bergström. It logs all requests, analyzes them with AI, blocks or flags suspicious traffic via CORS/IP rules, and comes as a pip-installable package with a real backend, UI, auth, and payments. Designed with a no-fluff, dev-first mindset — no landing page, just working code.",
    date: "June, 2025",
  },
  {
    id: "Veyla",
    title: "Veyla",
    image: "/projects/veyla.png",
    demo: "https://veyla.nu",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Python", "FastAPI"],
    devMode: false,
    shortDescription:
      "Web app that uses AI to simplify estate inventory after death. Built at a hackathon by SSE Business Lab, KTH AI Society, and Microsoft.",
    longDescription:
      "Veyla is a digital tool that helps families complete estate inventories — the legal process required after a person's death — in a simple, guided, and secure way. Users answer structured questions, receive personalized legal recommendations from an AI system, and submit everything digitally to the Swedish Tax Agency. The project was developed in two weeks during a hackathon organized by SSE Business Lab, KTH AI Society, and Microsoft. I was responsible for both frontend and backend development, building the full-stack web application with a focus on user experience, AI integration, and secure document handling. Veyla replaces traditional legal complexity with clarity, automation, and accessibility.",
    date: "June, 2025",
  },
  {
    id: "portfolio",
    image: "/projects/portfolio_screenshot.png",
    github: "https://github.com/ludvigbergstrom/ludvigbergstrom.com",
    demo: "https://ludvigbergstrom.com",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    devMode: false,
    title: "Portfolio",
    shortDescription:
      "My website displaying my knowledge, experiences, tech-stack and a little about me.",
    longDescription:
      "A website that I built to display my knowledge, experiences, tech-stack and a little about me. Examples of technologies used are Next.js and Typescript for frontend, Tailwind CSS for styling and i18n for language support.",
    date: "Jan, 2025",
  },
  {
    id: "Andysolam",
    image: "/projects/andysolam.png",
    demo: "https://store.andysolam.com",
    tech: ["Next.js", "Tailwind CSS", "Tanstack Query"],
    devMode: false,
    title: "Andysolam",
    shortDescription:
      "Working on an e-commerce website and main website for company managing Rust servers.",
    longDescription:
      "Working on an e-commerce website and main website for company managing Rust servers.",
    date: "Current, 2025",
  },
  {
    id: "e-commerce",
    image: "/projects/project_placeholder.png",
    github: "https://github.com/Berget1411/e-commerce",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Redis",
      "Zustand",
      "Stripe",
    ],
    devMode: false,
    title: "E-commerce",
    shortDescription:
      "A fullstack e-commerce website with Stripe payment integration.",
    longDescription:
      "A fullstack e-commerce website with store page and admin dashboard. The website is built with technologies like Next.js, Tailwind CSS, TypeScript, Express, MongoDB, Redis and Stripe for payment integration.",
    date: "Oct, 2024",
  },
  {
    id: "ths",
    demo: "https://thsfuture.se/",
    image: "/projects/ths.png",
    tech: ["Next.js", "Tailwind CSS", "i18n", "Framer Motion"],
    devMode: true,
    title: "THS",
    shortDescription: "Working on THS Business's website",
    longDescription:
      "Working on THS Business's website, a platform connecting KTH students with future employers.",
    date: "Current, 2025",
  },
  {
    id: "kthais",
    demo: "https://kthais.com/",
    image: "/projects/kthais.png",
    tech: ["Next.js", "Go", "Tailwind CSS", "TypeScript", "Framer Motion"],
    devMode: true,
    title: "KTH AI Society",
    shortDescription: "Working full-stack at KTHAIS new website",
    longDescription:
      "Developing and maintaining the website for KTH AI Society, a student community focused on artificial intelligence.",
    date: "Current, 2025",
  },
  {
    id: "notecards",
    devMode: true,
    image: "/projects/notecards.png",
    demo: "https://preview--notecards-mindshare.lovable.app/",
    tech: [
      "Vite.js",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
      "OpenAI",
      "Lovable AI",
    ],
    title: "NoteCards",
    shortDescription:
      "A flashcard app with notion integration and AI-driven flashcard generation that won a hackathon at Lovable.",
    longDescription:
      "I recently took part in—and won—a hackathon at Lovable, a Swedish AI startup, with an app that combines the efficiency of ANKI flashcard learning, seamless Notion integration, and AI-driven flashcard generation. Though the project is still in its early stages, I am eager to keep developing the app and launch it soon.",
    date: "Current, 2025",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "kthais_vice_chairman",
    title: "KTH AI Society",
    undertitle: "Vice Chairman",
    date: "May 2025 - Present",
    desc1:
      "Managing the society's events and activities, and collaborating with other societies to build the AI community at KTH.",
    image: "/experience/kthais.jpeg",
  },
  {
    id: "weknowit",
    title: "We Know IT",
    undertitle: "Full-Stack IT Consultant",
    date: "Mar 2025 - Present",
    desc1: "Deliver innovative, end-to-end IT solutions to diverse clients.",
    desc2: "Working on various client projects with modern web technologies.",
    image: "/experience/weknowit.jpeg",
  },
  {
    id: "kthais",
    title: "KTH AI Society",
    undertitle: "Full-Stack Developer",
    date: "Feb 2025 - Present",
    desc1:
      "Develop and maintain the website and IT systems for a student community focused on AI.",
    desc2: "Building tools to support AI education and events at KTH.",
    image: "/experience/kthais.jpeg",
  },
  {
    id: "ths",
    title: "THS Business",
    undertitle: "Frontend Lead & Full-Stack Developer",
    date: "Oct 2024 - Present",
    desc1:
      "Developing a platform connecting KTH students with future employers.",
    desc2: "Leading the frontend development team and technical architecture.",
    image: "/experience/ths.jpeg",
  },
  {
    id: "i-start",
    title: "iStart - KTH Entrepreneurship Society",
    undertitle: "Board Member",
    date: "Nov 2024 - Present",
    desc1:
      "Organize events connecting students with startups, investors, and mentors.",
    desc2:
      "Collaborating nationally and internationally to build the entrepreneurship community.",
    image: "/experience/istart.jpeg",
  },
  {
    id: "atlas-copco",
    title: "Atlas Copco",
    undertitle: "Summer Intern",
    date: "Jul 2024 - Aug 2024",
    desc1: "Developed the front end of a joint management application.",
    desc2: "Used React, TypeScript, Vite, and Bulma CSS with Git and Docker.",
    image: "/experience/atlas.jpeg",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "kth",
    title: "KTH Royal Institute of Technology",
    undertitle: "M.Sc. Industrial Engineering and Management",
    date: "Aug 2024 - Jun 2029",
    desc1: "One of Europe's leading technical universities.",
    desc2: "Current Grade: 5.00 / 5.00",
    image: "/education/kth.jpeg",
  },
  {
    id: "odin",
    title: "The Odin Project",
    undertitle: "Full-Stack Development Course",
    date: "Jul 2023 - Jun 2024",
    desc1: "Comprehensive curriculum for modern web development.",
    desc2: "Technologies: Next.js, Typescript, Express.js & much more!",
    image: "/education/odin.png",
  },
  {
    id: "ng",
    title: "Nacka Gymnasium",
    undertitle: "Gymnasieexamen, Natural Sciences",
    date: "Aug 2020 - Jun 2023",
    desc1: "Focused on natural sciences with advanced math and physics.",
    desc2: "Grade: 22.29 / 22.5 points",
    image: "/education/ng.png",
  },
];

export const AWARDS: Award[] = [
  {
    id: "project_europe_lovable_elevenlabs",
    title:
      "Started building Tone & won ElevenLabs prize at Project Europe hackathon",
    undertitle: "Project Europe × Lovable × ElevenLabs",
    desc1:
      "Led backend development for Tone, an AI-powered sales copilot, using TypeScript. The project was built during a hackathon collaboration between Project Europe, Lovable, and ElevenLabs.",
    date: "Jul 2025",
    image: "/awards/tone.png",
  },
  {
    id: "antler_kthais",
    title: "Continued on Tone",
    undertitle: "Antler VC x KTH AI Society",
    desc1:
      "Participated in a hackathon organized by Antler VC and KTH AI Society, developing Tone, an AI-powered solution.",
    date: "Aug 2025",
    image: "/awards/tone.png",
  },
  {
    id: "nordic_software_summit",
    title: "Continued on Tone",
    undertitle: "Nordic Software Summit",
    desc1:
      "Participated in the Nordic Software Summit, working on Tone, an innovative AI project.",
    date: " Aug 2025",
    image: "/awards/tone.png",
  },
  {
    id: "lovable_hackathon",
    title: "Lovable Hackathon Winner",
    undertitle: "Swedish AI Startup Competition",
    desc1:
      "Won a competitive hackathon by developing an app that integrates ANKI flashcard techniques, Notion, and AI-driven flashcard generation.",
    date: "Feb 2025",
    image: "/awards/lovable_hackathon.png",
  },
  {
    id: "SSE_hackathon",
    title: "Hackathon - SSE Business Lab x KTH AI Society x Microsoft",
    undertitle: "SSE Business Lab",
    desc1:
      "Participated in a hackathon organized by SSE Business Lab, KTH AI Society, and Microsoft, where we developed a web application to automate the process of estate inventory of deceased person.",
    date: "May 2025",
    image: "/awards/SSE_hackathon.jpg",
  },
  {
    id: "AWS_hackathon",
    title: "Hackathon - Disaster Resilience Hackathon at AWS Sweden",
    undertitle: "AWS Sweden",
    desc1: "Participated in a hackathon organized by AWS Sweden",
    date: "June 2025",
    image: "/awards/aws.png",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Building SmartPyLogger at a hackathon",
    description:
      "The complete story of how three developers built SmartPyLogger in under two weeks during the AWS x Couchbase x Cillers hackathon",
    link: "/blog/building-smartpylogger-hackathon-story",
    uid: "blog-2",
  },
  {
    title: "Exploring the Intersection of Design, AI, and Design Engineering",
    description: "How AI is changing the way we design",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-1",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/Berget1411",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ludvig-bergstrom/",
  },
  {
    label: "Chess",
    link: "https://www.chess.com/member/ludvig1411",
  },
  {
    label: "Leetcode",
    link: "https://leetcode.com/u/lzIRpJQQHb/",
  },
];

export const EMAIL = "lubergst@kth.se";
