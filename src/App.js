import React from 'react';
import {Component} from 'react';

//import logo from './logo.svg';
import './App.css';

// A Function component also returns HTML, and behaves pretty much the same way as a Class component, 
//but Class components have some additions, and will be preferred in this tutorial. 
// example function Car () ... end then .render(<Car/>, getelementby...)
//function App() {
class LikeAngularDirective extends Component{
  render(){
    return <p className="cpmt">this is a component, called from App component ...</p>
  }
}
class App extends Component{  //the component's name must start with an upper case letter.
   // Every component also requires a render() method, this method returns HTML.
constructor(){
  super();
  this.state = {id:1, name:'Fafa'}; 
  //In React, component properties should be kept in an object called state.
}

shoot() {
  console.log("Great Shot!");
}

ChangeName = (event) => {
  this.setState({ name: event.target.value});
}
    render(){
      return (
      <div className="App">
        <LikeAngularDirective/>
        <p>hello word { 5+5 }, name = { this.state.name }</p>
        
          <input type="text" defaultValue={this.state.id}/>
          <input type="text" defaultValue={this.state.name} onChange={ this.ChangeName }/>
          <button onClick={this.shoot}>Take the shot!</button>
        
      </div>);
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
