
import React from 'react';

// in class component use props this way:
// class component extends ... and in the return function use this.props.Name directly

// in function component use props this way:
// function x(props) ... and in the return function use props.Name directly without this

function User(props){
         return(
            <> {/*
            Don’t be afraid to split components into smaller components.
            For example, consider this component:
            */}
                <div>
                    {/* another component that shows image and its URL using another component called UserImage*/}
                </div>
                <div>
                    { props.text }
                </div>
            </>
        );
    }
export default User