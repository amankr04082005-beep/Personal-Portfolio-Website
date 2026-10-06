import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Built by {profile.name} with React, Node.js, and MongoDB.{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
