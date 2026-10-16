import { profile } from '../data';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <h2>About</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>{profile.summary}</p>
        </div>

        <div className="about-education">
          <h3>Education</h3>
          <div className="xp-item">
            <div className="xp-head">
              <span className="xp-role">{profile.education.degree}</span>
              <span className="xp-period">{profile.education.period}</span>
            </div>
            <p className="xp-org">{profile.education.institution}</p>
            <p className="xp-org">{profile.education.result}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
