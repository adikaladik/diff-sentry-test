// Database migration - adds user sessions table
const db = require("../db");

async function up() {
  await db.query(`
    CREATE TABLE user_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id INTEGER REFERENCES users(id),
      token VARCHAR(255) NOT NULL,
      expires_at TIMESTAMP NOT NULL
    )
  `);
}

module.exports = { up };
