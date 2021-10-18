import React, {useState, useEffect, useRef} from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Button, Alert } from 'react-bootstrap'
import { storage } from '../firebase'
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage'

export default function ImageUpload(props){
    const { currentUser, updateProfile } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState()
    const [previewURL, setPreview] = useState(currentUser.photoURL)
    const filePickedRef = useRef()

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

    async function pickedHandler(e){
        let pickedFile;
        if(e.target.files && e.target.files.length === 1){
            pickedFile = e.target.files[0]
            setFile(pickedFile)
        }
        console.log("file:: ", pickedFile)
        console.log('previewURL:: ', previewURL)
        //**
        //** 
        try{
            setError('');
            setLoading(true);
            await updateProfile(currentUser.displayName, previewURL)
        } catch {
            setError('Failed to update profile image')
        }
        setLoading(false);
    }

    function pickedImageHandler(){
        filePickedRef.current.click()
    }

    return(
        <>
        {error && <Alert variant='danger'>{error}</Alert>}
        <div className="form-control center form-input">
            <input id={props.id} 
                   ref={filePickedRef} 
                   style={{display: 'none'}} 
                   type="file" 
                   accept=".jpg,.png,.jpeg" 
                   onChange={pickedHandler} 
            />
            <div className={`image-upload ${props.center && 'center'}`}>
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
        </>
    )
}