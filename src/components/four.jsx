import { useSelector } from "react-redux"
import { userSlice } from "../redux/slice/userSlice"

export const Fourth = (props)=>{

    const data = useSelector((state)=>state)
    
    return(
       <>
       <div>Hi this is  fourth component</div>

       <h2>The props value {props.thirdvalue.name}</h2>
       </>
    )
}
