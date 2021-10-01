import React, { Component } from 'react';
class App extends React.Component {
 componentDidMount(check) {
     check =  setInterval(() => {
         
     }, 1000);

  }
trick(){
this.setState({
  date : Date.now()
})
    }
  constructor() {
    super();
    this.state = {
         name : "Harish",
         Programm : "BCA"
    };
  }
    render() {
        const name = this.state.name;
        console.log('name',name);
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>My Name {name}</h2>
        <h1> check {this.check}</h1> 
      </div>
    );
  }
}
export default App;