import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {
      super(props);
      this.state = {bookShelf: this.props.bookShelf};
     }

    onHandleBookChange = (event) => {
      const CHANGING_SHELF = event.target.value;
      this.props.updateBook(this.props.id, CHANGING_SHELF);
      this.setState({bookShelf: CHANGING_SHELF});
    }

    updateBook = event => {
      const NEW_SHELF = event.target.value;
      this.props.updateBook(this.props.book, NEW_SHELF);
      this.setState({bookShelf: NEW_SHELF});
    };

    render () {
        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" 
                style={{width: 128, height: 193, 
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`}}>
              </div>
              <div className="book-shelf-changer">
                <select value={this.props.shelf || this.props.book.shelf} 
                        onChange={this.updateBook}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{ this.props.book.title }</div>
            {/* <div className="book-authors">{ this.props.book.authors.map( (author) => (
              <li key={ author }>{ author }</li>
              ))}
            </div> */}
          </div>
        ) // render() return.
    } // End render() method.
} // End Book class definition.

export default Book;