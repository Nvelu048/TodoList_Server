const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./controllers/auth.controller');
const { verifyToken } = require('./auth/index');
const api = require('./controllers/api.controller');
const { connectToDB } = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', auth);
app.use(verifyToken);
app.use('/api', api);
async function main() {
  try {
    await connectToDB().catch((err) => {
      throw err;
    });
    app.listen(4000, () => {
      console.log('server started');
    });
  } catch (err) {
    console.log('Issue in starting service ', err);
  }
}
main();
