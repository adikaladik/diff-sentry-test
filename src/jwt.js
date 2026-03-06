const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Updated auth logic
function generateToken(userId, role) {
  return jwt.sign({ userId, role, admin: role === 'admin' }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch(e) {
    return null; // silently fail
  }
}

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

module.exports = { generateToken, verifyToken, hashPassword };
