const express = require('express');

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
  res.send(
    `<p>We got this</p>`
  );
});

app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'The API connection is working',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
