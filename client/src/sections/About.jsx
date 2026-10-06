import { profile, experience } from '../data';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <h2>About</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I graduated with a BCA from Acharya Institute of Graduate Studies in
            Bengaluru (CGPA 8.4). I'm currently in an apprenticeship building
            production features end to end, and outside of that I build full-stack
            projects to get hands-on with the parts of the stack a given job
            doesn't cover yet — authentication, deployment, API design.
          </p>
          <p>
            Before this, I worked with SQL and backend data pipelines, which is
            where I picked up a habit I still carry: check the query plan, write
            the test, don't trust the happy path. I bring that same discipline to
            the APIs and databases I build now.
          </p>
        </div>

        <div className="about-experience">
          <h3>Experience</h3>
          {experience.map((job) => (
            <div className="xp-item" key={job.org}>
              <div className="xp-head">
                <span className="xp-role">{job.role}</span>
                <span className="xp-period">{job.period}</span>
              </div>
              <p className="xp-org">{job.org}</p>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
