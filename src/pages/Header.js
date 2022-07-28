import {Component} from 'react';
var logo = "https://c.tenor.com/yE93MoMrKsUAAAAC/moai-emoji-moai.gif"
class Header extends Component{
  render()
  {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Moyai</h1>
      </header>
    );
  }
}
export default Header;