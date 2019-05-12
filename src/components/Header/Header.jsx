import React from 'react';
import './index.css';
// import Person from './Person/Person'

const MyHeader = (props) => {
  let classes = []
    if( props.persons.length <= 2 ){
      classes.push('red')
    }
    if( props.persons.length <= 1 ){
      classes.push('blod')
    }
  return <div className='Header'>
    <span>{props.appTitle}</span>
    <p className={classes.join(' ')}>hello react app</p>
    <button className={props.showPersons? 'blod' : ''} onClick = {props.togglePerspons}>changes</button>
  </div>
}


export default MyHeader;
        