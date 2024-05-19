// Types of component

import { useEffect, useState } from "react";
import Login from "./login";
import Register from "./register";
import FirstClass from "./classcomp";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import AppClass from "./appclass";
import { First } from "./components/first";
import CommonComp from "./components/hoc/common";

// Function component
// Class component

// React Fragment ===> <></>
// {}===>interpolation
// Conditional rendering===> based on condition we are deciding the component to show in screen
// Props == values passing from parent to child
// hooks ==> it is an predefined functions that start with use keyword

// life cycle methods
// componentdidMount == >mounting phase
// componentdidupdate ===> update phase
//componentwillunmount == >unmounting or removing phase


function RountingComp(){
  let navigate = useNavigate()
  const handlenavigate=(path)=>{
    navigate(path)
  }

  return (
    <>
      Click to Navigate
      <ul style={{cursor:"pointer"}}>
        <li onClick={()=>handlenavigate("/login")}>Login</li>
        <li onClick={()=>handlenavigate("/register")}>Register</li>
        <li onClick={()=>handlenavigate("/classone")}>Class one </li>
        <li onClick={()=>handlenavigate("/classfirst")}>Class First</li>
        <li onClick={()=>handlenavigate("/first")}>Class First</li>
        <li onClick={()=>handlenavigate("/common")}>CommonComp</li>
      </ul>
    </>
  )
}

function App() {
  //js code
  // state
  let name = "Raj";
  // leet count = 0
  const [count, updateCount] = useState(3);
  const [age, setAge] = useState(25);
  const [toggle, setToggle] = useState(false);
  let data = ["Rakesh", "Ragu", "Raj", "Ram"];
  
  return (
    // html code
    <BrowserRouter>
     <RountingComp/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/classone" element={<AppClass/>}/>
        <Route path="/classfirst" element={<FirstClass/>}/>
        <Route path="/first" element={<First/>}/>
        <Route path="/common" element={<CommonComp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
