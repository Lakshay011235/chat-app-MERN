const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.json('Hello World!');
});

app.post('/register', (req, res) => {
  console.log(req.body);
})
app.listen(4000);

/// mongodb password :  vrE6UjyuGHEFSw72