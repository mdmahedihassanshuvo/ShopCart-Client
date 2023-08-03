import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUpUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false);
            setUser(currentUser);
            console.log(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signUpUser,
        signUpWithGoogle,
        updateUserProfile,
        logOutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;