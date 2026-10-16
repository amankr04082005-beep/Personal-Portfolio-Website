const mongoose = require('mongoose');

const NAMES = ['MONGO_URI', 'MONGODB_URI', 'MONGO_URL', 'DATABASE_URL'];

function readMongoUri() {
  for (const name of NAMES) {
    let value = process.env[name];
    if (!value) continue;

    value = value.trim().replace(/^["']|["']$/g, '');
    if (value.startsWith(name + '=')) value = value.slice(name.length + 1);

    return { name, value };
  }
  return null;
}

const connectDB = async () => {
  const found = readMongoUri();

  if (!found) {
    console.error('No MongoDB URI found. Add MONGO_URI in the Render Environment tab.');
    console.error(
      'Env variable names containing "MONGO":',
      Object.keys(process.env).filter((k) => k.toUpperCase().includes('MONGO'))
    );
    process.exit(1);
  }

  const validScheme =
    found.value.startsWith('mongodb://') || found.value.startsWith('mongodb+srv://');

  console.log(`Using ${found.name}. Valid scheme: ${validScheme}`);

  if (!validScheme) {
    console.error(
      `${found.name} must start with mongodb+srv:// or mongodb://. Check for extra text before it.`
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(found.value);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;