// Npm packages
const express = require("express");

// // Requiring passport as we've configured it
const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Setting up Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Establishing routes
const routes = require("./routes/index");
app.use(routes);

// Sever Listener
// { force: true } inside of sync function to reset tables accordingly
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
