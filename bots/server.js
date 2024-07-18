require('dotenv').config({ path: './bot/.env' });
const { Probot } = require('probot');
const express = require('express');
const app = express();
const createProbot = Probot.defaults({
  id: process.env.APP_ID,
  secret: process.env.WEBHOOK_SECRET,
  privateKey: process.env.PRIVATE_KEY,
});

const probot = createProbot({
  overrides: {
    webhookPath: '/api/webhook',
    secret: process.env.WEBHOOK_SECRET,
  },
});

probot.load(require('./index.js'));

app.use(probot.middleware);

app.listen(3000, () => {
  console.log('Probot app listening on port 3000');
});
