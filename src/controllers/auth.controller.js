const { generateToken } = require('../auth/index');
const auth = require('express').Router();

auth.get('/login', (req, res) => {
  // Todo:  Get from Service file yet to implement
  const user = {
    name: 'nrajan066',
    pwd: 'kavin@123',
  };
  res.json({
    token: generateToken(user),
    status: 200,
  });
});

module.exports = auth;
