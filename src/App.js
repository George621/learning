import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from './components/Person/Person'
import './App.css';

class App extends Component{
  state = {
    persons:[
      {name:'mis wu',count:50},
      {name:'george',count:30},
      {name:'hunery',count:22},
      {name:'ada',count:11},
    ],
    showPersons: false
  }
  switchHandler = (c) => {
    this.setState({
      persons:[
        {name:c,count:50},
        {name:'georges',count:320},
        {name:'hunery',count:221},
        {name:'ada',count:111},
      ]
    })
  }
  nameChangeHandler = (event) => {
    let newval =  event.target.value
    this.setState({
      persons:[
        {name: newval,count:50},
        {name: 'georges',count:320},
        {name: 'hunery',count:221},
        {name: 'ada',count:111},
      ]
    })
  }
  togglePerspons = () =>{
    let showP = this.state.showPersons;
    console.log(showP)
    this.setState({
      persons:[
        {name: 'newval',count:50},
        {name: 'georges',count:320},
        {name: 'hunery',count:221},
        {name: 'ada',count:111},
      ],
      showPersons: !showP
    })
  }
  render(){
    let persons =  this.state.persons;
    let personRender = persons.map((item, index)=>{
      return <Person changed = {this.nameChangeHandler} name = {item.name} key={index} count = {item.count} />
    })
    return (
      <div className="App">
        <span>testing</span>
        {/* <button onClick = {()=>{this.switchHandler('ccc')}}>changes</button> */}
        <button onClick = {this.togglePerspons}>changes</button>
        {this.state.showPersons ? personRender :null }
       
        
      </div>
    );
  }
}

export default App;
