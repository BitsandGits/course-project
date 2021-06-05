const Comic = require("../models/comic-model");

module.exports = {
    book_detail: (request, response) => {
        const { id } = request.params;
        // use findOne() method 
        Comic.findOne({_id: id}, (error, foundComic) => {
            if(error) {
                return error;
            } else {
                // pull up the original info via found id 
                response.render("pages/book", {thisBook:foundComic});
            }
        })
    },
    book_create: (request, response) => {
        // use Comic model 
        const newComic = new Comic({
            title: request.body.title,
            author: request.body.author,
            publisher: request.body.publisher,
            genre: request.body.genre,
            pages: request.body.pages,
            rating: request.body.rating,
            synopsis: request.body.synopsis,
            image: request.body.image
        }); 
        newComic.save();
        response.redirect("/admin-console"); // redirect cleans url path so "..." is direct path 
    },
    book_update: (request, response) => {
        const { id } = request.params;
        // use findByIdAndUpdate method 
        Comic.findByIdAndUpdate({_id: id}, {$set:{
            title: request.body.title,
            author: request.body.author,
            publisher: request.body.publisher,
            genre: request.body.genre,
            pages: request.body.pages,
            rating: request.body.rating,
            synopsis: request.body.synopsis,
            image: request.body.image
        }}, {new: true}, (error) => {
            if(error) {
                return error;
            } else {                
                response.redirect("/admin-console");
            }
        }); 
    },
    book_delete: (request, response) => {
        const { id } = request.params;
        // use deleteOne() method 
        Comic.deleteOne({_id: id}, (error) => {
            if(error) {
                return error;
            } else {                
                response.redirect("/admin-console");
            }
        });
    }
};