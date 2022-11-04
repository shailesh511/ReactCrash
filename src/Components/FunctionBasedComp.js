import React, { useEffect, useState } from "react";


//lifecycle methods replaced by useEffect hook

const FunctionBasedComp = ()=>{
  const [ count, setCount ] = useState(0);

    useEffect(()=>{
      console.log("component updated")
      return ()=>{
         console.log("component unmount....");
      }
    },[count])
   return(
     <button onClick={()=>{setCount(count+1)}}>update component</button>
   )
}

export default FunctionBasedComp;