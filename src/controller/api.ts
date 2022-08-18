import axios from "axios";
import {useState} from "react"

export const Api=()=>{
    const[token,settoken]=useState<string|null>(null)
    const data = window.localStorage.getItem("Data");
    settoken(JSON.parse(data as string).token)
}


