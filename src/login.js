import { useEffect, useState,useCallback } from "react";
import Register from "./register";

const Login = (props)=>{
  const [count,setCount] = useState(0);
  const [childcount,setChildCount] = useState(1)
  
  useEffect(()=>{
    document.body.style.background = "yellow"
  },[])

  useEffect(()=>{
   return ()=>{
    document.body.style.background = "blue"
      console.log( "This is unmounting login");
    }
  },[])

  const increasecount = ()=>{
    setCount(count+2)
  }

  const increasechildcount =useCallback(()=>{
    setChildCount(childcount+1)
  },[childcount])
  
    return(
        <>
       <p>Login screen Count--{count}</p>
       <h1>This is count value:{props.value}</h1>
        <button onClick={increasecount}>Increase parent count</button>
        {/* <button onClick={increasechildcount}>Increase child count</button> */}
        <Register parentvalue={childcount} parentfunction={increasechildcount} />
        </>
       
    )
}

export default Login;

// Hooks ==>predefined function for react library
// controlled components
// useState
// useEffect == >To achieve life cycles in function components