import React, { Component } from 'react'; 
import * as BooksAPI from './BooksAPI'

class Library extends Component {

    constructor() {

    }

    state = {

    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                Bookshelves here please
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        </div>
        ) // End render return.

    }// End render() method.

}// End Library class definition.

export default Library;