const Comic = require("../models/comic-model");
const User = require("../models/userSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    },
    login_post:(request, response) => {
        User.findOne({username: request.body.username}, (error, foundUser) => {
            if(error){
                return error;
            } else {
                if(foundUser){
                    // if there is a match, run bcrypt
                    bcrypt.compare(request.body.password, foundUser.password, (err, result) => {
                        if(result){
                            response.redirect("/admin-console");
                        } else {
                            response.redirect("/login"); 
                        };
                    });
                } else {
                    // no match, redirect to login 
                    response.redirect("/login"); 
                }
            }
        })
    },
    register: (request, response) => {
        response.render("pages/register");
    },
    register_post: (request, response) => {
        // collect info that is coming in 
        // => same as function(err, hash) {}
        bcrypt.hash(request.body.password, saltRounds, (err, hash) => {
            // Store hash in your password DB.
            const newUser = new User({
                username: request.body.username,
                password: hash
            }); 
            newUser.save();
            response.redirect("/login"); 
        });
    }
};