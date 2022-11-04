import React from "react";

class ClassBasedComp extends React.Component{
    constructor(props)//it will have all the states initialized
    {
        super(props);
        this.state ={
          name:"Shailesh",
          age: 18
       }
    }
        render(){
              return(  
                    <div>
                        <h1>
                            name is {this.state.name} and age is {this.state.age} &  {this.props.activity}
                        </h1>
                    </div>
           )
        }
}
export default ClassBasedComp;