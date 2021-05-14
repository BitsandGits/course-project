// require Express Router 
const express = require("express");
const router = express.Router(); 

// require routes 
const adminRoutes = require("./admin-routes");
const bookRoutes = require("./book-routes");
const siteRoutes = require("./site-routes");

// routes: router.use instead of router.route 
// splitting where the routing is going 
router.use("/", siteRoutes);
router.use("/books", bookRoutes); 
router.use("/admin-console", adminRoutes); 
 
module.exports = router;