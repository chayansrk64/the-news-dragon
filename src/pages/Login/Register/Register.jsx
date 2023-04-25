import React from 'react';
import { Button, Container, Form  } from "react-bootstrap";
import { Link } from "react-router-dom";
 
const Register = () => {
    return (
        <Container className="w-25 mx-auto">
        <h2 className="text-center mb-4">Please Register</h2>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Enter URL" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="accept" label="Account terms and conditions" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register
      </Button> <br />
        <Form.Text className="text-danger">
         Already have an Account? <Link to='/login'>Login</Link>
        </Form.Text> <br />
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> <br />
      <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
    </Container>
    );
};

export default Register;