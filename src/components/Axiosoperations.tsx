import axios from 'axios';
//import { useEffect, useState } from 'react'

 export const Get=async (urll:string)=>{
   // const [loading,isloading]=useState(true) 
    //const [lo]
            
            try{
                const response=await axios.get(urll);
                //isloading(false)
                console.log(response);
                return response;

            }catch(err){
                console.log(err);
            }
        }
 
  
  

