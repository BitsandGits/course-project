const Comic = require("../models/comic-model");

module.exports = {
    admin: (request, response) => {
        // use find() method 
        Comic.find({},(error, books) => {
            if(error){
                return error;
            } else {
                response.render("pages/admin", {allBooks: books}); // pass allBooks to admin.ejs
            }
        }).sort({title:1})
    },
    create: (request, response) => {
        response.render("pages/create");
    },
    // PRE-Submit: find book, populate with old data 
    update: (request, response) => {
        // find id and save
        const bookID = request.params.id; 
        // use findOne() method 
        Comic.findOne({_id: bookID}, (error, foundComic) => {
            if(error) {
                return error;
            } else {
                // pull up the original info via found id 
                response.render("pages/update", {thisBook:foundComic});
            }
        })
    }
}; 