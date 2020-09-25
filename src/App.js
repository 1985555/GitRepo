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
  // All React components must act like pure functions(c.a.d must never modify its own props) 
  // with respect to their props.
  // In React, component properties should be kept in an object called state.
}   

// the component did mount the method runs after the render method, 
// then updates the render method so we can output the result  

componentDidMount() {
  // and you can use axios.get also
  // see https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia <--- (fetch + pagination)

  fetch('https://jsonplaceholder.typicode.com/users') // , (result) => result.json()) <-- totaly false
    .then((result) =>  result.json())  // result.json() to convert it to json format
      .then(json => {  // we want to take the json that we guess formated
        this.setState({
          items : json,
          isLoaded : true
        });
    })
    .catch((error) => {
        console.log("error");
    });
};

async AddData() {
  try{ 
  fetch('URL', { 
     method:'POST',
     headers :{
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ name:'', email:'', phone:'' })
   })
   .then(result => result.json)
   .then(data => {
      console.log(data);
      // or this.state ...
   })
  }
  catch(e)
  {
    console.log(e);
  }
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
                <hr color="black"/> data fetched from API
                <div>
                  <button className="btn btn-primary" 
                          type="submit" 
                          onClick={ () => this.AddData }> Insert </button>
                  <ul>
                      { items.filter(u => u.id < 4).map(item => (
                          <li key={ item.id }>
                            Name:{ item.name } | Email:{ item.email }
                          </li>)
                        ) }
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
