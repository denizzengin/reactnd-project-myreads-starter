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
  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }

  updateBook(book, shelf) {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      this.setState((currentBooks) => ({
        books: [...currentBooks.books.filter((b) => b.id !== book.id), book],
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/">
          <BookCategory books={this.state.books} updateBook={this.updateBook} />
        </Route>
        <Route exact path="/search">
          <BookSearch books={this.state.books} updateBook={this.updateBook} />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
