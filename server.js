// Npm packages
const express = require("express");
const db = require("./models/contact");
const mysql = require("mysql");


// // Requiring passport as we've configured it
const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "portfolio"
    });
};

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("models"));

// Setting up Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Establishing routes
const routes = require("./routes");
app.use(routes);

// Sever Listener
// { force: true } inside of sync function to reset tables accordingly

// db.sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});
// });