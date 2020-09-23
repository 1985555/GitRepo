import React, { Component } from 'react';

import Contacts from './Components/Contacts';
import User from './Components/User';

//import logo from './logo.svg';
import './App.css';

// A Function component also returns HTML, and behaves pretty much the same way as a Class component, 
//but Class components have some additions, and will be preferred in this tutorial. 
// example function Car () ... end then .render(<Car/>, getelementby...)
//function App() {

class App extends Component{  //the component's name must start with an upper case letter.
   // Every component also requires a render() method, this method returns HTML.
constructor(props){
  super();
  this.state = { 
    items:[], 
    isLoaded: false,
  };
  // All React components must act like pure functions(must never modify its own props) 
  // with respect to their props.
  //In React, component properties should be kept in an object called state.
}   

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => {
    this.setState({
      items : json,
      isLoaded : true
    });
  })
};


render(){

      var { items, isLoaded } = this.state;
      if(!isLoaded)
      {
        return (<div>Please wait, data is loading ...</div>);
      }
else
{

      return (
        <div className="container">
           <div className="row">
            <div className="col-md-12">
              <Contacts />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <User text="this is a text showing using props "/>
            </div>
          </div>
          <hr/> data fetched from API 
          <div>
            <ul>
              { items.map(item => (<li key={item.id}>{ item.name }</li>)) }
            </ul>
          </div>
        </div>
      );
        }
    }
 }
/*
 JSX which allows you to write HTML tags inside the JavaScript code. Example 
 const JSXexample = (<table><tr><td>...</td></tr></table>);
ReactDOM.render(JSXexample, document.getElementById...);
*/
/*Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:

Before:
 hello = function(){
   return '...';
 }
After:
hello = () => {
  return '...';
}
 
 */

export default App;
