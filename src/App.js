import React, { useState, useEffect } from 'react';
import Contacts from './Components/Contacts';
import User from './Components/User';
import './App.css';
import Pagination from './Components/pagination';
//import axios from 'axios';

// A Function component also returns HTML, and behaves pretty much the same way as a Class component, 
//but Class components have some additions, and will be preferred in this tutorial. 
// example function Car () ... end then .render(<Car/>, getelementby...)
//function App() {
const App = () => { 
//class App extends Component{  //the component's name must start with an upper case letter.
   // Every component also requires a render() method, this method returns HTML.
const [count, increment ] = useState(0); // number 

// Pagination variables 
const [itemperpage] = useState(4);
const [isLoaded, setIsLoaded ] = useState(false);
const [currentPage, setCurrenPage ] = useState(1);
const [items, updateItems ] = useState([]);

// constructor(props){
//   super();
//   this.state = { 
//     items:[], 
//     isLoaded: false,
//   };
  // All React components must act like pure functions(c.a.d must never modify its own props) 
  // with respect to their props.
  // In React, component properties should be kept in an object called state.
//}   

// the component did mount the method runs after the render method, 
// then updates the render method so we can output the result  
//componentDidMount = () => {
useEffect(() => {  // <----- 7atta law shelto ma bisir shi
  // and you can use axios.get also
  // see https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia <--- (fetch + pagination)

// I can use axios as well to fetch data from an API, the returned data is stringified 
// in axios you don't need to use .json()  

  fetch('https://jsonplaceholder.typicode.com/users') // , (result) => result.json()) <-- totaly false
    .then((result) =>  result.json())  // result.json() to convert it to json format
      .then(json => {  // we want to take the json that we guess formated
        // this.setState({
        //   items : json,
        //   isLoaded : true
        // });
        updateItems(json);
        setIsLoaded(true);
        console.log ("i am in useEffect hook");
    })
    .catch((error) => {
        console.log("error");
    });
},[]);// [] means it only will runs when it mounts, which is what we want. 
//},[count]);  this line means whenever the count variable changed, useEffect is called again.

// current page
const LastIndex = currentPage * itemperpage;
const firstindex = LastIndex - itemperpage;
const currentItems = items.slice(firstindex, LastIndex);

const paginate = (number) => {
  setCurrenPage(number);
}


const AddData = () => {
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
const [sortingType, changesorting ] = useState('asc');

const sortByName = () => {
//   sorting by ID: desc and asc
  const b = items.sort( (a, b) => {
      if(sortingType === 'desc')
      if(a.name.toLowerCase() < b.name.toLowerCase())
      return -1;
      if(sortingType === 'asc')
      if(a.name.toLowerCase() > b.name.toLowerCase())
      return -1;
  });
  updateItems(b);
  sortingType === 'desc' ? changesorting('asc') : changesorting('desc');
}

// sorting by id: desc and asc
  /*const b = items.sort( (a, b) => 
    sortingType === 'desc' ? parseInt(a['id']) - parseInt(b['id']) : parseInt(b['id']) - parseInt(a['id'])
  );
  updateItems(b);
  sortingType === 'desc' ? changesorting('asc') : changesorting('desc');
}*/

//render(){
      //var { items, isLoaded } = this.state;
if(!isLoaded)
  return (<div>Please wait, data is loading ...</div>);

else
  {
    return (
      <div className="container">

<div id="pagination">
        <table className="table"><thead><tr>
          <th> Id </th>
          <th> Name <button onClick={ sortByName }>V</button></th>
          <th> Email </th></tr></thead>
        <tbody>
        { currentItems.map(item => (
        <tr key={ item.id }>
          <td>{ item.id }</td><td>{ item.name }</td><td>{ item.email }</td>
        </tr>)
        ) }
        </tbody>
        </table>
        </div>
        <hr color="black"/>
        {/* the pagination needs only nbOfAllEle and nbOfElePerPage */}
        <Pagination numberOfitems={ items.length } 
                    itemperpage={ itemperpage } 
                    paginate={ paginate }/>
                    {/* in the paginate function, you don't need to pass the argument  */}

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
        <button className="btn btn-primary" 
        type="submit" 
        onClick={ () => increment(count + 1) }> increment </button>

        </div>
      </div>
    );
  }
}
export default App;


          
      
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