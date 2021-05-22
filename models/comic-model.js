// Mongoose 
const mongoose = require("mongoose");
const {Schema} = mongoose;

// Schema 
const comicSchema = new Schema({
    title: {
        type: String,
        require: [true, "Please provide a title"],
        minlength: [1, "Title must be at least 1 character long"],
        trim: true
    },
    author: {
        type: String,
        require: [true, "Please provide author name"],
        minlength: [1, "Author name must be at least 1 character long"],
        trim: true
    },
    publisher: {
        type: String,
        trim: true
    },
    genre: {
        type: String,
        trim: true
    },
    pages: {
        type: Number,
        min: [1, "Must be at least 1 page long"]
    },
    rating: {
        type: Number,
        require: [true, "Please provide a rating"],
        max: [5, "highest rating is 5"],
        min: [1, "lowest rating is 1"]
    },
    synopsis: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
});

const Comic = mongoose.model("Comic", comicSchema);
// const Comic -> for programmer to see it's a constructor function 
// model("Comic" -> this is constructor function and mongoose makes it plural and lowercase for collection  

module.exports = Comic; 