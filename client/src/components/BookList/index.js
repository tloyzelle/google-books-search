import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ type, children }) {
  return (
    <div>
      <h4>{type} </h4>
      <ul className="list-group">{children}</ul>
    </div>
  );
}

// BookListItem renders a bootstrap list item containing data from the google book api call
export function BookListItem({
  thumbnail,
  title,
  description,
  authors,
  link,
  index,
  onclick,
  btnName
  
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-3 sm-2 md-2 lg-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-7 sm-8 md-8 lg-9">
            <h3>{title}</h3>
            <p>Authors: {authors} </p>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book!
            </a>
          </Col>
          <Col size='xs-2 sm-2 md-2 lg-1'>
            <Button
                id={index}
                onClick={onclick}
                type="success"
                className={"input-lg"}
                size={'sm'}>
                {btnName}
              </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}