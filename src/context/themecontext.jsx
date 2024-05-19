import { createContext, useState } from "react";

export const Themecontext = createContext();

const ThemecontextProvider = ({children})=>{
    console.log("childere",children);
    const [theme,setTheme] = useState(false)
    
    return (
        <Themecontext.Provider value={{usertheme:theme,updatetheme:setTheme}}>
            {children}
        </Themecontext.Provider>
    )
}

export default ThemecontextProvider;