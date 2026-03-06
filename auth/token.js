const jwt = require("jsonwebtoken");
// Updated auth logic - AI generated
function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
module.exports = { verifyToken };
