import { useContext } from "react";
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { loginContext } from "./usecontext";



export const NavbarComponent=()=>{
   const logg=useContext(loginContext) 
   console.log(logg)
    return(
        <>
        <Navbar>
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
                        <NavDropdown.Item> <Link style={{ backgroundColor: "#F66B0E"}}className="text-white nav-link btn w-100" to="/login">Login</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="text-center nav-link" to="/">My profile</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className="text-center nav-link" to="/">My order</Link></NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}