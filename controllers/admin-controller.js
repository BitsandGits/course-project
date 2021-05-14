// require data
const { request, response } = require("express");
const data = require("../starter-files/data");

module.exports = {
    admin: (request, response) => {
        response.render("pages/admin", {allBooks: data}); // pass data to admin
    },
    create: (request, response) => {
        response.render("pages/create");
    },
    update: (request, response) => {
        response.render("pages/update");
    }
}; 