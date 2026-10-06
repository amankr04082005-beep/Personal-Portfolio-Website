const express = require('express');
const Message = require('../models/Message');
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

// A simple in-memory rate limit: max 5 messages per IP per hour.
// Good enough for a portfolio site, avoids needing a paid rate-limit service.
const submissions = new Map(); // ip -> [timestamps]
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

// POST /api/contact - visitor submits the contact form
router.post(
  '/',
  asyncHandler(async (req, res) => {
    if (isRateLimited(req.ip)) {
      return res.status(429).json({ message: 'Too many messages, please try again later' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ message: 'Please enter a valid email' });
    }

    const saved = await Message.create({ name, email, subject, message });
    res.status(201).json({ id: saved._id, message: 'Message sent successfully' });
  })
);

// GET /api/contact - list messages (for the owner to review; no auth yet, see README)
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  })
);

module.exports = router;
