/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContex = createContext()
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider()

    const createuser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loggedUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loggedOut = () => {
        return signOut(auth)
    }

    const SocialLogin = () => {
        return signInWithPopup(auth,Provider)
    }



    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            console.log('current user:', currentuser)
            setLoading(false)

        })
        return () => {
            return unsubcribe();
        }
    }, [])
    const userinfo = {
        user,
        loading,
        loggedUser,
        loggedOut,
        createuser,
        SocialLogin
    }
    return (
        <AuthContex.Provider value={userinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;