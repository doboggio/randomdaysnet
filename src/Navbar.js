import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Navbar extends Component{
    render()
    {
      return (
        <div className="NavMenu">
          <ul className="NavButton">
            <li>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  export default Navbar;