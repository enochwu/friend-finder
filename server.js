const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
