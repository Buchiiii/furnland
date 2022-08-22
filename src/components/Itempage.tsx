import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export const Itempage=()=>{
    const {id} = useParams()
    const getItem=async()=>{
        try{
            const response =await axios.get(`https://test-furn.herokuapp.com/item/items/${id}`);
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getItem();
    })
    return(
        <>
        <div>
           Hello
        </div>
        </>

    )
}