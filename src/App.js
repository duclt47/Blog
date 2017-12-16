import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Post from './Component/Post';
import Nav from './Component/Nav';
import Paging from './Component/Paging';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="callout large primary">
          <div className="row column text-center">
            <h1>Our Blog</h1>
          </div>
        </div>
        <div className="row" id="content">
          <div className="medium-8 columns">
            <Post />
            <Post />
          </div>
          <Nav />
        </div>
        <Paging />
        <Footer />
      </div>
    );
  }
}

export default App;
