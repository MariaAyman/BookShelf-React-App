import React, { useRef, useState, useEffect } from 'react'
import { Container, Button, Card, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
// import ImageUpload from '../Components/ImageUpload'
import Header from '../Components/Header'
import { storage } from '../firebase'
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage'

export default function UpdateProfile() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { currentUser, updateEmail, updatePassword, updateName, updateProfile } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [file, setFile] = useState()
    const [previewURL, setPreview] = useState(currentUser.photoURL)
    const filePickedRef = useRef()

    const history = useHistory();

    useEffect(() => {
        if(!file){
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreview(fileReader.result)
        };
        fileReader.readAsDataURL(file)
        console.log(currentUser)

        //**
        const storageRef = ref(storage, 'users/' + currentUser.uid + '/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + '% done')
            switch(snapshot.state){
                case 'paused':
                    console.log('Upload is paused')
                    break;
                case 'running':
                    console.log('Upload is running')
                    break;
                default:
                    console.log("Default Case")    
            }
        },
        (error) => {
            setError(error)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('file available at ', downloadURL)
                setPreview(downloadURL.toString())
                //updateProfile(currentUser.displayName, downloadURL.toString())
            })
        })
        //**
    }, [file, currentUser])

    function pickedHandler(e){
        let pickedFile;
        if(e.target.files && e.target.files.length === 1){
            pickedFile = e.target.files[0]
            setFile(pickedFile)
        }
    }

    function pickedImageHandler(){
        filePickedRef.current.click()
    }

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }

        const promises = []
        setError('');
        setLoading(true);

        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        if(nameRef.current.value){
            promises.push(updateName(nameRef.current.value))
        }
        if(previewURL){
            promises.push(updateProfile(currentUser.displayName, previewURL))
        }

        //as soon as all our promises done then is executed
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false);
        })

    }
    return (
        <>
        <Header/>
        <Container className="d-flex align-items-center justify-content-center" 
                style={{minHeight: "100vh", color: 'white'}}>

            <div className="w-100" style={{maxWidth: '400px'}}>
                <Card style={{background: 'rgba(255, 255, 255, 0.1'}} className="form">
                    <Card.Body>
                        <h2 className="text-center mb-4">Update Profile</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id='img'>
                                <Form.Label>Profile Image</Form.Label>
                                {/* <ImageUpload /> */}
                                {error && <Alert variant='danger'>{error}</Alert>}
                                <div className="form-control center form-input">
                                    <input 
                                        ref={filePickedRef} 
                                        style={{display: 'none'}} 
                                        type="file" 
                                        accept=".jpg,.png,.jpeg" 
                                        onChange={pickedHandler} 
                                    />
                                    <div className={`image-upload center`}>
                                        <div className="image-upload-preview">
                                            {previewURL && <img src={previewURL} alt='preview' />}
                                        </div>
                                        <div>
                                            {previewURL && (
                                                <div className="center">
                                                    <Button disabled={loading} className="w-100 form-button" type="button" onClick={pickedImageHandler}>Edit</Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group id='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" ref={nameRef} required defaultValue={currentUser.displayName} className="form-input"/>
                            </Form.Group>
                            <Form.Group id='email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} className="form-input"/>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} placeholder={"Leave blank to keep the same"} className="form-input"/>
                            </Form.Group>
                            <Form.Group id='password-confirm'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} placeholder={"Leave blank to keep the same"} className="form-input"/>
                            </Form.Group>
                            <div style={{width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                                <Button disabled={loading} className="w-50 mt-2 form-button" type='submit'>Update</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-3">
                    <Link to='/'>Cancel</Link>    
                </div>  
            </div>
        </Container>        
        </>
    )
}
