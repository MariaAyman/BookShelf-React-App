import React, { useRef, useState } from 'react'
import { Button, Card, Form, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { signUp, updateProfile } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value)
            await updateProfile(nameRef.current.value, '/avatar.png')
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
        <Container className="d-flex align-items-center justify-content-center" 
                style={{height: "100vh", color: 'white'}}>

            <div className="w-100" style={{maxWidth: '400px'}}>
                <Card style={{background: 'rgba(255, 255, 255, 0.1'}} className="form">
                    <Card.Body>
                        <h2 className="text-center mb-4 logo">IRead</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" ref={nameRef} required className="form-input"/>
                            </Form.Group>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required className="form-input"/>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required className="form-input"/>
                            </Form.Group>
                            <Form.Group id='password-confirm'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required className="form-input"/>
                            </Form.Group>
                            <div style={{width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                                <Button disabled={loading} className="w-50 mt-2 form-button" type='submit'>Sign Up</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-3">
                    Already have an account? <Link to="/login">Log in</Link>    
                </div>  
          </div>
        </Container>
        </>
    )
}
