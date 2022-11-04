import React from "react";
import Dummy from "./Dummy";

class ClassBasedComp extends React.Component{
    constructor(props)//it will have all the states initialized
    {
        super(props);
        this.state ={
          name:"Shailesh",
          age: 18,
          displayComp: true
       }
    }
    
    async componentDidMount (){
         console.log("Componend Mounted........")
    }

    async componentDidUpdate (){
        console.log("Componend updated........")
    }

    async componentWillUnmount (){
        console.log("Componend unmounted......")
    }
        render(){
          let comp
            if(this.state.displayComp)
          {
             comp = <Dummy/>
          }

              return(  
                    <div>

                        {comp}
                        <h1>
                            name is {this.state.name} and age is {this.state.age} &  {this.props.activity}
                        </h1>
                        <button onClick={()=>{this.setState({age:19})}}>Component update button</button>
                        <button onClick={()=>{this.setState({displayComp:false})}}>Component Unmount Button</button>
                    </div>
           )
        }
}
export default ClassBasedComp;