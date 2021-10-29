import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import { useHistory, useLocation, useState } from 'react-router';

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
        <div>
            <h2> Please Login !</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            <br />


            <Link to='/home'><button className="btn btn-info mt-4">Back to Home</button></Link>

        </div>
    );
};

export default Login;