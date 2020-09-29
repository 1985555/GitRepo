import React, { useState, useEffect, useMemo } from 'react';
import Contacts from './Components/Contacts';

import './App.css';
import Pagination from './Components/pagination';
import Searching from './Components/Searching';
//import axios from 'axios';

// A Function component also returns HTML, and behaves pretty much the same way as a Class component, 
//but Class components have some additions, and will be preferred in this tutorial. 
// example function Car () ... end then .render(<Car/>, getelementby...)
//function App() {
const App = () => { 
//class App extends Component{  //the component's name must start with an upper case letter.
   // Every component also requires a render() method, this method returns HTML.

  //  const AddData = () => {
  //   try{ 
  //   fetch('URL', { 
  //      method:'POST',
  //      headers :{
  //        'Accept': 'application/json, text/plain, */*',
  //        'Content-Type': 'application/json'
  //      },
  //      body: JSON.stringify({ name:'', email:'', phone:'' })
  //    })
  //    .then(result => result.json)
  //    .then(data => {
  //       console.log("post function ");
  //       // or this.state ...
  //    })
  //   }
  //   catch(e)
  //   {
  //     console.log(e);
  //   }
  // };

// Pagination variables 
const [items, updateItems ] = useState([]);
const [nbitems, updateNbItems ] = useState(0);
const [currentPage, setCurrenPage ] = useState(1);
const [searchedText, setSearchingText] = useState("");
const [itemperpage, setItemPerPage ] = useState(3);
const [isLoaded, setIsLoaded ] = useState(false);

//const [currentItems, updateCurentItems ] = useState([]);

//const [firstIndex, SetStartIndex ] = useState(itemperpage * (currentPage - 1) );
//const [lastIndex, SetLastIndex ] = useState(firstIndex + itemperpage);


//console.log("2 - firstIndex = " + firstIndex + ", lastIndex = " + lastIndex);

// Searching variables

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
useEffect(() => { // <--- this hook run every time the page render, unless you add an empty array as 2nd argument,
  // and  in this case it runs only once(when the pagee render the first time === on mount)

  const FetchDataFromAPI = () => {
    // and you can use axios.get also
    // see https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia <--- (fetch + pagination)
  
  // I can use axios as well to fetch data from an API, the returned data is stringified 
  // in axios you don't need to use .json()  
  
      fetch('https://jsonplaceholder.typicode.com/users') // , (result) => result.json()) <-- totaly false
      .then((result) =>  result.json())  // result.json() to convert it to json format
        .then(json => {  // we want to take the json that we guess formated
  
          updateItems(json);
          //updateCurentItems(json.slice(firstIndex, lastIndex));
          //updateNbItems(items.length);
          
          setIsLoaded(true);        
      })
      .catch((error) => {
          console.log(error);
      });
  };

  FetchDataFromAPI();// this function will run just onLoading, because the empty array.

},[]);// [] means it only will runs when it mounts, which is what we want. 
//},[count]);  this line means whenever the count variable changed, useEffect is called again.

/*
const [sortingType, changesorting ] = useState('asc');
const sortByName = () => {
//   sorting by ID: desc and asc
  //     items.sort( (a, b) => {
  //     if(sortingType === 'desc')
  //     if(a.name.toLowerCase() < b.name.toLowerCase())
  //     return -1;
  //     if(sortingType === 'asc')
  //     if(a.name.toLowerCase() > b.name.toLowerCase())
  //     return -1;
  // });
  //console.log(items);
  sortingType === 'desc' ? changesorting('asc') : changesorting('desc');  // component is rendering because the "useState" call
}*/

// sorting by id: desc and asc
  /*const b = items.sort( (a, b) => 
    sortingType === 'desc' ? parseInt(a['id']) - parseInt(b['id']) : parseInt(b['id']) - parseInt(a['id'])
  );
  updateItems(b);
  sortingType === 'desc' ? changesorting('asc') : changesorting('desc');
}*/

 /*
  items.sort( (a, b) => {
    if(sortingType === 'desc')
    if(a.name.toLowerCase() < b.name.toLowerCase())
    return -1;
    if(sortingType === 'asc')
    if(a.name.toLowerCase() > b.name.toLowerCase())
    return -1;
});
*/

const DataToShow = useMemo (() => {

    var users = items;

    if(searchedText){
      users = users.filter(i => {
        return i.name.toLowerCase().includes(searchedText.toLowerCase())
      })
      //updateNbItems(users.length);  //old code
    }

    updateNbItems(users.length);
    var f = (currentPage - 1) * itemperpage;
    console.log(" test ");
    return users.slice(f, f + itemperpage);

}, [items, currentPage, searchedText, itemperpage]);

const setNb = (e) => {
  setItemPerPage(e.target.value);
  setCurrenPage(1);
}

if(!isLoaded)
  return (<div>Please wait, data is loading ... { isLoaded }</div>);
else
  {
    return (
      <div className="App">

      <div id="pagination">
      <hr color="black"/>
        <Pagination numberOfitems={ nbitems } 
                    itemperpage={ itemperpage } 
                    currentPage = { currentPage }
                    paginate={ number => setCurrenPage(number) }/>
      
      Items per page : <select onChange={ setNb } value={ itemperpage }>

        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      
      <div className="container">
        <div className="row">
          <div className="col-1 heading">Id</div>
          
          <div className="col-6 heading">
            Name 
              <Searching OnSearch={ (text) => { setSearchingText(text); setCurrenPage(1); }} />
          </div>
          
          <div className="col-5 heading">Email</div>
        </div>

        { DataToShow.map(item => (
          <div className="row" key={ item.id }>
              <div className="col-1">
                { item.id }
              </div>
              <div className="col-6">
                { item.name }
              </div>
              <div className="col-5">
                { item.email }
              </div>
          </div>))}
      </div>

        </div>
      
        {/* <div className="row">
          <div className="col-md-12">
            <Contacts />
          </div>
        </div> <User text="this is a text showing using props "/> 
        <button className="btn btn-primary" 
        type="submit" 
        onClick={ () => this.AddData }> Insert </button>
        onClick={ sortByName } >
          { sortingType === 'desc' ? 
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg> :
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg> } 
        */}

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

Components toDo:
1-DataTable component to show list of models   // done
2-Pagination component                         // done
3-Sorting component
4-Searching component
5-Image slider component

 */