import React from "react";
import logo from "../tf.png"

export default class Header extends React.Component
{
    render(){
        return(
            <header className="Header">
                <img src={logo} className="logo"></img>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Prime Number checker</li>
                </ul>
            </header> 
        );
    }
}