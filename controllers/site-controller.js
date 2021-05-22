const Comic = require("../models/comic-model");

module.exports = {
    index: (request, response) => {
        // use find() method 
        Comic.find({}, (error, books) => {
            if(error){
                return error;
            } else {
                response.render("pages/index", {allBooks: books}); // pass allBooks to index.ejs
            }
        }).sort({title:1})
    },
    about: (request, response) => {
        response.render("pages/about");
    },
    login: (request, response) => {
        response.render("pages/login");
    }
};