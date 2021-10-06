import React, { Component } from "react";
import Book from "./Book";
class BookCategoryList extends Component {
  render() {
    const { categories, updateBook } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {categories.map((bd) => (
            <div key={bd.description} className="bookshelf">
              <h2 className="bookshelf-title">{bd.description}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bd.data.map((b) => (
                    <li key={b.id}>
                      {" "}
                      <Book book={b} updateBook={updateBook} />{" "}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BookCategoryList;
