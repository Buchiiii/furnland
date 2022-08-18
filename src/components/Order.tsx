import { useState,useEffect } from "react"
import { Col } from "react-bootstrap";
import axios from "axios";
import { User } from "./Types";
import {ordertype} from "./Types"
//import API from "../controller/api"
export const Order=()=>{
    const [order,setorder]=useState<ordertype[] | null>(null);
    const [data, setdata] = useState<User | null>(null);
     
    const config={
        headers:{
            Authorization:`Bearer ${data?.token}`
        }
       }
    const getorder=async()=>{

       try{
        const response = await axios.get("https://test-furn.herokuapp.com/order/myOrders",config)
        setorder(response.data)
        console.log(response.data)
        console.log(order)
       }catch(err){
            console.log(err)
       }
    }

    useEffect(() => {
        const dataa = window.localStorage.getItem("Data");
        if (dataa) {
          setdata(JSON.parse(dataa));
        }
      }, []);

    useEffect(()=>{
        if(data){
            getorder()
        }
        
    },[data])
    
    return(
        <>
        {order ?<>
        <Col>
           
        </Col>
        </> : <p>Loading</p>}
      
        </>
    )
}