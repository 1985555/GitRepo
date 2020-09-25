
import React, { useState } from 'react';

// in class component use props this way:
// class component extends ... and in the return function use this.props.Name directly

// in function component use props this way:
// function x(props) ... and in the return function use props.Name directly without this

//Function components look like this :

// function Test(props) {   just like javascript function

// }
//or
const User = (props) => { 

// we use useState hook in function component, it's similar to this.state in class component
// refer to this officiel react documentation
// https://reactjs.org/docs/hooks-state.html   <---- very clear, simple and helpful.
//example :
const [variableName, functionName ] = useState('initial value');  //string 
const [counter, increment ] = useState(0); // number 
const [employee, changeEmp ] = useState({ id: 1, name : 'tata' }); // and it could be an object

// and change the value: increment(7);   -> so we get counter = 7
// and we show the variable value by { counter }  inside the render function
         return(
            <> {/*
            Don’t be afraid to split components into smaller components.
            For example, consider this component:
            */}
                <div>
                    {/* another component that shows image and its URL using another component called UserImage*/}
                </div><hr color="black"/>
                <div>
                    counter = { counter }<br/>
                    <button onClick={ () => increment(counter + 1) } className="btn btn-warning">
                        click to increment 
                    </button>
                </div><hr color="black"/>
                <div>
                    { props.text }
                </div>
            </>
        );
    }
export default User