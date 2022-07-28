import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class NavMenu extends Component{
    render()
    {
      return (
        <div className="NavMenu">
          <ul className="NavButton">
            <li>
                <a href="/">Home</a>
            </li>
          </ul>
        </div>
      );
    }
  }

  export default NavMenu;