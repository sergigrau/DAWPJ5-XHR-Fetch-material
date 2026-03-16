const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/itunes', async (req, res) => {
  try {
    const qs = new URLSearchParams(req.query).toString();
    const url = `https://itunes.apple.com/search?${qs}`;
    const resp = await fetch(url);
    const body = await resp.text();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', resp.headers.get('content-type') || 'application/json');
    res.status(resp.status).send(body);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`iTunes proxy running on http://127.0.0.1:${PORT}`));

