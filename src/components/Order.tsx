import { useState,useEffect } from "react"
import { Col,Row } from "react-bootstrap";
import axios from "axios";
import { User } from "./Types";
import {ordertype} from "./Types"
import Spinner from 'react-bootstrap/Spinner';
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
           <Row className="p-3">
                {order && order.map((element)=>(
                    <Col key={element.orderedItemId} lg={12} className="mb-3 rounded border d-flex">
                        <div className="w-25">
                         <span>Hello</span>
                        </div>
                        <div className="p-2 d-flex flex-column pb-3  w-75">
                            <span className="mb-1">{element.itemName}</span>
                            <span className="mb-3 text-muted">Order {element.orderedItemId}</span>
                            {element.hasBeenDelivered ? <span>Delivered</span> : <span className="w-25 rounded text-center text-white bg-warning">PENDING</span>}
                        </div>
                    </Col>
                ))}
           </Row>
        </Col>
        </> : <div className="pt-5 text-center"><Spinner animation="border"/></div>
              }
      
        </>
    )
}