import React from 'react';
// import './index.css';
import Person from '../Person/Person'


const Persons = (props) => {
  
  props.persons.map((item, index)=>{
    return <Person 
    myClick={()=>{props.clicked(index)}}
    changed = {(event)=>{props.changed(event,item.id)}}
    name = {item.name} 
    key={item.id} 
    count = {item.count} />
  })
  console.log(props)
}
export default Persons;