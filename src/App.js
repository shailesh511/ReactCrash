import React, { Component } from 'react';
import { useState } from 'react';
import ChildToParentProp from './Components/ChildToParentProp';
import APIhandle from './Components/APIhandle';

const App = () =>{
  const [color, setColor] = useState(null)
   
  const change = (color)=>{
    setColor(color);
  }
 
  return(
    <div>
        <h1 style={{backgroundColor:`${color}`}}>hiii</h1>
        <ChildToParentProp change={change}/>
        <APIhandle/>
        
        {/* <HookInFunctionBased/>
        <LifeCycleMethods/>
        <ContextAPIEg/> */}
    </div>
  )
}

export default App;
