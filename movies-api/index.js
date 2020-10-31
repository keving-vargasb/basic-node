const express = require('express');
const app = express();
const bodyParser = require('body-parser');
/* const multer = require('multer');
const upload = multer(); //Para datos tipo multipart/form-data */
const { config } = require('./config/index');

app.use(bodyParser.json()); // Para application/json
app.use(bodyParser.urlencoded({ extended: true })); // para application/x-www-form-urecoded

const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
