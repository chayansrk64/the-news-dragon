import React, { useContext, useState } from 'react';
import { Button, Container, Form  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
 
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => { 
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, photo, email, password); 

      createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        setSuccess('User created Successfully!!!')
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
    }

    const handleAccepted = event => {
      setAccepted(event.target.checked);
    }

    return (
        <Container className="w-25 mx-auto">
        <h2 className="text-center mb-4">Please Register</h2>
         <Form onSubmit={handleRegister}>
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
        <Form.Check 
        onClick={handleAccepted}
        type="checkbox" 
        name="accept" 
        label={<>Accept <Link to="/terms">terms & conditions</Link> </>}
        
          />
      </Form.Group>
      
      <Button disabled={!accepted}  style={{background: !accepted ? "gray":"blue"}} type="submit">
        Register
      </Button> <br />
        <Form.Text className="text-danger">
         Already have an Account? <Link to='/login'>Login</Link>
        </Form.Text> <br />
        <Form.Text className="text-danger">
          <p>{error}</p>
        </Form.Text> <br />
      <Form.Text className="text-success">
           <p>{success}</p>
        </Form.Text>
    </Form>
    </Container>
    );
};

export default Register;