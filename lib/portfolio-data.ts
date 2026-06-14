/**
 * Single source of truth for portfolio content.
 * Edit the constants below to update the site — all types are strict.
 */

export type SocialKind = "github" | "linkedin" | "email" | "phone";

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
    "Data Analyst with a software engineering foundation, skilled at turning raw data into clear, actionable business insights using SQL, Python, Power BI, Tableau, and Excel. Hands-on experience in data cleaning, data modeling, ETL, dashboard development, and KPI reporting across finance, retail, and marketing projects. Comfortable working with relational and non-relational databases and translating business questions into data-driven answers. Holds a Master's in Computer Science (NLP), focused on supporting data-driven decision-making in Agile, cross-functional teams.",
  location: "Algiers — Algeria",
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
      kind: "phone",
      label: "+213 549 845 201",
      href: "tel:+213549845201",
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
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "DuckDB",
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
      "Developed reporting features and operational dashboards that reduced manual data tracking by 20% and saved ~5 hours per week.",
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
      "Managed and queried databases to support application logic and reporting, improving data retrieval efficiency by 10%.",
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
    id: "finance",
    title: "Finance Analytics Dashboard",
    headline: "P&L clarity across two countries, seven stores.",
    problem:
      "NRG's general-ledger reporting was fragmented and backward-looking — ~20,000 transactions across 7 stores and 2 channels in Norway and Sweden with no consolidated P&L, and a sign-convention defect was inflating operating margin to an implausible 399%.",
    solution:
      "Engineered a DuckDB medallion pipeline (bronze/silver/gold) feeding a Power BI model with a full P&L matrix, channel/store profitability KPIs, and Actual vs Best/Worst-case scenario analysis — diagnosing and fixing the sign-convention bug to restore accurate margins.",
    metrics: [
      { value: "20K+", label: "GL transactions" },
      { value: "7 / 2", label: "Stores / channels" },
      { value: "399%", label: "Margin bug fixed" },
    ],
    stack: ["Power BI", "DuckDB", "Python", "SQL", "DAX"],
    repoUrl: "https://github.com/SamiRZL/finance_analysis",
  },
  {
    id: "marketing",
    title: "Marketing Analytics & Sentiment Analysis",
    headline: "What 400 reviews actually say.",
    problem:
      "The marketing team could see conversion and rating numbers move, but had no way to read the sentiment behind ~400 customer reviews scattered across raw exports.",
    solution:
      "Built SQL fact/dimension tables for reviews, engagement, and customer journeys, scored review text with NLTK VADER sentiment in Python, and visualised conversion swings and rating trends in Power BI.",
    metrics: [
      { value: "400", label: "Reviews scored" },
      { value: "275 / 82", label: "Positive / negative" },
      { value: "4.3%→18.5%", label: "Conversion range" },
    ],
    stack: ["SQL", "Python", "NLTK", "Power BI"],
    repoUrl: "https://github.com/SamiRZL/marketing_analysis",
  },
  {
    id: "retail",
    title: "Customer Shopping Behavior Analysis",
    headline: "3,900 shoppers, segmented.",
    problem:
      "A retailer had 3,900 transactions across 18 behavioural and demographic features but no view of which customer segments and categories actually drove revenue.",
    solution:
      "Cleaned and feature-engineered the dataset in pandas, loaded it into PostgreSQL to segment customers into Loyal/Returning/New cohorts, and built a Power BI dashboard surfacing category performance and basket size.",
    metrics: [
      { value: "3,900", label: "Transactions" },
      { value: "3,116 / 701 / 83", label: "Loyal / Returning / New" },
      { value: "$170K", label: "Non-subscriber revenue" },
    ],
    stack: ["Python", "pandas", "PostgreSQL", "Power BI"],
    repoUrl: "https://github.com/SamiRZL/customer_behavior_analysis",
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
  { id: "projects", number: "03", label: "Projects" },
  { id: "experience", number: "04", label: "Experience" },
  { id: "contact", number: "05", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
