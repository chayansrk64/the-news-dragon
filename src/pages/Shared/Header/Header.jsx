import React, {useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../providers/AuthProvider';

 
const Header = () => {
   
    return (
        <Container>
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
         </Container>
    );
};

export default Header;