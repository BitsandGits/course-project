// require data
// const { request, response } = require("express");
const data = require("../starter-files/data");

module.exports = {
    index: (request, response) => {
        response.render("pages/index", {allBooks: data}); // passed data into index
    },
    about: (request, response) => {
        response.render("pages/about");
    },
    login: (request, response) => {
        response.render("pages/login");
    }
};