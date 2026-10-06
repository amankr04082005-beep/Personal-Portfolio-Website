const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5100/api';

export async function sendMessage(payload) {
  const res = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Could not send message');
  return data;
}
