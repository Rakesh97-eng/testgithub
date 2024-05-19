import { Fourth } from "./four"

export const Third = (props)=>{
    return(
        <>
        <h1>This is third comp</h1>
        <Fourth thirdvalue={props.secondvalue}/>
        </>
    )
}
