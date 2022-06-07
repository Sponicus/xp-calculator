const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("home");
})



app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`XP Calculator listening to ${PORT}`);
});