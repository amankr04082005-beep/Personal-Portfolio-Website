import { skills, certifications } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="certs">
        <h3>Certifications</h3>
        <ul className="certs-list">
          {certifications.map((c) => (
            <li key={c.name}>
              <span className="cert-name">{c.name}</span>
              <span className="cert-issuer">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
