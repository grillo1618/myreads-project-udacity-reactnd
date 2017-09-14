import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Library from './components/library';
import Searcher from './components/searcher';

/**
* @description Represents a book library with searching capabilities.
*/
class BooksApp extends Component {

  state = { }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Library}/>
          <Route path="/search" component={Searcher}/>
        </div>
      </BrowserRouter>
    ) // End return.
  } //End render() method
} // End BooksApp class definition

export default BooksApp;