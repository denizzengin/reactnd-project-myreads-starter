import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookCategory from "./BookCategory";
import BookSearch from "./BookSearch";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf;
    const { books } = this.state;
    let comingBook = books.filter((b) => b.id === book.id);
    if (comingBook.length <= 0) {
      book && books.push(book);
    } else {
      comingBook[0].shelf = shelf;
      BooksAPI.update(book, shelf);
    }
    this.setState(() => ({ books: books }));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookCategory
              books={this.state.books}
              updateBook={this.updateBook}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <BookSearch books={this.state.books} updateBook={this.updateBook} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
