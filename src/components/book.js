import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {
      super(props);
      this.state = { bookShelf: this.props.bookShelf };
     }

    // state = {
    //   bookShelf: ''
    //  }

    onHandleBookChange = (event) => {
      const changingShelf = event.target.value;
      this.props.updateBook(this.props.id, event.target.value);
      this.setState({bookShelf: changingShelf});
      console.log("book state: ", this.state.bookShelf, changingShelf);
    }

    updateBook = event => {
      const newShelf = event.target.value;
      this.props.updateBook(this.props.id, newShelf);
      this.setState({
        bookShelf: newShelf
      });
    };

    render () {
      
        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})`}}>
              </div>
              <div className="book-shelf-changer">
                <select value={ this.state.bookShelf } onChange={ this.updateBook }>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{ this.props.bookTitle }</div>
            <div className="book-authors">{ this.props.bookAuthors.map( (author) => (
              <li key={ author }>{ author }</li>
              ))}
            </div>
          </div>
        ) // render() return.
    } // End render() method.
} // End Book class definition.

export default Book;