import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from './components/Person/Person'
import './App.css';

class App extends Component{
  state = {
    persons:[
      {id:1,name:'mis wu',count:50},
      {id:2,name:'george',count:30},
      {id:3,name:'hunery',count:22},
      {id:4,name:'ada',count:11},
    ],
    showPersons: false
  }
  switchHandler = (c) => {
    this.setState({
      persons:[
      {id:1,name:'mis wu',count:50},
      {id:2,name:'george',count:30},
      {id:3,name:'hunery',count:22},
      {id:4,name:'ada',count:11},
      ]
    })
  }
  nameChangeHandler = (event,id) => {
    let newval =  event.target.value;
    let getPersons = this.state.persons;
    const personIndex = getPersons.findIndex((p)=>{
      return p.id === id
    })
    const person = {
      ...getPersons[personIndex]
    }
    person.name = newval;
    const persons = [...getPersons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }
  togglePerspons = () =>{
    let showP = this.state.showPersons;
    this.setState({
      persons:[
        {id:1,name:'mis wu',count:50},
        {id:2,name:'george',count:30},
        {id:3,name:'hunery',count:22},
        {id:4,name:'ada',count:11},
      ],
      showPersons: !showP
    })
  }
  deletePersonHandler = (personIndex)=>{
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({
      persons: persons
    })
  }
  render(){
    let persons =  this.state.persons;
    let personRender = persons.map((item, index)=>{
      return <Person 
      myClick={this.deletePersonHandler.bind(this,index)}
      changed = {(event)=>{this.nameChangeHandler(event,item.id)}}
      name = {item.name} 
      key={item.id} 
      count = {item.count} />
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
