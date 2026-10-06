import { achievements } from '../data';

export default function Achievements() {
  return (
    <section className="section achievements">
      <div className="section-head">
        <h2>Beyond the code</h2>
      </div>
      <ul className="achievements-list">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
