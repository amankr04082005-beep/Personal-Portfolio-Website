export const profile = {
  name: "Aman Kumar",
  role: "Software Engineer | BCA Graduate",
  tagline:
    "BCA graduate (CGPA 8.4) with hands-on experience building and deploying full-stack applications using React, Node.js, Express, MongoDB, Python, and Flask. Strong foundation in DSA, OOP, and DBMS, with 3rd place in a coding and debugging competition.",
  location: "Bengaluru, India",
  email: "amankumar04082005@gmail.com",
  phone: "+91 6200428363",
  github: "https://github.com/amankr04082005-beep",
  linkedin: "https://linkedin.com/in/aman-kumar-3a5376291",
  summary:
    "BCA graduate with hands-on experience building and deploying full-stack web applications using React, Node.js, Express, and MongoDB, along with Python/Flask services, RESTful APIs, and JWT authentication. Strong foundation in Data Structures and Algorithms, OOP, and DBMS; placed 3rd in a coding and debugging competition. Seeking an entry-level Software Engineer role.",
  education: {
    institution: "Acharya Institute of Graduate Studies, Bengaluru",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2023–2026",
    result: "CGPA: 8.4 / 10",
  },
};

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Flask", "FastAPI", "SQLAlchemy"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"] },
  { group: "Cloud & Deployment", items: ["Docker", "Render", "Vercel", "MongoDB Atlas", "Neon"] },
  { group: "Developer Tools", items: ["Git", "GitHub", "REST API Development", "JWT", "Unit Testing (pytest)"] },
  { group: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS"] },
  { group: "Soft Skills", items: ["Team Collaboration", "Communication"] },
];

export const projects = [
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
      "Seeded with 10 documents; ranked queries return in under 1 ms locally",
      "Deployed live on Render and verified add-document and search in production",
    ],
    stack: ["Python", "Flask", "SQLite", "TF-IDF"],
    github: "https://github.com/amankr04082005-beep/mini-search-engine",
    live: "https://mini-search-engine-5k3o.onrender.com",
  },
  {
    name: "URL Shortener API",
    period: "Oct 2026",
    description:
      "A FastAPI service that shortens URLs, redirects short codes, and tracks click statistics, backed by PostgreSQL.",
    highlights: [
      "Designed a 2-table schema (urls, clicks) with a unique index on short codes and an indexed foreign key",
      "Click counts use atomic SQL increments to avoid lost updates under concurrent requests",
      "Generated random 6-character base62 codes with collision retry and validated custom aliases with duplicate and reserved-word protection",
      "Wrote 10 pytest tests on an isolated in-memory database; containerized with Docker",
      "Deployed on Render with a Neon PostgreSQL database",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Docker", "pytest"],
    github: "https://github.com/amankr04082005-beep/url-shortener",
    live: "https://url-shortener-5g04.onrender.com/docs",
  },
];

export const certifications = [
  { name: "Problem Solving (Intermediate)", issuer: "HackerRank, 2026" },
  { name: "Python with DSA", issuer: "Unstop, 2026" },
  { name: "GitHub Workflow Mastery", issuer: "2026" },
];

export const achievements = [
  "3rd rank in Coding and Debugging Competition (3-member team), IT Fest 2024, Acharya Institute of Graduate Studies",
  "Volunteered at IT Quiz 2024, supporting event coordination",
  "Participated in NSS's \"Walk to EmpowHER\" women-empowerment initiative, 2024",
];