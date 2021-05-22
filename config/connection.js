const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/codesquadComics", 
{useNewUrlParser:true, useUnifiedTopology:true},
(err) => {
    if(!err) { 
        console.log("Successful connection with MongoDB Server. Good job!");
    } else {
        console.log("Error with MongoDB connectivity");
    }
});