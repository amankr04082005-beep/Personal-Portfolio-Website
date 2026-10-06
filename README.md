# Aman Kumar — Portfolio Website

A personal portfolio site: projects, skills, experience, and a contact form that saves messages to a database.

**Live demo:** _add your deployed link here_

## Features
- Project showcase with tech stack tags and links to live demos / GitHub
- Skills, experience, and certifications sections
- Contact form backed by a real API — messages are saved to MongoDB, not just emailed
- Basic spam protection: a simple per-IP rate limit on the contact endpoint

## Tech Stack
**Frontend:** React (Vite)
**Backend:** Node.js, Express
**Database:** MongoDB (Mongoose)

## Project Structure
```
portfolio/
  server/   # Express API (contact form)
  client/   # React frontend
```

## Running Locally

**1. Backend**
```bash
cd server
npm install
cp .env.example .env    # set MONGO_URI
npm run dev
```

**2. Frontend** (in a new terminal)
```bash
cd client
npm install
npm run dev
```

Open http://localhost:5174. The API runs on http://localhost:5100.

## API
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/health | Health check |
| POST | /api/contact | Submit the contact form `{name, email, subject, message}` |
| GET | /api/contact | List saved messages (for the site owner) |

## Note on content
All project, skill, and experience content lives in `client/src/data.js` — edit that one file to update the site.

## Note on the GET /api/contact endpoint
It currently has no authentication, so anyone who knows the URL can read submitted messages. That's fine for local development and a portfolio demo, but before relying on it for real messages, add a simple auth check (e.g. an admin password or JWT) before deploying publicly with real visitor data.
