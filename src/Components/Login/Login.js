import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import { useHistory, useLocation, useState } from 'react-router';
import './Login.css'


const Login = () => {

    const { user, signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation()

    const redirect = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
                history.push(redirect)
            })
        //    .finally(()=>setIsLoading(false))
    }
    return (
        <div className='login-container text-center'>
            <h2 className='text-center text-success fw-bold my-4'> Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-light border border-2"> <img className='google-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwFXc0_kkWCXzk1xUiYZbiMEGg89f60qq6Q&usqp=CAU" alt="" /> Google Sign In</button>
            <br />
            <Link to='/home'><button className="btn btn-light border border-2 mt-4"><img className='google-pic' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vE-gFcm_SwWf7rX6nS_gP7-uBwA7stjh5A&usqp=CAU" alt="" /> Back to Home</button></Link>

        </div>
    );
};

export default Login;