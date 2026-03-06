/*
 * ┌───────────────────────────────┐
 * │        🌟 About Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type About = {
  imageUrl: string;
  name: string;
  degree: string;
  instituteName: string;
  email: string;
  p1: string;
  p2?: string;
  shortBio: string;
  location: string;
  researchAreas: string[];
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Publication Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  liveLink: string;
  year: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Talk Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Talk = {
  id: number;
  title: string;
  organization: string;
  slidesLink: string;
  category: string;
  year: string;
  liveLink:string
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Award Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Award = {
  id: number;
  title: string;
  year: string;
  organization: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Service Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Service = {
  id: number;
  type: string;
  description: string;
  title: string;
  tech: string[];
}

/*
 * ┌───────────────────────────────┐
 * │        🌟 Book Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Focus = {
  id: number;
  title: string;
  description: string;
  topics: string[];
};

// types/index.ts or in your data file

export interface Experience {
  id: number;
  title: string;                    // Job title (e.g., "Senior Frontend Developer")
  organization: string;              // Company/Organization name
  organizationLink?: string;         // Optional link to company website
  location?: string;                 // Optional location (e.g., "San Francisco, CA")
  type?: string;                     // Optional type (e.g., "Full-time", "Contract", "Remote")
  year: number | string;             // Year for grouping (e.g., 2024 or "2024")
  duration?: string;                  // Optional duration (e.g., "Jan 2024 - Present")
  description: string;                // Job description
  skills: string[];                   // Array of skills/technologies used
  achievements?: string[];            // Optional array of key achievements
  startDate?: string;                 // Optional start date for sorting
  endDate?: string;                    // Optional end date (null/undefined for current)
}

// If you want stricter typing with dates for sorting
export interface ExperienceWithDates extends Experience {
  startDate: string;  // ISO date format "2024-01-15"
  endDate?: string;   // ISO date format or undefined for current
}