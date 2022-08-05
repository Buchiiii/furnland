import { Row, Container, Col } from "react-bootstrap";
import { User } from "./Types";
import { useState, useEffect } from "react";
import { productProps } from "./Types";
import axios from "axios";
export const Cart = () => {
  const [data, setdata] = useState<User | null>(null);
  const [responsedata, setresponsedata] = useState<productProps[] | null>(null);

  const config = {
    headers: {
      Authorization: `Bearer ${data?.token}`,
    },
  };

  const gett = async () => {
    try {
        const response = await axios.get(
          "https://test-furn.herokuapp.com/users/cart",
          config
        );
        console.log(response.data);
        setresponsedata(response.data.selectedItems);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const user = window.localStorage.getItem("Data");
    if (user) {
      setdata(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
   if (data){
    gett();
   }
    
  },[data]);

  return (
    <div>
      {/*  */}
      <Container className="border">
      <Row>
      <Col xs={12} lg={7}>
      {responsedata? (responsedata.map((element)=>(
        <Row className="mt-5 " key={element.id}> 
      <Col lg={2}>
        <div>
            
        </div>
      </Col>
      <Col className="border" lg={8}>
            <div>
                {element.itemName}

            </div>                                    
      </Col>
      <Col lg={2}>
        <div className="text-end">
        {element.itemPrice}
        </div>
        
      </Col>
      </Row>
 
      ))):(<p>Loading</p>)} 
     </Col> 
      </Row>
      </Container>
    </div>
  );
};
