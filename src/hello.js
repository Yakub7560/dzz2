import { React, useState } from 'react';


function Hello(){

   const[counter,setcounter]=useState(0);


   const Times=()=>{
      setcounter(prevcounter=>prevcounter+1);

   }

   return(
      <div>
      <h3>Hello, World</h3>
      <button onClick={Times}>Click me</button>
      <p>I have been clicked {counter} times</p>
      </div>
   )
}

export default Hello;