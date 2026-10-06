import { projects } from '../data';

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <div className="section-head">
        <h2>Selected work</h2>
      </div>

      <div className="project-list">
        {projects.map((p) => (
          <article className="project" key={p.name}>
            <div className="project-head">
              <h3>{p.name}</h3>
              <span className="project-period">{p.period}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <ul className="project-highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="project-footer">
              <ul className="project-stack">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
