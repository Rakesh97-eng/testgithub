import { useState } from "react"

const HocComp = (OriginalComp)=>{
    const Newcomp = ()=>{
        const [clicked,setClicked] =useState(0)
        const handleClick = ()=>{
            setClicked(clicked+1)
        }

        return <OriginalComp statevalue={clicked} updateFun = {handleClick}/>
    }

    return Newcomp
}

export default HocComp
