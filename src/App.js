import React, { Component } from 'react';
// import logo from './logo.svg';
import Persons from './components/Persons/Persons'
import MyHeader from './components/Header/Header'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      persons:[
        {id:1,name:'mis wu',count:50},
        {id:2,name:'george',count:30},
        {id:3,name:'hunery',count:22},
        {id:4,name:'ada',count:11},
      ],
      showPersons: false
    }
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

    let PersonsTag = <Persons 
    persons = {this.state.persons}
    clicked = {this.deletePersonHandler}
    changed = {this.nameChangeHandler}
    />
    return (
      <div className="App">
        <MyHeader
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons} 
          togglePerspons = {this.togglePerspons} 
          persons = {this.state.persons}
        />
        { this.state.showPersons && PersonsTag }
      </div>
    );
  }
}

export default App;
