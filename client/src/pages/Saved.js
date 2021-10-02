import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";


function Saved() {
  // Setting our component's initial state
  const [savedBooks, setSavedBooks] = useState([])

  // When component loads call loadBooks()
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all saved books and sets them to books
  function loadBooks() {
    API.getSavedBooks()
        .then(res => 
        setSavedBooks(res.data)
        )
        .catch(err => console.log(err));
    };

  //Remove book from saved book list; then reload saved books to page
  const handleRemoveBook = event => {
      event.preventDefault();

      API.removeBook(event.target.id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }


  return (
    <div>
        <Container>
            <Row>
                <Col size="md-12">
                    {!savedBooks.length ? (
                        <h1 className="text-center">No Books to Display</h1>
                    ) : (
                        <BookList type='Saved Books:'>
                            {savedBooks.map(book => {
                                return ( 
                                <BookListItem
                                    key={book._id}
                                    title={book.title}
                                    description={book.description}
                                    link={book.link}
                                    authors={book.authors}
                                    thumbnail={book.image}
                                    index={book._id}
                                    onclick={handleRemoveBook}
                                    btnName='Remove'
                                />
                                );
                            })}
                        </BookList>
                    )}
                </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Saved;