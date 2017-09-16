import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './book';

/**
* @description Represents the searcher page with book searching features.
*/
class Searcher extends Component {
    
    state= {
        booksData:[]
    }

    /**
    * @description Searches books with the BooksAPI's search
    *              method and sets state.
    * @param {string} query - Input from user in the searchbar.
    */
    searchBooks=(query)=>{
        const searchQuery=query.trim();
        if(searchQuery) {
            BooksAPI.search(searchQuery, 20).then((result)=>{
                result.forEach((book)=>{
                    book.shelf = 'none';
                });
                this.setState({booksData: result});
            });
        }
    }
    
    updateSearchBook = (book, shelf)=>{
        const bookToUpdate = this.state.booksData.findIndex((sbook)=>sbook.id === book.id);
        let books = this.state.booksData;
        books[bookToUpdate].shelf = shelf;
        this.setState({booksData: books});
    }

    /**
    * @description This method is called from the book's component
                to update data from the library.
    * @param {book} book - Book object from book's component. 
    * @param {string} shelfName - Shelf name where the book is to be moved.
    */
    updateBookLibrary=(book, shelfName)=>{
        BooksAPI.update(book, shelfName);
    }

    render() {
        return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                           placeholder="Search by title or author"
                           value={this.state.searchQuery}
                           onChange={(event)=>{
                               this.searchBooks(event.target.value);
                           }}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.booksData.map((book, index)=>(
                            <Book key={book.id}
                            book={book}
                            updateBook={this.updateBookLibrary}
                            updateSearchBook={this.updateSearchBook}/>)
                            )}
                </ol>
            </div>
        </div>
        )
    } // End Render() method.
}// End Class Searcher definition.

//Export:
export default Searcher;