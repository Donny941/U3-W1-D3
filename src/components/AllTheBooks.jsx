import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fantasy from "../assets/books/fantasy.json";
import History from "../assets/books/history.json";
import Horror from "../assets/books/horror.json";
import Romance from "../assets/books/romance.json";
import Scifi from "../assets/books/scifi.json";

import { Component } from "react";
import { Badge, Col, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    books: Fantasy,
  };
  render() {
    return (
      <div className="container">
        <div className="text-center my-4">
          <Button variant="outline-info" className="mx-2" onClick={() => this.setState({ books: Fantasy })}>
            Fantasy
          </Button>
          <Button variant="outline-secondary" className="mx-2" onClick={() => this.setState({ books: History })}>
            History
          </Button>
          <Button variant="outline-warning" className="mx-2" onClick={() => this.setState({ books: Horror })}>
            Horror
          </Button>
          <Button variant="outline-danger" className="mx-2" onClick={() => this.setState({ books: Romance })}>
            Romance
          </Button>
          <Button variant="outline-light" className="mx-2" onClick={() => this.setState({ books: Scifi })}>
            Sci-fi
          </Button>
        </div>
        <Row xs={2} md={4} lg={6} className="gap-4 ">
          {this.state.books.map((book) => (
            // <Col>
            <Card key={book.asin} className="ms-3 scale shadow-lg bg-body-tertiary p-0">
              <Card.Img style={{ height: "250px", objectFit: "cover" }} variant="top" src={book.img} />
              <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                <Card.Title>{book.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <Badge pill bg="light" text="dark">
                    {book.price} $
                  </Badge>
                  <Button variant="primary">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
            // </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default AllTheBooks;
