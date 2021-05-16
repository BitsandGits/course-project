// require Express Router 
const express = require("express");
const router = express.Router(); 

// require controller 
const bookController = require("../controllers/book-controller"); 

// routes
// new goes before id so it doesn't get mistaken as an id 
router.route("/")
    .post(bookController.book_new); 

// :id is a query param thus put it last 
router.route("/:id")
    .get(bookController.book)
    .put(bookController.book_update)
    .delete(bookController.book_delete);

module.exports = router;