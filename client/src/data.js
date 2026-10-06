export const profile = {
  name: "Aman Kumar",
  role: "Software Engineer",
  tagline:
    "Software Engineer focused on building scalable web applications, APIs, and data-driven products — from problem framing to deployment, with a strong emphasis on clean architecture and maintainable code.",
  location: "Bengaluru, India",
  email: "amankumar04082005@gmail.com",
  phone: "+91 6200428363",
  github: "https://github.com/amankr04082005-beep",
  linkedin: "https://linkedin.com/in/aman-kumar-3a5376291",
  resumeNote:
    "BCA graduate (2026), Acharya Institute of Graduate Studies, Bengaluru — CGPA 8.4",
};

export const skills = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "FastAPI", "Flask"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Schema Design"],
  },
  {
    group: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "System Design Basics"],
  },
  {
    group: "Tools",
    items: ["Git/GitHub", "JWT Auth", "Postman", "Deployment"],
  },
];

export const projects = [
  {
    name: "Job Application Tracker",
    period: "2026",
    description:
      "Built a full-stack job application manager to help users organize applications, track their pipeline, and manage data through a clean dashboard experience.",
    highlights: [
      "Implemented secure user authentication using JWT and bcrypt to isolate each user's data and protect access",
      "Designed a REST API for application CRUD operations, status filtering, and search-driven workflow tracking",
      "Deployed the product with MongoDB Atlas, Vercel, and Render to deliver a working end-to-end system",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/amankr04082005-beep/job-tracker",
    live: "https://job-tracker-one-taupe.vercel.app",
  },
  {
    name: "MediFlow",
    period: "2026",
    description:
      "Developed a healthcare appointment platform focused on coordinating patient, doctor, and admin workflows in a single system.",
    highlights: [
      "Built role-specific interfaces for patients, doctors, and administrators to streamline operations",
      "Modeled appointment workflows and consultation records to improve scheduling and information flow",
    ],
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/amankr04082005-beep",
  },
  {
    name: "Conversational AI Chatbot",
    period: "2025",
    description:
      "Created an intent-classification chatbot using classical NLP techniques to understand user requests and respond appropriately without relying on a hosted AI service.",
    highlights: [
      "Built a Naive Bayes-based classifier achieving 85%+ accuracy on a defined intent dataset",
      "Implemented the model and response pipeline through a lightweight Flask backend for simple deployment",
    ],
    stack: ["Python", "Flask", "scikit-learn", "NLTK"],
    github: "https://github.com/amankr04082005-beep",
  },
  {
    name: "Cryptocurrency Time-Series Forecasting",
    period: "2025",
    description:
      "Built a forecasting model to predict next-day directional movement in BTC and ETH using historical OHLCV market data and feature engineering.",
    highlights: [
      "Achieved 78% directional accuracy on held-out test data using structured time-series features",
      "Applied preprocessing and feature engineering across price, volume, and trend-based indicators",
    ],
    stack: ["Python", "Pandas", "scikit-learn"],
    github: "https://github.com/amankr04082005-beep",
  },
];

export const experience = [
  {
    org: "Amdox Technology",
    role: "Data Analytics Intern",
    period: "Feb 2026",
    points: [
      "Improved customer retention insights by 15% through cohort and funnel analysis using structured data workflows",
      "Reduced reporting errors by 25% by building SQL validation checks and improving data quality controls",
    ],
  },
  {
    org: "Future Interns",
    role: "Data Analytics Intern",
    period: "Jan 2026",
    points: [
      "Analyzed datasets of 10,000+ records and reduced manual preprocessing time by 40% through optimized ETL steps",
      "Created Power BI dashboards tracking 8+ KPIs to support better decision-making and stakeholder reporting",
    ],
  },
];

export const certifications = [
  { name: "Problem Solving (Intermediate)", issuer: "HackerRank" },
  { name: "Data Structures and Algorithms", issuer: "GeeksforGeeks" },
  { name: "Python with DSA", issuer: "Unstop" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Coursera, 2024" },
  { name: "Microsoft Power BI Data Analyst Associate", issuer: "Microsoft Learn, 2024" },
];

export const achievements = [
  "3rd rank, Coding and Debugging Competition",
  "Volunteered at an IT fest, coordinating event logistics",
  "Participated in NSS's \"Walk to EmpowHER\" women-empowerment initiative",
  "Participated in Hindustan Scouts and Guides Association activities",
];
