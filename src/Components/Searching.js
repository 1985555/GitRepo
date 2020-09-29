
import React, { useState } from 'react';

const Searching = ({ OnSearch }) => {
    
    const[ searchedText, setSearch ] = useState('');

     const searchInList = (val) => {
         setSearch(val);
         OnSearch(val);
     }
    
    return (
        <> { /* <----- this empty tag called fragment */ }
            <input type="text" style={{ borderRadius: "5px"}} 
                   className ="form-control searchInput" 
                   onChange={ (e) => searchInList(e.target.value) } 
                   placeholder="Search"
                   value={ searchedText }/>
        </>
    );
}

export default Searching