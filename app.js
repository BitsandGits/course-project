// require dependencies 
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;
const methodOverride = require("method-override");

// adding path module and EJS to app.js
const path = require("path");
app.use(express.static(path.join(__dirname,"public")));
// lets us use pages/index than view/pages/index.ejs bc it knows to look into the views folder (views = keyword)
app.set("view engine", "ejs");

// middleware
app.use(morgan("combined"));
app.use(methodOverride("_method"));

// listen 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// routes have been moved to routes ejs files

// require index 
// .use = ability to let application use something: app.use("/") passes info along to another js file 
// .route = ability to do routing in application, can't use in app.js 
const index = require("./routes/index-routes"); 
app.use("/", index);