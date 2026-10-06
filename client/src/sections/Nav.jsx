import { profile } from '../data';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-mark">
        AK
      </a>
      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a className="nav-resume" href={`mailto:${profile.email}`}>
        Say hello
      </a>
    </nav>
  );
}
