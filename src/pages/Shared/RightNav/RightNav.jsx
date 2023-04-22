import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div className='mb-4'>
            <Button variant="outline-success" className='mb-1 w-100'> <FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary" className='w-100'> <FaGithub/> Login with github</Button>
            </div>
            <div>
                <h4>Find Us On</h4>
                 <ListGroup >
                <ListGroup.Item  className='p-3'> <FaFacebook></FaFacebook> facebook </ListGroup.Item>
                <ListGroup.Item  className='p-3'> <FaTwitter></FaTwitter> twitter</ListGroup.Item>
                <ListGroup.Item  className='p-3'>  <FaInstagram></FaInstagram>Instagram </ListGroup.Item>
                </ListGroup>
            </div>

                <QZone></QZone>

            <div className='position-relative'>
                <img  src={bg} alt="" />
                <div  className='position-absolute top-0 py-5 px-5 text-white text-center'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p className='py-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger rounded-0" >Learn More</Button>
                </div>
            </div>
           
        </div>
    );
};

export default RightNav;