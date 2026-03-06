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
    "Full Stack Developer experienced in building scalable web and mobile applications using the MERN stack, React Native, and Next.js. Passionate about data structures, algorithms, competitive programming, and developing practical projects that combine strong engineering principles with efficient problem-solving."
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
    description: "End-to-end web applications with modern technologies. From database design to responsive UI, I handle it all.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    id: 2,
    type: "Frontend",
    title: "Frontend Development",
    description: "Beautiful, responsive, and performant user interfaces that provide exceptional user experiences.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    type: "Backend",
    title: "Backend Development",
    description: "Scalable server-side solutions, RESTful APIs, and microservices architecture.",
    tech: ["Node.js", "Python", "GraphQL", "Docker"],
  },
  {
    id: 4,
    type: "Mobile",
    title: "App Development",
    description: "Cross-platform mobile applications for iOS and Android using modern frameworks.",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
  }
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
    description: "AI Dental Copilot is a revolutionary mobile application that leverages artificial intelligence to provide preliminary dental health assessments. Our app analyzes dental images and symptoms to offer insights and recommendations, helping users monitor their oral health between dental visits.",
    tech: ["React Native", "Fast API", "Open AI", "Langchain"],
    github: "https://github.com/muhammadfarooq85/AI-Dental-Copilot",
    liveLink: "https://drive.google.com/file/d/1o-tj0gZp2NsyIAIVCIz80V1LdKulUBm0/view",
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
    description: "Leading frontend development for multiple products, mentoring junior developers, and implementing best practices.",
    skills: ["DSA", "Communication Skills", "Presentation Skills"],
    startDate: "2025-09-01",
    endDate: undefined
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
    description: "Developed and maintained full-stack features for a SaaS platform.",
    skills: ["Node.js", "Express", "React", "MongoDB", "Vercel", "Netlify"],
    startDate: "2025-05-01",
    endDate: "2025-08-30"
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
    liveLink: "https://youtube.com/playlist?list=PLe-jr3hh4N_kAm508JcuEhHjWyPdwndvW&si=_8iQrqrdEKA-CQeg",
    year: "2025",
  },
  {
    id: 2,
    title: "7am Grind-75 LeetCode Track-II",
    organization: "iCodeGuru",
    slidesLink: "",
    category: "Sessions",
    liveLink: "https://youtube.com/playlist?list=PLe-jr3hh4N_lIqDcrea8ueS1AQkYvQVDF&si=K8P1-egif1m1M7Lj",
    year: "2025",
  }
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
    title: "Data Structures & Algorithms",
    description: "Practicing and mastering fundamental data structures, algorithms, and problem-solving patterns to build efficient solutions.",
    topics: ["Trees & Graphs", "Dynamic Programming", "Greedy Algorithms", "Recursion & Backtracking"],
  },
];
