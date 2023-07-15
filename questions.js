const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/questions', (req, res) => {
  const question = req.body.question;
  // Save the question to a database
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
}); 
