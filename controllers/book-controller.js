// require data
// const { request, response } = require("express");
const data = require("../starter-files/data");
const { v4:uuid } = require('uuid'); 
const { request, response } = require("express");

module.exports = {
    book: (request, response) => {
        const { id } = request.params;
        // find id and save
        const foundBook = data.find(book => book._id === String(id)); 
        response.render("pages/book", {thisBook: foundBook}); 
    },
    book_new: (request, response) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = request.body;
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image});
        console.log(request.body);
        response.redirect("/admin-console"); // redirect cleans url path so "..." is direct path 
    },
    book_update: (request, response) => {
        const { id } = request.params;
        const {_id, title, author, publisher, genre, pages, rating, synopsis, image} = request.body;
        // find id and save
        const foundBook = data.find(book => book._id === String(id)); 
        // update values 
        foundBook.title = title;
        foundBook.author = author;
        foundBook.publisher = publisher;
        foundBook.genre = genre;
        foundBook.pages = pages;
        foundBook.rating = rating;
        foundBook.synopsis = synopsis;
        foundBook.image = image;
        
        response.redirect("/admin-console");
    },
    book_delete: (request, response) => {
        const { id } = request.params;
        const foundBook = data.find(book => book._id === String(id)); 
        const index = data.indexOf(foundBook); 
        data.splice(index, 1);
        response.redirect("/admin-console"); 
    }
};