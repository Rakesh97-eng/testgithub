import axios from "axios";
import React, { useEffect, useState } from "react";

const Register = (props)=>{
    // { parentvalue:1}
    const {parentvalue,parentfunction} = props;
    const [apidata,setApidata] = useState([])
    // useEffect(()=>{
    //     axios.post('https://jsonplaceholder.typicode.com/posts',{id:"101"}).then((a)=>setApidata(a.data)).catch((err)=>console.log("err",err))
    // },[])
    console.log("child rendering");
    return (
        <>
        <h2>Register Screen</h2>
        <span>Value from parent:{parentvalue}</span>
        <button onClick={parentfunction}>Propincrease</button>
        {/* {apidata.map((data)=>{
          return  <div>
                {data.id}
            </div>
        })} */}
        </>
    )
}

export default React.memo(Register);

// pure components
// The component should update or renders only when its own state changes or props changed 
// higher order components
