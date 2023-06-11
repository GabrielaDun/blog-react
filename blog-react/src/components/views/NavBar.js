import { NavLink } from "react-router-dom";
import { Nav, Navbar, Col } from "react-bootstrap";


const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded text-white">
                    <Col className=" m-4"><p>blog.app</p></Col>
                    <Col xs={3}></Col>
                    <Col>
                        <Nav className="m-1">
                            <Nav.Link  as={NavLink} className="" to="/">Home</Nav.Link>
                            <Nav.Link  as={NavLink} to="/about">About</Nav.Link>
                        </Nav> 
                    </Col>
            </Navbar>
        </div>

    )
}

export default NavBar;