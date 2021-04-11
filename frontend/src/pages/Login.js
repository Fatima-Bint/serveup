import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'
import '../styles/login.css'


function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory()

  const loginUser = e => {
    const data = {email, password};

    axios.post("/api/auth/login", data)
    .then(response => {
      history.push("/")
    }).
    catch(exception=> {
      console.log(exception.errors)
    })
  }

  return(
    <div className='login'>
      <h3>Welcome dear Subscriber!</h3><br/>
      <div className='form-container'>
      
      <Form onSubmit={loginUser} className='form-form'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button className='btn' variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    </div>
  )
}

export default Login;