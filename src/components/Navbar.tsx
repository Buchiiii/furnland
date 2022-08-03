import { useState,useEffect } from "react";
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom';

import {User} from "./Types"



export const NavbarComponent=()=>{
    
const navigate=useNavigate();
   const [data,setdata]=useState<User| null>(null)
 //const logg=useContext(loginContext) 
 useEffect(()=>{
    const user=window.localStorage.getItem("Data")
   if(user){
  setdata(JSON.parse(user))
  
    }
    
    
 },[])

 console.log(data) 
 







    return(
        <>
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand>
                <div className="navbar-brand">
                <Link style={{textDecoration:"none",color: "#054C73"}}  to="/"><h1>Furnland</h1></Link>
                </div>
                
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                <Nav  navbarScroll>
                    <Nav.Link ><Link className="pe-4 nav-link" to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link className="pe-4 nav-link" to="/">Services</Link></Nav.Link>
                    <Nav.Link><Link className="pe-4 nav-link" to="/">Products</Link></Nav.Link>
                    <Nav.Link><Link className="pe-4 nav-link" to="/">Testimonials</Link></Nav.Link>
                    <NavDropdown className="pe-4 nav-link" title="Account" id="navbardropdown">
                      {data ?<NavDropdown.Item><p className="text-center">{data.email}</p></NavDropdown.Item> : <NavDropdown.Item> <Link style={{ backgroundColor: "#F66B0E"}}className="text-white nav-link btn w-100" to="/login">Login</Link></NavDropdown.Item>}
                        <NavDropdown.Item><Link className="text-center nav-link" to="/">My profile</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="text-center nav-link" to="/">My order</Link></NavDropdown.Item>
                        {data ? <NavDropdown.Item><button type="button" onClick={()=>{
                            window.localStorage.clear();
                            window.location.reload();
                            
                            navigate("/")
                        }}>Logout</button></NavDropdown.Item>:null}
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}