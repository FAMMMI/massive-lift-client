import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/icons/google.png';
import useToken from '../../../Hooks/UseToken';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation()

    let from = location.state?.from?.pathname || "/home";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        switch (error?.code) {
            case "auth/popup-closed-by-user":
                errorElement = <p className='text-danger'>Pop-up has been closed before initialization. Please do not close popup.</p>
                break;
            default:
                errorElement = <p className='text-danger'>Something went wrong.</p>
        }
    }


    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className=' btn social-register-btn w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;