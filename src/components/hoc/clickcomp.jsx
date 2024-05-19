import { useState } from "react";
import HocComp from "./hoc";

const ClickComp = ({statevalue,updateFun})=>{
    return(
         <>
         The No of time Clicked :{statevalue}
         <button onClick={updateFun}>Click</button>
        </>
    )
}

export default HocComp(ClickComp);


// hoc ==> higher order components
// higher order components is a component that
//  takes another component as a props and return a new component
// To create a reusable components