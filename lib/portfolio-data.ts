/**
 * Single source of truth for portfolio content.
 * Edit the constants below to update the site — all types are strict.
 */

export type SocialKind = "github" | "linkedin" | "email" | "whatsapp";

export interface Identity {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  readonly availability: string;
  readonly resumePath: string;
  readonly profileImage: string;
  readonly socials: ReadonlyArray<{
    readonly kind: SocialKind;
    readonly label: string;
    readonly href: string;
  }>;
}

export type SkillGroupKey =
  | "languages"
  | "analysis"
  | "visualization"
  | "tools";

export interface SkillGroup {
  readonly key: SkillGroupKey;
  readonly label: string;
  readonly tagline: string;
  readonly items: ReadonlyArray<string>;
}

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly mode: "Remote" | "On-site" | "Hybrid";
  readonly start: string;
  readonly end: string;
  readonly summary: string;
  readonly highlights: ReadonlyArray<string>;
  readonly stack: ReadonlyArray<string>;
}

export interface Education {
  readonly degree: string;
  readonly field: string;
  readonly institution: string;
  readonly location: string;
  readonly note?: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly headline: string;
  readonly problem: string;
  readonly solution: string;
  readonly metrics: ReadonlyArray<{ readonly value: string; readonly label: string }>;
  readonly stack: ReadonlyArray<string>;
  readonly liveUrl: string;
  readonly repoUrl: string;
}

export interface Language {
  readonly name: string;
  readonly proficiency: string;
  readonly level: number; // 1–5 visual indicator
}

/* ------------------------------------------------------------------ */
/*  Identity                                                          */
/* ------------------------------------------------------------------ */

export const IDENTITY: Identity = {
  name: "Sami Rezal",
  title: "Junior Data Analyst",
  tagline:
    "Data analyst with a builder's instinct — turning raw data into decisions, dashboards, and direction.",
  summary:
    "Data Analyst with a software engineering background and hands-on project experience in data collection, processing, analysis, and visualization using SQL, Python, Power BI, Tableau, and Excel. Skilled in data cleaning, modeling, dashboard development, and statistical analysis across relational and non-relational databases. Holds a Master's in Computer Science (NLP), comfortable delivering data solutions in Agile, cross-functional teams.",
  location: "Bouismail, Tipaza — Algeria",
  email: "rezalsamipro@gmail.com",
  phone: "+213 549 845 201",
  availability: "Open to new analyst roles",
  resumePath: "/CV_REZAL_Sami.pdf",
  profileImage: "/profile.png",
  socials: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/SamiRZL",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/rezal-sami",
    },
    {
      kind: "email",
      label: "rezalsamipro@gmail.com",
      href: "mailto:rezalsamipro@gmail.com",
    },
    {
      kind: "whatsapp",
      label: "+213 549 845 201",
      href: "https://wa.me/213549845201",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  Skills                                                            */
/* ------------------------------------------------------------------ */

export const SKILL_GROUPS: ReadonlyArray<SkillGroup> = [
  {
    key: "languages",
    label: "Languages",
    tagline: "Where the work begins.",
    items: ["SQL", "Python", "JavaScript", "TypeScript"],
  },
  {
    key: "analysis",
    label: "Analysis & Modeling",
    tagline: "Cleaning, shaping, finding the signal.",
    items: [
      "pandas",
      "NumPy",
      "Jupyter",
      "scikit-learn",
      "NLTK",
      "spaCy",
      "EDA",
      "Statistics",
    ],
  },
  {
    key: "visualization",
    label: "BI & Visualization",
    tagline: "Making the findings make sense.",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Excel",
      "Pivot Tables",
    ],
  },
  {
    key: "tools",
    label: "Databases & Tools",
    tagline: "The plumbing under everything.",
    items: [
      "MySQL",
      "MongoDB",
      "Snowflake",
      "Git",
      "GitHub",
      "Postman",
      "Agile / Scrum",
      "Trello",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Experience                                                        */
/* ------------------------------------------------------------------ */

export const EXPERIENCE: ReadonlyArray<Experience> = [
  {
    role: "Software Engineer",
    company: "Sadeem Informatique",
    location: "Bab Ezzouar, Algiers — Algeria",
    mode: "Remote",
    start: "Nov 2025",
    end: "May 2026",
    summary:
      "Delivered three enterprise platforms in parallel — including a high-traffic web app for one of Algeria's largest telecom operators.",
    highlights: [
      "Engineered the Mobilis web application — enterprise-grade platform for one of Algeria's leading telecom operators, handling complex workflows and large-scale data.",
      "Built a charity management platform with structured data collection, processing, and reporting for non-profit operations.",
      "Shipped a fabrication management system that digitised industrial production workflows and operational data tracking.",
      "Maintained code quality, documentation, and delivery timelines across simultaneous projects with a remote cross-functional team.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "Agile",
    ],
  },
  {
    role: "Software Engineer",
    company: "GO Platform",
    location: "Algiers — Algeria",
    mode: "Remote",
    start: "Aug 2023",
    end: "Dec 2024",
    summary:
      "Designed and operated data-driven services inside a distributed Agile team — pipelines, APIs, and the data behind them.",
    highlights: [
      "Designed and maintained data-driven software systems contributing to scalable, reliable architecture.",
      "Built and optimised data pipelines and APIs for consistent, accurate, high-performance data flow across services.",
      "Defined data requirements and modelled system behaviour with cross-functional teams.",
      "Managed and queried databases to support application logic and reporting, with attention to integrity and performance.",
    ],
    stack: ["Python", "SQL", "REST APIs", "Git", "Agile / Scrum"],
  },
  {
    role: "Software Engineer — Internship",
    company: "LOGITRANS",
    location: "Al Harrache, Algiers — Algeria",
    mode: "On-site",
    start: "Jan 2023",
    end: "Jun 2023",
    summary:
      "First professional engagement: contributed to an enterprise management system with a relational data backbone.",
    highlights: [
      "Helped design an enterprise management system with structured data modelling and relational database integration.",
      "Implemented and tested data services and RESTful interfaces with attention to accuracy and reliability.",
      "Performed functional testing and data validation to verify correctness end-to-end.",
      "Produced technical documentation to support knowledge transfer and maintainability.",
    ],
    stack: ["SQL", "REST APIs", "Relational Modeling", "Testing"],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Education                                                         */
/* ------------------------------------------------------------------ */

export const EDUCATION: ReadonlyArray<Education> = [
  {
    degree: "Master's Degree",
    field: "Computer Science — Natural Language Processing (NLP)",
    institution: "Saad Dahleb University",
    location: "Blida — Algeria",
    note: "Research focus on text classification & sentiment analysis.",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Science — Software & Information Quality (SIQ)",
    institution: "Saad Dahleb University",
    location: "Blida — Algeria",
  },
  {
    degree: "Baccalaureate",
    field: "Mathematics",
    institution: "Ahmed Ould Torki High School",
    location: "Bouismail — Algeria",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */

export const PROJECTS: ReadonlyArray<Project> = [
  {
    id: "sales",
    title: "Sales Data Analysis",
    headline: "Revenue clarity, one dashboard.",
    problem:
      "Revenue teams lacked a single source of truth to spot underperforming products and regions in real time, slowing weekly planning.",
    solution:
      "Built an interactive Power BI dashboard with DAX measures that surfaces sales trends, KPI variance, and product/region drill-downs at a glance.",
    metrics: [
      { value: "12+", label: "KPIs surfaced" },
      { value: "5", label: "Regional cuts" },
      { value: "Daily", label: "Refresh cadence" },
    ],
    stack: ["Power BI", "DAX", "Power Query", "Excel"],
    liveUrl: "https://example.com/sales-dashboard",
    repoUrl: "https://github.com/your-handle/sales-data-analysis",
  },
  {
    id: "insurance",
    title: "Insurance Data Analysis",
    headline: "Reading risk from the claims log.",
    problem:
      "Insurance teams struggled to identify risky claim patterns and the most profitable customer segments inside fragmented spreadsheets.",
    solution:
      "Modeled claims and customer data in Power BI with DAX so analysts can isolate claim frequency, risk drivers, and profitability bands in seconds.",
    metrics: [
      { value: "3", label: "Risk segments" },
      { value: "8", label: "DAX measures" },
      { value: "100K+", label: "Claims modeled" },
    ],
    stack: ["Power BI", "DAX", "Power Query"],
    liveUrl: "https://example.com/insurance-dashboard",
    repoUrl: "https://github.com/your-handle/insurance-data-analysis",
  },
  {
    id: "upi",
    title: "UPI Transactions Analysis",
    headline: "Volume tells half the story.",
    problem:
      "Digital-payment operators needed to read transaction behaviour across merchants and regions — not just total volume.",
    solution:
      "Built Power BI reports that decompose transaction volume, growth, and merchant-level performance into a single navigable view.",
    metrics: [
      { value: "1M+", label: "Transactions parsed" },
      { value: "4", label: "Drill paths" },
      { value: "10+", label: "Merchant cohorts" },
    ],
    stack: ["Power BI", "DAX", "SQL"],
    liveUrl: "https://example.com/upi-dashboard",
    repoUrl: "https://github.com/your-handle/upi-transactions",
  },
  {
    id: "student-depression",
    title: "Student Depression Analysis",
    headline: "Survey data that finally talks.",
    problem:
      "Mental-health survey data was scattered and hard to interrogate for demographic patterns that policy teams care about.",
    solution:
      "Cleaned and reshaped the dataset with SQL, then visualised lifestyle and demographic correlations in Tableau so non-technical stakeholders can read the signal.",
    metrics: [
      { value: "27", label: "Variables cleaned" },
      { value: "6", label: "Dashboards" },
      { value: "SQL→Tableau", label: "Pipeline" },
    ],
    stack: ["SQL", "Tableau", "EDA"],
    liveUrl: "https://example.com/student-depression",
    repoUrl: "https://github.com/your-handle/student-depression-analysis",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Languages                                                         */
/* ------------------------------------------------------------------ */

export const LANGUAGES: ReadonlyArray<Language> = [
  { name: "Arabic", proficiency: "Native", level: 5 },
  { name: "French", proficiency: "Professional — C1", level: 4 },
  { name: "English", proficiency: "Professional — B2/C1", level: 4 },
] as const;

/* ------------------------------------------------------------------ */
/*  Section index — drives the nav and section markers                */
/* ------------------------------------------------------------------ */

export const SECTIONS = [
  { id: "top", number: "01", label: "Intro" },
  { id: "skills", number: "02", label: "Skills" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "projects", number: "04", label: "Projects" },
  { id: "contact", number: "05", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
