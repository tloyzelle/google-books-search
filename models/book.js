const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String]
    }, 
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;