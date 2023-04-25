import React, {useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
 
const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container className='mb-5'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='mb-0'><small>Journalism Without Fear or Favour</small></p>
                <p> {moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex text-white bg-secondary p-2 mb-2'>
            <Button className='rounded-0 me-2' variant="danger">Danger</Button>
                <Marquee speed={50} pauseOnHover='true'>
                I can be a React component, multiple React components, or just some text......I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar className='p-0' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">
                            <Link to={'/'}>Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        { user && <Nav.Link href="#deets"> <FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle> </Nav.Link>}
                        <Nav.Link eventKey={2} href="#memes">
                       { user ?
                        <Button className='rounded-0 ' variant="secondary">LogOut</Button> :
                        <Link to='/login'><Button className='rounded-0 ' variant="secondary">Login</Button></Link>
                        }
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                    </Container>
    );
};

export default Header;