const express = require('express');
const mongoose = require('mongoose');

const port = 3000;

const app = express();

mongoose.connect('mongodb://localhost/colectivos');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/router'))  // montar el router

app.listen(port, () => {
  console.log(`Server escuchando en puerto ${port}`);
});
