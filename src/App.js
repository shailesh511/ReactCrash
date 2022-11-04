import React, { Component } from 'react';
import { useState } from 'react';
import ChildToParentProp from './Components/ChildToParentProp';

const App = () =>{
  const [color, setColor] = useState(null)
   
  const change = (color)=>{
    setColor(color);
  }
 
  return(
    <div>
    <h1 style={{backgroundColor:`${color}`}}>hiii</h1>
    <ChildToParentProp change={change}/>
    </div>
  )
}

export default App;
