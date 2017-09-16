import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './book';

/**
* @description Represents a bookshelf that holds books
               of its respective categories.
*/
class Bookshelf extends Component {

    static propTypes={
        shelfName: PropTypes.string.isRequired,
        Books: PropTypes.array,
        updateLibrary: PropTypes.func.isRequired
    };

    /**
    * @description Inserts book to the respective shelf be it from the main page
                   or from the search page and updates library data.
    * @param {object} book
    * @param {string} shelfName
    */
    updateBookLibrary=(book, shelfName)=>{
        BooksAPI.update(book, shelfName).then((data)=>{
            this.props.updateLibrary();
        });
    }

    render() {
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {this.props.Books.map((book)=>(
                      <Book key={book.id}
                            book={book}
                            updateBook={this.updateBookLibrary}/>
                      ))}
              </ol>
            </div>
          </div>
        ) // Return end.
    } //End render method
} // End Bookshelf class definition.

//Export:
export default Bookshelf;