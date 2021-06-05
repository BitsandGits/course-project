// Mongoose 
const mongoose = require("mongoose");
const {Schema} = mongoose;

// Schema 
const userSchema = new Schema({
    username: {
        type: String,
        minlength: [3, "Username must be at least 3 characters"],
        trim: true
    },
    password: {
        type: String
    }
});

// Send data to MongoDB 
const User = mongoose.model("User", userSchema);
module.exports = User; 