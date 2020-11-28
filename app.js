var express = require("express");
var bodyParser = require("body-parser");
var Database = require("./db/database");
var routes = require("./routes/controller");

var app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./views"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", routes);

app.listen(8080, function () {
  console.log("Starting at port 8080");
});
// process.env.PORT ||