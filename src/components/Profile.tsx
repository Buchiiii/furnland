import { Container, Row, Col ,Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom"
import {Account} from "../components/Account";
import {Order} from "../components/Order";
import {useState,useEffect} from "react"
import { User } from "./Types";

export const Profile = () => {
  const [account,setaccount]=useState(true)
  const [order,setorder]=useState(false)
  const[vendor,setvendor]=useState(false)
  const [data, setdata] = useState<User | null>(null);

  const role=data?.role
  
  useEffect(() => {
    const dataa = window.localStorage.getItem("Data");
    if (dataa) {
      setdata(JSON.parse(dataa));
    }

    
  }, []);
 
  return (
    <>
      <div className="bg-light">
        <Container>
          <Row className="pt-4 pb-5">
            <Col className="bg-white shadow " lg={3}>
              <Navbar>
                <Nav className="d-inline  w-100">
                  
                  <Nav.Link onClick={()=> {
                    setaccount(true)
                    setorder(false)
                    setvendor(false)}} className="border-bottom"><span className="me-2"><i className="bi bi-person-circle"></i></span>My Furnland Account</Nav.Link>
                  
                  
                  <Nav.Link onClick={()=>{
                    setorder(true);
                    setaccount(false)
                    setvendor(false)
                  }}><span className="me-2"><i className="bi bi-box2"></i></span>Order</Nav.Link>

                  {data && role === 2 ? <Nav.Link onClick={()=>{
                    setorder(false);
                    setaccount(false)
                    setvendor(true)
                  }}><span className="me-2"><i className="bi bi-box2"></i></span>Vendor</Nav.Link>
                :null}
                </Nav>
              </Navbar>
            </Col>
            <Col
              className="bg-white shadow ms-lg-2 border pb-3 border-white rounded "
              lg={8}
            >
              {account ? <Account/> : null }
              {order ? <Order/> : null}
              {}
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
