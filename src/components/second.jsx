import { Third } from "./third"

export const Second = (props)=>{
    console.log("propssendonc",props);
    return(
        <>
        <h1>This is second comp</h1>
        <Third secondvalue = {props.firstvalue}/>
        </>
    )
}
