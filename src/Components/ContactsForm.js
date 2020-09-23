
import React, { Component } from 'react';  // this line should be React and then { Component }


class ContactsForm extends Component{

    constructor(props){
        super(props);

        this.state = {id:1, name:'Fafa', Male:"M", Country:{ ID:3, Name:"KSA" } }; 
    }
    
    shoot() {
        console.log("Great Shot!");
      }
      
      SetCountry =(event) => {
        this.setState({ id : event.target.value });
      }
      
      ChangeGender = (event) => {
        this.setState({ Male: event.target.value });
      }
      
      submitForm = (e) => {
        e.preventDefault();
        // end then it should save(Add a new object) so add in the next line a function that handle this
        // AddOrEdit(); 
      }
      
      ChangeName = (event) => {
        this.setState({ name: event.target.value });
      }

    render(){
        return(
            // just to be one parent add <> </>
            <>
    <form onSubmit={ this.submitForm }>
        <p>hello word { 5+5 }, name = { this.state.name }. props = { this.props.name}</p>

          <select value={this.state.Country.id} onChange={this.SetCountry}>
            <option value="<-- Select Company -->"></option>
            <option value="1">USA</option>
            <option value="2">Germany</option>
            <option value="3">KSA</option>
          </select> you have selected { this.state.Country.Name }

          <input type="text" defaultValue={this.state.id}/><br/>
          <input type="text" defaultValue={this.state.name} onChange={ this.ChangeName }/><br/>
          Male <input type="radio" name="gender" value="M" 
                      checked={ this.state.Male === "M"} 
                      onChange={ this.ChangeGender }/>
          <br/>
          Female <input type="radio" name="gender" value="F" 
                        checked={ this.state.Male === "F"}
                        onChange={ this.ChangeGender }/>
          <br/>          
          <button className="btn btn-success" onClick={this.shoot}> Send </button>
          the gender now is : { this.state.Male }
          </form> 
    
            </>
        );
    }
} 

export default ContactsForm  // to be able to be imported from another component