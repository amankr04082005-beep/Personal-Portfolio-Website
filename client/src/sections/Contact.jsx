import { useState } from 'react';
import { profile } from '../data';
import { sendMessage } from '../api';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await sendMessage(form);
      setStatus('sent');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-head">
        <h2>Get in touch</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p>
            I'm looking for Software Engineer roles — open to relocating.
            Message me here, or reach me directly.
          </p>
          <ul className="contact-links">
            <li>
              <a href={profile.emailLink}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.whatsappLink}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {status === 'sent' ? (
          <div className="contact-success">
            <p>Message sent. I'll get back to you soon.</p>
            <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
              Send another
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              Name
              <input value={form.name} onChange={update('name')} required />
            </label>
            <label className="field">
              Email
              <input type="email" value={form.email} onChange={update('email')} required />
            </label>
            <label className="field">
              Subject
              <input value={form.subject} onChange={update('subject')} />
            </label>
            <label className="field">
              Message
              <textarea rows="5" value={form.message} onChange={update('message')} required />
            </label>

            {status === 'error' && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
