export const profile = {
  name: "Aman Kumar",
  role: "Software Engineer",
  tagline:
    "Entry-level Software Engineer who builds and deploys full-stack apps and REST APIs with React, Node.js, FastAPI and PostgreSQL, with a strong base in DSA, OOP and DBMS.",
  location: "Bengaluru, India",
  email: "amankumar04082005@gmail.com",
  phone: "+91 6200428363",
  github: "https://github.com/amankr04082005-beep",
  linkedin: "https://linkedin.com/in/aman-kumar-3a5376291",
  resumeNote:
    "BCA graduate (2026), Acharya Institute of Graduate Studies, Bengaluru — CGPA 8.4",
};

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React", "HTML5", "CSS3", "Responsive UI"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "FastAPI", "Flask", "SQLAlchemy"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Schema Design"] },
  { group: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS"] },
  { group: "Tools", items: ["Git/GitHub", "Docker", "pytest", "JWT Auth", "Render", "Vercel"] },
];

export const projects = [
  {
    name: "URL Shortener API",
    period: "Oct 2026",
    description:
      "A REST API that shortens URLs, redirects short codes to the original link, and tracks click statistics, backed by PostgreSQL.",
    highlights: [
      "Built with FastAPI and SQLAlchemy; 2-table schema (urls, clicks) with a unique index on the short code and an indexed foreign key",
      "Click counts use atomic SQL increments so concurrent requests do not lose updates",
      "Random base62 codes with collision retry, validated custom aliases, 409 on duplicates, and 10 pytest tests",
      "Containerized with Docker and deployed on Render with a Neon PostgreSQL database",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "pytest"],
    github: "https://github.com/amankr04082005-beep/url-shortener",
    live: "https://url-shortener-5g04.onrender.com/docs",
  },
  {
    name: "Job Application Tracker",
    period: "Oct 2026",
    description:
      "A full-stack app to organize job applications, track the pipeline, and manage data through a clean dashboard.",
    highlights: [
      "9 REST API endpoints for authentication and CRUD, with status filtering and company/role search",
      "JWT authentication (7-day expiry) with bcrypt hashing; each user can access only their own jobs",
      "MongoDB aggregation endpoint powering a status pipeline dashboard (Applied, Interview, Offer, Rejected)",
      "Deployed on Vercel (frontend), Render (backend) and MongoDB Atlas",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/amankr04082005-beep/job-tracker",
    live: "https://job-tracker-one-taupe.vercel.app",
  },
  {
    name: "Mini Search Engine",
    period: "Oct 2026",
    description:
      "A search engine that builds an inverted index over documents and ranks results by TF-IDF relevance.",
    highlights: [
      "Smoothed TF-IDF ranking with a tokenizer that lowercases text and removes stopwords",
      "2-table SQLite schema (documents, inverted_index) with an index on the word column",
      "4 Flask API endpoints and a web UI; newly added documents are searchable immediately",
      "Deployed live on Render",
    ],
    stack: ["Python", "Flask", "SQLite", "TF-IDF"],
    github: "https://github.com/amankr04082005-beep/mini-search-engine",
    live: "https://mini-search-engine-5k3o.onrender.com",
  },
  {
    name: "In-Memory Key-Value Store",
    period: "Oct 2026",
    description:
      "A Redis-like in-memory store written in Python with key expiry and LRU eviction.",
    highlights: [
      "SET, GET, DELETE, EXISTS and KEYS in O(1) average time using a hash map and OrderedDict",
      "Lazy TTL expiry and O(1) LRU eviction (move_to_end, popitem) with a capacity limit",
      "Command-line interface and 5 unit tests, all passing",
    ],
    stack: ["Python", "OOP", "OrderedDict", "Unit Testing"],
    github: "https://github.com/amankr04082005-beep/kv-store",
  },
  {
    name: "Client Lead Management System (Mini CRM)",
    period: "Oct 2026",
    description:
      "A CRM to manage client leads through a status pipeline, with follow-up notes and a stats dashboard.",
    highlights: [
      "Lead pipeline (New, Contacted, Converted, Lost) with search, filter and per-lead follow-up notes",
      "Admin access secured with JWT authentication",
      "Deployed on Vercel (frontend) and Render (backend)",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/amankr04082005-beep/mini-crm",
    live: "https://mini-irr1pwwfq-newzenexperts-solution.vercel.app",
  },
  {
    name: "MediFlow",
    period: "2026",
    description:
      "A healthcare platform focused on coordinating patient, doctor, and admin workflows in a single system.",
    highlights: [
      "Role-specific interfaces for patients, doctors, and administrators to streamline operations",
      "Modeled appointment workflows and consultation records to improve scheduling and information flow",
    ],
    stack: ["React", "Node.js", "MongoDB", "FastAPI"],
    github: "https://github.com/amankr04082005-beep/Hospital-manegment-system",
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
  { name: "Problem Solving (Intermediate)", issuer: "HackerRank, 2026" },
  { name: "Python with DSA", issuer: "Unstop, 2026" },
  { name: "GitHub Workflow Mastery", issuer: "2026" },
  { name: "Data Structures and Algorithms", issuer: "GeeksforGeeks" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Coursera, 2024" },
  { name: "Microsoft Power BI Data Analyst Associate", issuer: "Microsoft Learn, 2024" },
];

export const achievements = [
  "3rd rank in Coding and Debugging Competition (3-member team), IT Fest 2024, Acharya Institute of Graduate Studies",
  "Volunteered at IT Quiz 2024, supporting event coordination",
  "Participated in NSS's \"Walk to EmpowHER\" women-empowerment initiative, 2024",
];
