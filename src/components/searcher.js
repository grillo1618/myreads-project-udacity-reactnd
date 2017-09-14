import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

import Book from './book';

import { Link } from 'react-router-dom';

class Searcher extends Component {
    
    state = { 
        booksData: []
     }
    
    searchBooks = (query) => {
        const searchQuery = query.trim();
        if(searchQuery) {
            BooksAPI.search(searchQuery, 20).then((result)=>{
                console.log(result);
                this.setState({booksData: result});
            });
        }
    }

    updateBookLibrary=(book, shelfName) => {
        BooksAPI.update(book, shelfName);
    }

    render() {
        return ( 
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                           placeholder="Search by title or author"
                           value={this.state.searchQuery}
                           onChange={ (event) => {
                               this.searchBooks(event.target.value); 
                           }} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.booksData.map((book, index)=> (
                            <Book key={book.id} 
                            book={book}
                            shelfName={ 'none' }
                            updateBook={this.updateBookLibrary} /> 
                          
                            )
                )}
                </ol>
            </div>
        </div> 
        )
    } // End Render() method.
}// End Class Searcher definition.

//Export:
export default Searcher;