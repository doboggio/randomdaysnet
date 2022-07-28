import React, { Component } from 'react';
import '../App.css';
import Header from './Header'


class Home extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        
        <body>
          <br />
          Welcome to my website!!!
        </body>
        
      </div>
    );
  }
}

export default Home;
