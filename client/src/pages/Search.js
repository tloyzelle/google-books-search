import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";

function Search() {

  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then( 
        res =>{
          console.log(res.data.items);
          setBooks(res.data.items)
        }) 
      .catch(err => console.log(err));
  };

  const handleSaveBook = event => {
    //When the button is clicked, prevent its default behavior
    event.preventDefault();
    
    //Save book details using the index to look up book details from state; alert user after save is succesful
    API.saveBook({
      id: books[event.target.id].id,
      title: books[event.target.id].volumeInfo.title,
      authors: books[event.target.id].volumeInfo.authors,
      description: books[event.target.id].volumeInfo.description,
      image: books[event.target.id].volumeInfo.imageLinks.thumbnail,
      link: books[event.target.id].volumeInfo.link
    })
      .then(() => alert('Book saved!'))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      value={bookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      size='lg'
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-10">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <BookList type={'Search Results:'}>
                {books.map((book, index) => {
                  return (
                    <BookListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors}
                      thumbnail={!book.volumeInfo.imageLinks ? (
                        "http://books.google.com/books/content?id=llmymwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                      ) : (book.volumeInfo.imageLinks.thumbnail)} 
                      index={index}
                      onclick={handleSaveBook}
                      btnName='Save Book'
                    />
                  )
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Search;