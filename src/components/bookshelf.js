import React, { Component } from 'react';

class Bookshelf extends Component {

    constructor() { }

    state = { }

    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              
              </ol>
            </div>
          </div>
        ) // Return end.
    } //End render method 
} // End Bookshelf class definition

export default Bookshelf;