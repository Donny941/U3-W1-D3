import Button from "react-bootstrap/Button";

import Fantasy from "../assets/books/fantasy.json";
import History from "../assets/books/history.json";
import Horror from "../assets/books/horror.json";
import Romance from "../assets/books/romance.json";
import Scifi from "../assets/books/scifi.json";

import { Component } from "react";
import { ButtonGroup, Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    books: Fantasy,
    searchValue: "",
    categorySelected: "Fantasy",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="puff-in-center d-flex justify-content-between my-5">
          <Form onSubmit={this.handleSubmit} className="ms-3">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Insert Title.."
                  className=" mr-sm-2"
                  value={this.state.searchValue}
                  onChange={(e) => this.setState({ searchValue: e.target.value })}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" variant="info">
                  Search Book
                </Button>
              </Col>
            </Row>
          </Form>
          <ButtonGroup aria-label="Category" className="me-5">
            <Button
              variant="outline-info"
              onClick={() => this.setState({ books: Fantasy, categorySelected: "Fantasy" })}
              active={this.state.categorySelected === "Fantasy"}
            >
              Fantasy
            </Button>
            <Button
              variant="outline-info"
              onClick={() => this.setState({ books: History, categorySelected: "History" })}
              active={this.state.categorySelected === "History"}
            >
              History
            </Button>
            <Button
              variant="outline-info"
              onClick={() => this.setState({ books: Horror, categorySelected: "Horror" })}
              active={this.state.categorySelected === "Horror"}
            >
              Horror
            </Button>
            <Button
              variant="outline-info"
              onClick={() => this.setState({ books: Romance, categorySelected: "Romance" })}
              active={this.state.categorySelected === "Romance"}
            >
              Romance
            </Button>
            <Button
              variant="outline-info"
              onClick={() => this.setState({ books: Scifi, categorySelected: "Scifi" })}
              active={this.state.categorySelected === "Scifi"}
            >
              Sci-fi
            </Button>
          </ButtonGroup>
        </div>
        <Row xs={2} md={3} lg={6} className="gap-4">
          {this.state.books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
            .map((book) => (
              <SingleBook key={book.asin} book={book} />
            ))}
        </Row>
      </div>
    );
  }
}
export default BookList;
