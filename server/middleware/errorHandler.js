module.exports = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((e) => e.message).join(', ');
    return res.status(400).json({ message });
  }
  console.error(err);
  res.status(500).json({ message: 'Server error' });
};
