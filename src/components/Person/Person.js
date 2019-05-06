import React from 'react';
import './index.css';

const person = (props) => {
  return <div>
    <p onClick = {props.myClick} className="Person">大家好我是{props.name} 我的作品{props.count}</p>
    <p>{props.children}</p>
   {/* 双向绑定 next */}
    <input onChange = {props.changed} type="text" defaultValue = {props.name}/>
  </div>
}
export default person;