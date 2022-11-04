// import axios from "axios";
import React from "react";

const APIhandle = ()=>{
   //by using axios
//    function APIByAxios(){
//   axios.get("https://jsonplaceholder.typicode.com/customers")
//   .then(data => console.log(data.data))
//   .catch(error => console.log(error));
//    }

   async function APIbyFetch(){
     let url = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-04&sortBy=publishedAt&apiKey=a7cc2aafcf3447dcb49481b0367c6607"
     let result = await fetch(url);
     let data = await result.json();
     console.log(data);
   }
   
   return(
    <div>
    {/* {APIByAxios()} */}
     
    {APIbyFetch()}

    </div>
   )
}

export default APIhandle;