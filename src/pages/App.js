import React, { Component } from 'react';
import './App.css';
import NavMenu from './Nav'
import Header from './Header'


class Home extends Component {
  render(){
    return (
      <div className="App">
        <NavMenu />
        <Header />
        <p>
          Welcome to my website!!!
        </p>
      </div>
    );
  }
}

export default Home;
