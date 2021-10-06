import React, { Component } from "react";

class Book extends Component {
  state = {
    selectedOption: this.props.book.shelf,
  };

  handleChange = (option) => {
    this.props.updateBook(this.props.book, option);
    this.setState(() => ({ selectedOption: option }));
  };
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) => this.handleChange(e.target.value)}
              value={this.state.selectedOption}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          book.authors.map((a) => (
            <div key={a} className="book-authors">
              {a}
            </div>
          ))}
      </div>
    );
  }
}

export default Book;
