import React, {useContext, useState, useEffect, Children} from "react"
import { auth, provider } from "../config/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){

    const [currentUser, setCurrentUser] = useState(); 
    const [loading, setLoading] = useState(true);

    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn(){
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubcribe;
    }, [])

    const value = {
        currentUser,
        signIn,
        googleSignIn
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}