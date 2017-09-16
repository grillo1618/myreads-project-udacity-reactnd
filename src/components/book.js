import React, { Component } from 'react';

/**
* @description Represents a book and is used to represent a book's data for UI.
* @constructor
* @param {object} props - Props from book's component, passed through attribute.
*/
class Book extends Component {

    constructor(props) {
      super(props);
      this.state = {shelf: this.props.book.shelf};
    }

    /**
    * @description Updates book data in library.
    * @param {object} event - This, the event that has the value of the change
    * from the search input.
    */
    updateBook=event=>{
      const NEW_SHELF = event.target.value;
      this.setState({shelf: NEW_SHELF});
      if(this.props.updateSearchBook) {
        this.props.updateSearchBook(this.props.book, NEW_SHELF);        
      }
      this.props.updateBook(this.props.book, NEW_SHELF);
    };

    render(){
            return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{backgroundImage:`url(${this.props.book.imageLinks.thumbnail})`}}>
              </div>
              <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={this.updateBook}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">
              { this.props.book.authors ? this.props.book.authors.join(', '): ' '}
            </div>
          </div>
        )// render() return.
    }// End render() method.
}// End Book class definition.

//Export:
export default Book;