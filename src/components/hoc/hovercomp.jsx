import { useState } from "react";
import HocComp from "./hoc";

const HoverComp = ({statevalue,updateFun})=>{
 
    return(
         <>
         The No of time Hoved :{statevalue}
         <button onMouseOver={updateFun}>Click</button>
        </>
    )
}

export default HocComp(HoverComp);