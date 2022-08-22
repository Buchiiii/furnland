import{Row,Col} from "react-bootstrap"
import { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { User } from "./Types";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState<User | null>(null);
  //const logg=useContext(loginContext)
  useEffect(() => {
    const user = window.localStorage.getItem("Data");
    if (user) {
      setdata(JSON.parse(user));
    }
  }, []);

  console.log(data);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle className="" />
          <Navbar.Brand className="">
            <Link style={{ textDecoration: "none", color: "#054C73" }} to="/">
              <h1>Furnland</h1>
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse className="pt-2" id="navbarScroll">
          <Nav className="w-100" navbarScroll>
            <div className=" w-100">
              <Row>
                  <Col xs={9} lg={10}>
                  <input className="form-control"></input>
                  </Col>
                  <Col lg={2}>
                  <button className="btn  btn-outline-primary">Search</button>
                  </Col>
              </Row>
              
              
</div>
            </Nav>
            <Nav className="" navbarScroll>
              
              <Nav.Link>
                <Link className="pe-4 nav-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link className="pe-4 nav-link" to="/">
                  Services
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link className="pe-4 nav-link" to="/products">
                  Products
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link className="pe-4 nav-link" to="/">
                  Testimonials
                </Link>
              </Nav.Link> */}
              {data ? (
                <NavDropdown
                  className="pe-4 nav-link"
                  title={data.email}
                  id="navbardropdown"
                >
                  <NavDropdown.Item>
                    <Link className=" text-center  ps-1 nav-link" to="/profile">
                      <span className="me-2">
                        <i className="bi bi-person-circle"></i>
                      </span>
                      My profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="text-center  nav-link" to="/">
                      <span className="me-2">
                        <i className="bi bi-box2"></i>
                      </span>
                      My order
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <button
                      type="button"
                      className="btn w-100 btn-danger"
                      onClick={() => {
                        navigate("/");
                        window.localStorage.clear();
                        window.location.reload();

                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (<NavDropdown
                className="pe-4 nav-link"
                title="Account"
                id="navbardropdown"
              >
                <NavDropdown.Item>
                    <button
                      type="button"
                      style={{ backgroundColor: "#F66B0E"}}
                      className="btn text-white w-100"
                      onClick={() => {
                      
                        

                        navigate("/login");
                      }}
                    >
                      Sign in
                    </button>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        

                        <p>New customer?</p>
                    <Link className="" to="/register">
                      
                      Register
                    </Link>
                    </NavDropdown.Item>

</NavDropdown>
                
              )}
            </Nav>
          </Navbar.Collapse>
          {data && data.role === 1 ? 
          <Nav>
            <Nav.Link>
            
              <button
                type="button"
                onClick={() => {
                  if (data) {
                    navigate("/cart");
                  } else {
                    navigate("/login");
                  }
                }}
                className="btn btn-sm p-0"
              >
                <span style={{ color: "#F66B0E", fontSize: "20px" }}>
                  <i className="bi bi-cart"></i> Cart
                </span>
              </button>
              
            </Nav.Link>
            
          </Nav>
          : null}
        </Container>
      </Navbar>
    </>
  );
};
