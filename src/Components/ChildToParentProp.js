import React, { useState } from "react";

const ChildToParentProp = (props) =>{
    const [text, setText]=useState("");
    const handleChange =(e)=>{
      const {value} = e.target;
      setText(value);
      props.change(value)
    }

   return(
     <input type="text" onChange={handleChange} value={text}></input>
   )
}

export default ChildToParentProp;