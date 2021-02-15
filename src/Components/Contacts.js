
import React, { Component} from 'react';
import ContactsForm from './ContactsForm';

class Contacts extends Component{

    constructor(){
// modified in 15/2/2021  part 2
// modification in archive branch
        super()
        this.state = {};
    }

    render(){
        return (
            <>
                <div className="row">
                    <div className="col-md-6">
                    {/* Let’s recap (فلنلخص)what happens in this example:

                    1-We call ReactDOM.render() with the <Welcome name="Sara" /> element.
                    2-React calls the Welcome component with {name: 'Sara'} as the props.
                    3-Our Welcome component returns a <h1>Hello, Sara</h1> element as the result. */}
                        <ContactsForm name="sara"/>
                    </div>
                    <div className="col-md-6">
                        contact list{/* Contacts list showed using ng-repeat in react use .map */}
                    </div>
                </div> 
            </>
        );
    };

}

export default Contacts