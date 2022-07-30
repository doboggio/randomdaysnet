import React from 'react';
import Body from './Components/Body';
import logo from './tf.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrimeChecker from './Components/PrimeChecker';
import About from './Components/About';

class Header extends React.Component {
    imgalt = 'troll face logo';
    render() {
        return (
            <header className="Header">
                <nav>
                    <img
                        src={logo}
                        className="logo"
                        alt={this.imgalt}
                        title={this.imgalt}
                    ></img>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/PrimeChecker">Prime Number checker</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="globalApp">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Body />} />
                        <Route
                            path="/PrimeChecker"
                            element={<PrimeChecker />}
                        />
                        <Route path="/About" element={<About />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
export default App;
