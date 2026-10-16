import { profile } from '../data';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-content">
        <div className="hero-copy">
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

        <div className="hero-scene" aria-hidden="true">
          <div className="scene-glow" />
          <div className="scene-orbit scene-orbit-one" />
          <div className="scene-orbit scene-orbit-two" />
          <div className="scene-cube">
            <div className="cube-face cube-front">AK</div>
            <div className="cube-face cube-back">01</div>
            <div className="cube-face cube-right">&lt;/&gt;</div>
            <div className="cube-face cube-left">JS</div>
            <div className="cube-face cube-top">✳</div>
            <div className="cube-face cube-bottom">DEV</div>
          </div>
          <div className="scene-card scene-card-react">
            <span className="scene-card-icon">R</span>
            <span>React UI</span>
          </div>
          <div className="scene-card scene-card-api">
            <span className="scene-card-icon">&lt;/&gt;</span>
            <span>REST APIs</span>
          </div>
          <div className="scene-card scene-card-data">
            <span className="scene-card-icon">DB</span>
            <span>Data layer</span>
          </div>
        </div>
      </div>
    </header>
  );
}
