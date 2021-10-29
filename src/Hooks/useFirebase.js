import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;

    }, [])


    return {
        user, error, signInUsingGoogle, logOut, isLoading
    }




}

export default useFirebase