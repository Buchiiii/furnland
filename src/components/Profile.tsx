import { Container, Row, Col ,Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom"
import {Account} from "../components/Account";
import {useState} from "react"

export const Profile = () => {
  const [account,setaccount]=useState(true)
 
  return (
    <>
      <div className="bg-light">
        <Container>
          <Row className="pt-4 pb-5">
            <Col className="bg-white shadow " lg={3}>
              <Navbar>
                <Nav className="d-inline  w-100">
                  
                  <Nav.Link className="border-bottom"><Link className="text-decoration-none text-dark"  to="/"><span className="me-2"><i className="bi bi-person-circle"></i></span>My Furnland Account</Link></Nav.Link>
                  
                  
                  <Nav.Link><Link className="text-decoration-none text-dark" to="/">Order</Link></Nav.Link>
                </Nav>
              </Navbar>
            </Col>
            <Col
              className="bg-white shadow ms-lg-2 border pb-3 border-white rounded "
              lg={8}
            >
              {account ? <Account/> : null }
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
