import React, { Component } from 'react';
import './card.css';
class App extends Component{
constructor(){
  super();
  this.state = {
    users: null
  };
}
componentDidMount(){
  fetch("https://reqres.in/api/users")
  .then(resp => resp.json())
  .then((result)=>{
    console.log(result);
    this.setState({users:result.data});
  })
}
render(){
  return(
    <div align = 'center'>
    <h1 align = "center"><u>Fetched Data</u></h1>
      {
        this.state.users ? this.state.users.map((item, no) => 
        <div key = {no} align = "center" className = 'container'>
          <p>
    
            <img src = {item.avatar} alt = ""/><br/>
            <strong>{item.first_name}{" "}{item.last_name}</strong><br/><br/>
            <strong><label>Email: </label></strong>{item.email}

          </p>          
        </div>): ''
      }
    </div>
  );  
}
}

export default App;
