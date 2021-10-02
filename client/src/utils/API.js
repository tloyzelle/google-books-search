import axios from "axios";

// The getBooks method retrieves books from the Google Books API
// It accepts a "query" or term to search the book api for
export default {
  //Get books from Google Books Search API
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } });
  },

  //Gets saved books from mongoDB
  getSavedBooks: function() {
    return axios.get("/api/books");
  },

  //Save book to database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  //Remove book from database
  removeBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};