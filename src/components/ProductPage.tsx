import axios from "axios";
import { useState,  useEffect } from "react";
import { Get } from "./Axiosoperations";
import url from "../Images/stockphoto.jpg"
import { productProps } from "./Types";
import { User } from "./Types";
//import { loginContext, userContext } from "./usecontext";
import { useNavigate } from "react-router-dom";

export const Productpage = () => {
  const navigate = useNavigate();
  const [responsedata, setresponsedata] = useState<productProps[] | null>(null);
  const getresponse = async () => {
    try{
      const response = await Get(
        "https://test-furn.herokuapp.com/item/items/?_limit=2"
      );
      setresponsedata(response?.data);
    }catch(err){
      console.log(err);
    }
    
    
    
    
    // console.log(responsedata);
  };
  
  const [data,setdata]=useState<User| null>(null)
  //const logg=useContext(loginContext) 
  useEffect(()=>{
     const user=window.localStorage.getItem("Data")
    if(user){
   setdata(JSON.parse(user))
   
     }
     
     
  },[]) 
  
  
  

  
  //console.log(token)

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${data?.token}`,
      "Access-Control-Allow-Origin": "*",
    }
  };

  const postdata = async (id: number) => {
    try {
      const response = await axios.post(
        `https://test-furn.herokuapp.com/item/itemSelect/${id}`,
        {},
        config
      );
      alert("Item successfully added")
      console.log(response);
    } catch (err) {}
  };
  useEffect(() => {
    getresponse()
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row gy-0">
          {responsedata ? (
            responsedata.map((element) => (
              <div className="col-6 col-lg-3 " key={element.id}>
                <div style={{ height: "400px" }}>
                  <div className="h-50 border" style={{background:`linear-gradient( rgba(0,0,0,0.7), rgba(0,0,0, 0.7)) , url(${url}) center `}}></div>
                  <div className="row">
                    <div className="col-12">
                      <span>{element.itemName}</span>
                    </div>
                    <div className="col-12">
                      <span>#{element.itemPrice}</span>
                    </div>
                    <div className="col-12">
                      <span className="text-muted">
                        {element.itemDescription}
                      </span>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={async () => {
                            data
                            ? await postdata(element.id)
                              : navigate("/login");
                          }}
                          style={{ backgroundColor: "#F66B0E" }}
                          className="w-50 text-white btn btn"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};
