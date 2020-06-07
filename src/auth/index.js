const jwt = require('jsonwebtoken');
const generateToken = function (user) {
  const token = jwt.sign(user, 'stackHack1.0');
  return token;
};

const verifyToken = function (req, res, next) {
  console.log(req.headers);
  let token = req.headers['x-api-key'];
  if (!token) {
    res.json({
      status: 303,
      message: 'token not supplied',
    });
  }
  jwt.verify(token, 'stackHack1.0', (err, status) => {
    if (err) {
      res.json({
        status: 404,
        message: 'Invalid token',
      });
    }
    console.log(status);
    next();
  });
};

module.exports = { verifyToken, generateToken };
