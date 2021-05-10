// require dependencies 
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

// adding path module and EJS to app.js
const path = require("path");
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

// middleware
app.use(morgan("combined"));

// listen 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// GET routes: updated to render 
app.get("/", (request, response) => {
    response.render("pages/index");
});
app.get("/about", (request, response) => {
    response.render("pages/about");
});
app.get("/login", (request, response) => {
    response.render("pages/login");
});
app.get("/admin-console", (request, response) => {
    response.render("pages/admin");
});
app.get("/admin-console/create-book", (request, response) => {
    response.render("pages/create");
});

// GET routes with parameters 
app.get("/books/:id", (request, response) => {
    response.render("pages/book");
});
app.get("/admin-console/update-book/:id", (request, response) => {
    response.render("pages/update");
});