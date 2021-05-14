// require data
const { request, response } = require("express");
const data = require("../starter-files/data");

module.exports = {
    book: (request, response) => {
        const { id } = request.params;
        // find id and save
        const foundBook = data.find(book => book._id === String(id)); 
        response.render("pages/book", {thisBook: foundBook}); 
    }
};