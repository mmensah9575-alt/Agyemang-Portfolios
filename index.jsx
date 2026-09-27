import React from "react"; { useState } from "react"; 

function counter(){
  const  [name, setName] =useState("GUEST");
  const updateName = ()=>{
    setName("Mcihael") 
  }



  const updateAge =() =>{
    setAge(age + 1) ;
  }

  const resetAge= ()=>(
    setAge(0)
  ) 
  const decrementAge =()=>{
    setAge(age-1)
  }
  
  const [age,setAge]=useSate(0)
  return(
  <>
  
  <p>NAME: {name}</p>
  <button onClick={updateName}> set NAME</button>


  <p> Age; {age}</p>
  <button onClick={updateAge}> set AGE</button>
 
 <p> Age; {age}</p>
  <button onClick={resetAge}> Reset</button>  
  
  <p> Age; {age}</p>
  <button onClick={decrementAge}>Decrese Age</button>  
  
  
  </>

  )



}

export default counter 