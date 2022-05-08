import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

import { Card } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div>
            <p className='registration-header mt-4 mb-3 text-center'>Welcome To Massive Lift-Up</p>
            <div className='login-signup-container'>

                <div className='register-form'>
                    <h2 className='register-header' style={{ textAlign: 'center' }}>Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <input className='w-75 mx-auto' type="text" name="name" id="" placeholder='Your Name' />

                        <input className='w-75 mx-auto' type="email" name="email" id="" placeholder='Email Address' required />

                        <input className='w-75 mx-auto' type="password" name="password" id="" placeholder='Password' required />
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                        <input
                            disabled={!agree}
                            className='w-50 mx-auto btn  mt-2 register-btn'
                            type="submit"
                            value="Register" />
                    </form>
                    <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Register;