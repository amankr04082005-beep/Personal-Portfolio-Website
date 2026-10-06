import { profile } from '../data';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-grid" aria-hidden="true">
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#grid)" />
          <circle cx="120" cy="140" r="4" fill="currentColor" />
          <circle cx="260" cy="90" r="4" fill="currentColor" />
          <circle cx="300" cy="260" r="4" fill="currentColor" />
          <circle cx="90" cy="300" r="4" fill="currentColor" />
          <path
            d="M120 140 L260 90 M260 90 L300 260 M300 260 L90 300 M90 300 L120 140"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Software Engineer based in {profile.location}</p>
        <h1>
          Aman Kumar builds software,
          <br />
          end to end.
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            See the work
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
