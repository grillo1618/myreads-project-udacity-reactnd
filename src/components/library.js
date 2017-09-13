import React, { Component } from 'react'; 
import * as BooksAPI from '../BooksAPI';

import { Link } from 'react-router-dom';

import Bookshelf from './bookshelf';

class Library extends Component {

    state = {
        libraryData: [],
        bookshelves: ['Currently Reading', 'Want to Read', 'Read'],
        shelves: ['currentlyReading', 'wantToRead', 'read']  
    }

    componentDidMount() {
        this.onGetAllBooks();
    }

    onGetAllBooks() {
        //Get books and then set state.
        BooksAPI.getAll().then((results) => {
            this.setState({ libraryData: results });
        });
    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div>
                <div className="list-books-content">
                    {this.state.bookshelves.map( (shelfName, index) => (
                        <Bookshelf key={ shelfName } shelfName={ shelfName } 
                        Books={this.state.libraryData.filter( book => 
                        book.shelf === this.state.shelves[index])}
                        updateLibrary={ this.onGetAllBooks }/>
                         ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
        )// End render return.
    }// End render() method.
}// End Library class definition.

export default Library;