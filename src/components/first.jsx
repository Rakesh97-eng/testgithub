import { useContext, useEffect, useState } from "react"
import { Second } from "./second"
import { useDispatch, useSelector } from "react-redux"
import { updateRole } from "../redux/slice/userSlice"
import { Themecontext } from "../context/themecontext"
import { Third } from "./third"

export const First = ()=>{
    const [data,setData] = useState({})
    const userdata = useSelector((state)=>state)
    const {usertheme,updatetheme} = useContext(Themecontext)
    
    console.log("userData",userdata);
    const dispatch = useDispatch();
    const updateRoles = ()=>{
        dispatch( updateRole(["0","1"]))
    }

    useEffect(()=>{
        if(usertheme){
            document.body.style.backgroundColor = "red"
            document.body.style.color = "white"
        }
        else{
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    },[usertheme])

    return(
        <>
        <h1>Welcom to first comp {userdata.age}</h1>
        <button onClick={updateRoles}>Update</button>
        <button onClick={()=>updatetheme(!usertheme)}>ChangeTheme</button>
        <Second firstvalue = {data}>
            <Third></Third>
            </Second>
        </>
    )
}

// State management
// Redux toolkit =>third party 
// Context api =>react

