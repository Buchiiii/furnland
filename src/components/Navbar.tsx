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
            <Navbar.Toggle className="border float-right border-danger"/>
           
           
           
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                <Nav  navbarScroll>
                    <Nav.Link ><Link className="pe-4 nav-link" to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link className="pe-4 nav-link" to="/">Services</Link></Nav.Link>
                    <Nav.Link><Link className="pe-4 nav-link" to="/products">Products</Link></Nav.Link>
                    <Nav.Link><Link className="pe-4 nav-link" to="/">Testimonials</Link></Nav.Link>
                    {data ?
                    <NavDropdown className="pe-4 nav-link" title={data.email} id="navbardropdown">
                        <NavDropdown.Item><Link className="text-center nav-link" to="/">My profile</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="text-center nav-link" to="/">My order</Link></NavDropdown.Item>
                        <NavDropdown.Item><button type="button" className="btn w-100 btn-danger" onClick={()=>{
                            window.localStorage.clear();
                            window.location.reload();
                            
                            navigate("/")
                        }}>Logout</button></NavDropdown.Item>
                    </NavDropdown>: 
                    <div className="w-100 d-lg-flex"><Nav.Link> <Link style={{ backgroundColor: "#F66B0E"}}className="text-white nav-link btn btn-sm w-100" to="/login">Login</Link></Nav.Link><Nav.Link> <Link style={{ backgroundColor: "#F66B0E"}}className="text-white nav-link btn btn-sm w-100" to="/register">Register</Link></Nav.Link></div>}

                </Nav>
            </Navbar.Collapse>
            <Nav >
     <Nav.Link>
        <button type="button" onClick={()=>{
            if(data){
                navigate("/cart")
            }
            else{
                navigate("/login")
            }
        }} className="btn btn-sm p-0"><span style={{color:"#F66B0E",fontSize:"20px"}}><i className="bi bi-cart"></i> Cart</span></button>
        </Nav.Link>
 </Nav>
            </Container>
        </Navbar>
        </>
    )
}