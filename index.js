const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

const port = 3003;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public')); // public devient root

app.get('/', (req, res) => {
  console.log('GET /');
  console.log('req.param', req.param);

  res.render('home')

});



app.listen( port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });