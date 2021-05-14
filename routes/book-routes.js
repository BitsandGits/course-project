// require Express Router 
const express = require("express");
const router = express.Router(); 

// require controller 
const bookController = require("../controllers/book-controller"); 

// routes
router.route("/:id")
    .get(bookController.book);

module.exports = router;