import React from 'react';
import MA from '../Ma-1.mp4';
function isPrime(n) {
   if (n < 2) return false;
   if (n == 2 || n == 3) return true;
   if (n % 2 == 0 || n % 3 == 0) return false;
   for (var i = 6; i * i <= n; i += 6) {
      if (n % (i - 1) == 0 || n % (i + 1) == 0) return false;
   }
   return true;
}

function checkPrime(num) {
   if (num == 69) {
      return (
         <>
            <iframe
               width="560"
               height="315"
               src="https://www.youtube.com/embed/3WAOxKOmR90?autoplay=1"
               frameborder="0"
               allowfullscreen
            ></iframe>
            <h1>no prime but it's a nice number</h1>
         </>
      );
   } else if (num == 47) {
      return (
         <>
            <iframe
               width="560"
               height="315"
               src={MA}
               frameborder="0"
               allowfullscreen
            ></iframe>
            <h1>47 is a funny number and it's also prime</h1>
         </>
      );
   }
   if (Math.abs(num * Number.EPSILON) >= 2) {
      return <h3>woah ur number is really big!!!!</h3>;
   }
   const pb = isPrime(num);
   if (pb) {
      return <h1>ur num is prime!!!</h1>;
   } else {
      return <h2> oh noes! ur num isn't prime!!</h2>;
   }
}

export default class PrimeChecker extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         num: 0,
         submitted: false,
         primeBool: false,
         response: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ num: event.target.value });
   }

   handleSubmit(event) {
      const n = this.state.num;
      const element = checkPrime(n);
      this.setState({ submitted: true });
      this.setState({ response: element });
      event.preventDefault();
   }
   render() {
      let response = this.state.submitted ? this.state.response : null;

      return (
         <div>
            <form className="primeForm" onSubmit={this.handleSubmit}>
               <label>Enter a number: </label>
               <input
                  type="text"
                  value={this.state.num}
                  onChange={this.handleChange}
               />
               <input type="submit" value="Submit" />
            </form>
            {response}
         </div>
      );
   }
}
