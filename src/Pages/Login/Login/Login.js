import React, { useRef, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Hooks/UseToken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import SocialLogin from '../SocialLogin/SocialLogin';




const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');

    let from = location.state?.from?.pathname || "/home";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        switch (error?.code) {
            case "auth/wrong-email":
                errorElement = <p className='text-danger'>Give a valid email!</p>
                break;

            case "auth/wrong-password":
                errorElement = <p className='text-danger'>Wrong Password</p>
                break;
            default:
                errorElement = <p className='text-danger'>Something went wrong.</p>
        }

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div>
            <p className='registration-header mt-4 mb-3 text-center'>Login To Massive Lift-Up</p>
            <div className='login-signup-container'>

                <div className=' w-50 mx-auto login-container '>
                    <h2 className='login-header text-center mt-2'>Please Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto w-50" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant=" w-25 mx-auto d-block mb-2 " type="submit" className='login-btn text-center'>Login
                        </Button>
                    </Form>
                    {errorElement}

                    <p >New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                    <p><small>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </small></p>


                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>

                </div>
            </div>
        </div >
    );
};

export default Login;