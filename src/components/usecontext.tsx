import { createContext, useEffect, useState } from "react"
import { User,Themecontext } from "./Types";

type usecontext={
    user: User | null,
    setuser:React.Dispatch<React.SetStateAction<User | null>>
}
type loginnn ={
    loggedin: boolean,
    setloggedin : React.Dispatch<React.SetStateAction<boolean>>
}
export const loginContext=createContext<loginnn>({} as loginnn)
export const userContext =createContext<usecontext | null>(null);

export const ThemeContext=({children}:Themecontext)=>{
    const [user,setuser]=useState<User | null >(null);
    const [loggedin,setloggedin]=useState(false)

    useEffect(()=>{
        window.localStorage.setItem("logged",JSON.stringify(loggedin))
    },[loggedin])

    
     useEffect(()=>{
            user &&  user.token && window.localStorage.setItem("token", user.token)
           },[user])

   
   
   
    return (
        <loginContext.Provider value={{loggedin,setloggedin}}>
            <userContext.Provider value={{user,setuser}}>
            {children}
        </userContext.Provider>
        </loginContext.Provider>
    )
}