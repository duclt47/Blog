import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Yeti Agency</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><a >One</a></li>
              <li><a >Two</a></li>
              <li><a >Three</a></li>
              <li><a >Four</a></li>
            </ul>
          </div>
        </div>
        
    
        <div className="callout large primary">
          <div className="row column text-center">
            <h1>Our Blog</h1>
          </div>
        </div>
        
        <div className="row" id="content">
          <div className="medium-8 columns">
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2015</small></h3>
              <img className="thumbnail" src="http://placehold.it/850x350"/>
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a >Author: Mike Mikers</a></li>
                  <li><a >Comments: 3</a></li>
                </ul>
              </div>
            </div>
    
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2015</small></h3>
              <img className="thumbnail" src="http://placehold.it/850x350" />
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a >Author: Mike Mikers</a></li>
                  <li><a >Comments: 3</a></li>
                </ul>
              </div>
            </div>
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2015</small></h3>
              <img className="thumbnail" src="http://placehold.it/850x350" />
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a >Author: Mike Mikers</a></li>
                  <li><a >Comments: 3</a></li>
                </ul>
              </div>
            </div>
    
            <div className="blog-post">
              <h3>Awesome blog post title <small>3/6/2015</small></h3>
              <img className="thumbnail" src="http://placehold.it/850x350" />
              <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
              <div className="callout">
                <ul className="menu simple">
                  <li><a >Author: Mike Mikers</a></li>
                  <li><a >Comments: 3</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="medium-3 columns" data-sticky-container>
            <div className="sticky" data-sticky data-anchor="content">
              <h4>Categories</h4>
              <ul>
                <li><a >Skyler</a></li>
                <li><a >Jesse</a></li>
                <li><a >Mike</a></li>
                <li><a >Holly</a></li>
              </ul>
    
              <h4>Authors</h4>
              <ul>
                <li><a >Skyler</a></li>
                <li><a >Jesse</a></li>
                <li><a >Mike</a></li>
                <li><a >Holly</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="row column">
          <ul className="pagination" role="navigation" aria-label="Pagination">
            <li className="disabled">Previous</li>
            <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
            <li><a  aria-label="Page 2">2</a></li>
            <li><a  aria-label="Page 3">3</a></li>
            <li><a  aria-label="Page 4">4</a></li>
            <li className="ellipsis"></li>
            <li><a  aria-label="Page 12">12</a></li>
            <li><a  aria-label="Page 13">13</a></li>
            <li><a  aria-label="Next page">Next</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
