import React from 'react';
import moyai from '../moyai.gif';

const alttext = 'woah it moyai!';

export default class About extends React.Component {
   render() {
      return (
         <div className="About">
            <h1>I am </h1>
            <img src={moyai} alt={alttext} title={alttext}></img>
         </div>
      );
   }
}
