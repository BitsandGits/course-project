// require data
const { request, response } = require("express");
const data = require("../starter-files/data");

module.exports = {
    admin: (request, response) => {
        response.render("pages/admin", {allBooks: data}); // pass data to admin.ejs
    },
    create: (request, response) => {
        response.render("pages/create");
    },
    // PRE-Submit: find book, populate with old data 
    update: (request, response) => {
        // find id and save
        const bookID = request.params.id; 
        // locate book by id
        const foundBook = data.find(book => book._id === String(bookID)); 
        // pull up the original info via found id 
        response.render("pages/update", {thisBook:foundBook});
    }
}; 