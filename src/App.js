import React, { Component } from 'react';
import './App.css';
import { Router } from 'react-router-dom';


class BooksApp extends Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {

    return (
      <div className="app">

      </div>
    ) // End return.

  } //End render() method

} // End BooksApp class definition

export default BooksApp;
