import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
class BookSearch extends Component {
  state = {
    query: "",
    searchedBooks: [],
  };

  updateQuery = (query) => {
    if (query !== null && query !== "") {
      BooksAPI.search(query).then((books) => {
        if (!books.error) {
          this.setState(() => ({ searchedBooks: books, query: query }));
        } else {
          this.setState(() => ({ searchedBooks: [], query: query }));
        }
      });
    } else {
      this.setState(() => ({ query: query.trim(), searchedBooks: [] }));
    }
  };

  getBook = (b) => {
    const { books } = this.props;
    var selectBook = books.filter((_) => _.id === b.id);
    if (selectBook.length > 0) {
      b.shelf = selectBook[0].shelf;
    } else {
      b.shelf = "none";
    }

    return b;
  };

  render() {
    const { query, searchedBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks &&
              searchedBooks.map((b) => (
                <li key={b.id}>
                  <Book
                    book={this.getBook(b)}
                    updateBook={this.props.updateBook}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
