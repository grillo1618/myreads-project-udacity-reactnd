import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Book from './book';

class Bookshelf extends Component {

    static propTypes = {
        shelfName: PropTypes.string.isRequired,
        Books: PropTypes.array,
        updateLibrary: PropTypes.func.isRequired
    };

    // state = { }

    updateBookLibrary(bookId, shelfName) {
        
    }

    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ this.props.shelfName }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.Books.map( (book) => ( <Book key={ book.id } Book={ book }/> ) )}
              </ol>
            </div>
          </div>
        ) // Return end.
    } //End render method 
} // End Bookshelf class definition

export default Bookshelf;