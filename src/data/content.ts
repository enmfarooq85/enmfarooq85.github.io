// Local Imports
import type {
  About,
  Award,
  Experience,
  Focus,
  Project,
  Service,
  Talk,
} from "@/types/content";

/*
 * ┌───────────────────────────────┐
 * │        🌟 About 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const about: About = {
  imageUrl: "https://avatars.githubusercontent.com/u/143240734?v=4",
  name: "Muhammad Farooq",
  degree: "Bachelors in Computer Science",
  instituteName: "Virtual University of Pakistan",
  email: "enmuhammadfarooq@gmail.com",
  p1: "I am a Full Stack Developer with strong experience in building modern web and mobile applications using the MERN stack, React Native, and Next.js. I enjoy developing scalable, efficient, and user-focused solutions across both frontend and backend systems.",
  p2: "Alongside application development, I have a strong passion for Data Structures and Algorithms, competitive programming, and continuously improving my problem-solving skills. I am also enthusiastic about building practical projects that combine solid engineering practices with performance-oriented thinking. My focus is always on learning, improving, and creating high-quality software that delivers real value.",
  // For footer
  location: "Punjab, Pakistan",
  researchAreas: [
    "Full Stack",
    "MERN Stack",
    "Mobile App",
    "DSA",
    "Competitive Programming",
    "Web Applications",
  ],
  shortBio:
    "Full Stack Developer experienced in building scalable web and mobile applications using the MERN stack, React Native, and Next.js. Passionate about data structures, algorithms, competitive programming, and developing practical projects that combine strong engineering principles with efficient problem-solving.",
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Service 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const services: Service[] = [
  {
    id: 1,
    type: "Full Stack",
    title: "Full Stack Development",
    description:
      "End-to-end web applications with modern technologies. From database design to responsive UI, I handle it all.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    id: 2,
    type: "Frontend",
    title: "Frontend Development",
    description:
      "Beautiful, responsive, and performant user interfaces that provide exceptional user experiences.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    type: "Backend",
    title: "Backend Development",
    description:
      "Scalable server-side solutions, RESTful APIs, and microservices architecture.",
    tech: ["Node.js", "Python", "GraphQL", "Docker"],
  },
  {
    id: 4,
    type: "Mobile",
    title: "App Development",
    description:
      "Cross-platform mobile applications for iOS and Android using modern frameworks.",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Projects 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Dental Copilot",
    description:
      "AI Dental Copilot is a revolutionary mobile application that leverages artificial intelligence to provide preliminary dental health assessments. Our app analyzes dental images and symptoms to offer insights and recommendations, helping users monitor their oral health between dental visits.",
    tech: ["React Native", "Fast API", "Open AI", "Langchain"],
    github: "https://github.com/muhammadfarooq85/AI-Dental-Copilot",
    liveLink:
      "https://drive.google.com/file/d/1o-tj0gZp2NsyIAIVCIz80V1LdKulUBm0/view",
    year: "2025",
  },
  {
    id: 2,
    title: "Active Birds Solution",
    description:
      "I redesign my ex-intern organization website. I worked on it for more than two months to polish its user interface as well as user experience. I also boosted it performance by almost 80%. It is completely supported on the all devices.",
    tech: ["React", "CSR", "Shadcn", "Vercel"],
    github: "",
    liveLink: "https://activebirds.org/",
    year: "2025",
  },
  {
    id: 3,
    title: "Homeogenius AI",
    description:
      "It is a homeopathic AI system that helps doctor to manage the patients easily. Doctor have to enter the details of the patient and AI will help to assist the doctor.",
    tech: ["React", "Tailwind CSS", "Node Js", "MongoDB"],
    github: "https://github.com/muhammadfarooq85/HomeoGenius-AI-Full-Stack",
    liveLink: "https://homeogenius-ai.vercel.app/",
    year: "2025",
  },
  {
    id: 4,
    title: "Sky Share",
    description:
      "This is a text and file sharing web app. I built this app on firebase and react. I used SCSS and tailwind css for styling the components.",
    tech: ["React", "Tailwind CSS", "Firebase", "Firestore"],
    github: "https://github.com/muhammadfarooq85/Sky-Share-App-Using-React-JS",
    liveLink: "https://sky-share.vercel.app/",
    year: "2024",
  },
  {
    id: 5,
    title: "Chat App",
    description:
      "This is react and firebase chat app. I have used firebase for storing data.",
    tech: ["React", "Tailwind CSS", "Firebase", "Real-Time DB"],
    github: "https://github.com/muhammadfarooq85/Chat-Wave-App-Using-React-Js",
    liveLink: "https://chatt-wave.vercel.app/",
    year: "2024",
  },
  {
    id: 6,
    title: "Demands2Go",
    description:
      "Demands2Go is an e-commerce platform designed to streamline online shopping. Built with the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
    tech: ["React", "Tailwind CSS", "Node Js", "MongoDB", "Nodemailer"],
    github: "https://github.com/enmfarooq85/Demands2Go-E-Commerce-MERN",
    liveLink: "https://demands2go.vercel.app/",
    year: "2025",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Experience 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const experiences: Experience[] = [
  {
    id: 1,
    title: "DSA Trainer",
    organization: "iCodeGuru",
    organizationLink: "https://icode.guru/",
    location: "Santa Clara, California",
    type: "Part-Time",
    year: 2025,
    duration: "Sep 2025 - Present",
    description:
      "Leading frontend development for multiple products, mentoring junior developers, and implementing best practices.",
    skills: ["DSA", "Communication Skills", "Presentation Skills"],
    startDate: "2025-09-01",
    endDate: undefined,
  },
  {
    id: 2,
    title: "Full Stack Developer (MERN)",
    organization: "Active Birds Solution",
    organizationLink: "https://activebirds.org",
    location: "Lahore, Pakistan",
    type: "Remote",
    year: 2025,
    duration: "May 2025 - Aug 2025",
    description:
      "Developed and maintained full-stack features for a SaaS platform.",
    skills: ["Node.js", "Express", "React", "MongoDB", "Vercel", "Netlify"],
    startDate: "2025-05-01",
    endDate: "2025-08-30",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Talk 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const talks: Talk[] = [
  {
    id: 1,
    title: "7am LeetCode Mastery",
    organization: "iCodeGuru",
    slidesLink: "",
    category: "Sessions",
    liveLink:
      "https://youtube.com/playlist?list=PLe-jr3hh4N_kAm508JcuEhHjWyPdwndvW&si=_8iQrqrdEKA-CQeg",
    year: "2025",
  },
  {
    id: 2,
    title: "7am Grind-75 LeetCode Track-II",
    organization: "iCodeGuru",
    slidesLink: "",
    category: "Sessions",
    liveLink:
      "https://youtube.com/playlist?list=PLe-jr3hh4N_lIqDcrea8ueS1AQkYvQVDF&si=K8P1-egif1m1M7Lj",
    year: "2025",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Award 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const awards: Award[] = [
  {
    id: 1,
    title: "Calico Fall'25",
    organization: "University of California, Berkeley",
    year: "2025",
  },
  {
    id: 2,
    title: "HackVortex CodeStorm 5",
    organization: "HackVortex",
    year: "2025",
  },
  {
    id: 3,
    title: "The INTERNET OF AGENTS HACKATHON @SOLANA SKYLINE Hackathon",
    organization: "Lablab.ai",
    year: "2025",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Focus 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const currentFocus: Focus[] = [
  {
    id: 1,
    title: "Computer Science",
    description:
      "Focused on strengthening core computer science fundamentals, including operating systems, databases, computer networks, and software engineering. Building a deep understanding of how systems work internally and how scalable, efficient software is designed.",
    topics: [
      "Operating Systems",
      "Databases & DBMS",
      "Software Design",
      "Data Structures",
      "System Design",
      "Computer Networks",
    ],
  },
  {
    id: 2,
    title: "Software Development & Modern Technologies",
    description:
      "Building full-stack and scalable applications using modern frameworks and technologies, with a focus on web, mobile, and AI-driven solutions.",
    topics: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "Next.js",
      "React Native",
      "Python",
      "Django",
      "FastAPI",
      "AI & Machine Learning",
    ],
  },
];
