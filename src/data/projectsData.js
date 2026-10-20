export const projectCategories = [
  "All",
  "Full-Stack",
  "Python",
  "Backend",
];

export const projects = [
  {
    slug: "job-application-tracker",
    title: "Job Application Tracker",
    period: "Oct 2026",
    subtitle: "Full-stack job management dashboard",
    category: "Full-Stack",
    summary:
      "A full-stack job tracker that helps users manage applications, track statuses, secure personal data, and analyze application flow with filters and dashboard insights.",
    videoUrl: "",
    description: [
      "This project is a complete job application tracker built with React on the frontend and Node.js/Express on the backend. It helps users organize job applications, view progress across multiple stages, and keep personal records secure and private.",
      "The application exposes authenticated REST API endpoints for login, signup, and CRUD operations on job records. Each user can only access their own data, which is enforced with JWT-based authentication and middleware checks.",
      "I designed the MongoDB schema around a user-scoped document model with indexing to support efficient retrieval, search, and filtering. The platform includes company and role search, status filters, and a dashboard pipeline for Applied, Interview, Offer, and Rejected stages.",
      "The app is deployed on MongoDB Atlas, Render, and Vercel, and the live flow was verified end-to-end across the database, backend, and frontend.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    highlights: [
      "Built a secure auth flow with JWT expiry and bcrypt password hashing.",
      "Developed 9 REST endpoints covering auth and job management features.",
      "Added status filtering, search, and MongoDB aggregation analytics for the application pipeline.",
      "Deployed the full stack across Atlas, Render, and Vercel for live end-to-end testing.",
    ],
    github: "https://github.com/amankr04082005-beep",
    demoUrl: "https://job-application-tracker.vercel.app/",
    role: "Full-stack developer",
    demoType: "dashboard",
    demoTitle: "Application Pipeline Overview",
    demoSnippet: `Authentication: JWT with 7-day expiry
Password storage: bcrypt hashing
Status pipeline: Applied -> Interview -> Offer -> Rejected
REST API endpoints: 9`,
    architecture: [
      { step: "1. Authentication", detail: "Secure login and user-scoped access using JWT and bcrypt", tech: "Node.js / JWT / bcrypt" },
      { step: "2. Job CRUD APIs", detail: "Create, edit, delete, and fetch only the user’s job records", tech: "Express / MongoDB" },
      { step: "3. Search + Filter Layer", detail: "Query by company, role, and status with indexed document lookups", tech: "MongoDB / Aggregation" },
      { step: "4. Live Deployment", detail: "Frontend on Vercel, backend on Render, database on MongoDB Atlas", tech: "Vercel / Render / Atlas" },
    ],
  },
  {
    slug: "mini-search-engine",
    title: "Mini Search Engine",
    period: "Oct 2026",
    subtitle: "Python search engine with inverted index ranking",
    category: "Python",
    summary:
      "A lightweight Python search engine that tokenizes documents, indexes terms using an inverted index, and ranks results with smoothed TF-IDF scoring.",
    videoUrl: "",
    description: [
      "This project implements a mini search engine in Python using a custom inverted index data structure and TF-IDF ranking. The system processes text, removes stopwords, lowercases terms, and indexes them for fast lookup.",
      "I designed a SQLite schema with two tables—documents and inverted_index—with an index on the word column to optimize term lookups and efficient retrieval. The search system supports document listing, addition, deletion, and ranked search queries.",
      "The project also includes a Flask web UI to interact with the engine in real time. Newly added documents are indexed immediately and become searchable without manual rebuilds.",
      "The engine was seeded with 10 documents and ranked search results were validated locally in under 1 ms, then deployed live on Render for production testing.",
    ],
    stack: ["Python", "Flask", "SQLite", "TF-IDF", "Data Structures"],
    highlights: [
      "Implemented an inverted index with efficient token lookup and ranking.",
      "Used smoothed TF-IDF for more relevant result ordering.",
      "Built 4 API endpoints for search, listing, adding, and deleting documents.",
      "Deployed production-ready search experience on Render with immediate indexing.",
    ],
    github: "https://github.com/amankr04082005-beep",
    demoUrl: "https://mini-search-engine.onrender.com/",
    role: "Python backend engineer",
    demoType: "terminal",
    demoTitle: "Search Result Ranking",
    demoSnippet: `Seeded documents: 10
Median ranked-query time: under 1 ms locally
New documents: indexed immediately`,
    architecture: [
      { step: "1. Tokenization", detail: "Lowercases and removes stopwords before indexing content", tech: "Python / NLP" },
      { step: "2. Inverted Index", detail: "Maps each term to the documents containing it for rapid lookup", tech: "Data Structures / SQLite" },
      { step: "3. TF-IDF Ranking", detail: "Applies weighted relevance scoring to produce sorted results", tech: "Python / Statistics" },
      { step: "4. Flask API + UI", detail: "Exposes add, list, search, and delete endpoints with quick indexing", tech: "Flask / SQLite" },
    ],
  },
  {
    slug: "url-shortener-api",
    title: "URL Shortener API",
    period: "Oct 2026",
    subtitle: "FastAPI URL shortener with analytics",
    category: "Backend",
    summary:
      "A production-ready URL shortener built in FastAPI that shortens URLs, redirects short codes, and tracks click analytics with PostgreSQL and Docker deployment.",
    videoUrl: "",
    description: [
      "This project is a REST API for shortening URLs and redirecting shortened codes back to the original destinations. It also tracks click statistics so each shortened link can reveal usage patterns over time.",
      "The backend uses FastAPI, PostgreSQL, and SQLAlchemy ORM to manage two core tables: urls and clicks. Each short code has a unique index and the foreign key relationship to click events is indexed for efficient analytics queries.",
      "I implemented atomic SQL increments to avoid lost updates under concurrent requests, with collision retry logic for generated base62 keys. The project also includes validated custom aliases, reserved-word protection, and duplicate detection with 409 responses on conflicts.",
      "The API was tested with 10 pytest cases against an isolated in-memory database, and it was containerized with Docker before being deployed on Render with a Neon PostgreSQL database.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "pytest"],
    highlights: [
      "Built a reliable redirect system with HTTP 307 responses and click statistics.",
      "Used atomic SQL increments to prevent data loss under concurrent requests.",
      "Added custom alias validation, collision handling, and reserved keyword protection.",
      "Containerized the service and deployed it with Neon PostgreSQL on Render.",
    ],
    github: "https://github.com/amankr04082005-beep",
    demoUrl: "https://url-shortener-api.onrender.com/",
    role: "Backend developer",
    demoType: "terminal",
    demoTitle: "Short-link Redirect Workflow",
    demoSnippet: `Generated short codes: random 6-character Base62
Redirect response: HTTP 307 Temporary Redirect
Custom aliases: validated; duplicates return HTTP 409`,
    architecture: [
      { step: "1. URL Validation", detail: "Validates destination URLs and custom aliases before insert", tech: "FastAPI / Pydantic" },
      { step: "2. Short-code Generation", detail: "Generates random 6-character base62 IDs with retry-on-collision logic", tech: "Python / SQL" },
      { step: "3. Redirect + Analytics", detail: "Tracks click counts using atomic updates for concurrency-safe statistics", tech: "PostgreSQL / SQLAlchemy" },
      { step: "4. Dockerized Deployment", detail: "Runs in containerized environment with database-backed production hosting", tech: "Docker / Render / Neon" },
    ],
  },
];
