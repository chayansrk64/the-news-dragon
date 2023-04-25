import React from "react";
import { Button, Container, Form  } from "react-bootstrap";
import { Link } from "react-router-dom";
 
const Login = () => {
  return (
    <Container className="w-25 mx-auto">
        <h2 className="text-center mb-4">Please LogIn</h2>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button> <br />
        <Form.Text className="text-danger">
          Don't have an Account? <Link to='/register'>Register</Link>
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

export default Login;
