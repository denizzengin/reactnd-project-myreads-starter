import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookCategoryList from "./BookCategoryList";
class BookCategory extends Component {
  render() {
    const { books } = this.props;
    const currentReadingBooks = books.filter(
      (b) => b.shelf === "currentlyReading"
    );
    const wantToReadBooks = books.filter((b) => b.shelf === "wantToRead");
    const readBooks = books.filter((b) => b.shelf === "read");
    const allBookWithCategories = [
      { description: "Current Reading", data: currentReadingBooks },
      { description: "Want to Read", data: wantToReadBooks },
      { description: "Read", data: readBooks },
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookCategoryList
          categories={allBookWithCategories}
          updateBook={this.props.updateBook}
        />
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookCategory;
