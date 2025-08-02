import React, {useContext, useState, useEffect, Children} from "react"
import { auth, provider } from "../config/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){

    const [currentUser, setCurrentUser] = useState(); 
    const [loading, setLoading] = useState(true);

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            status: "allowed"
            });

            return userCredential;
        });
    }

    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn(){
        return signInWithPopup(auth, provider);
    }

    function googleSignUp() {
        return signInWithPopup(auth, new GoogleAuthProvider()).then(async (result) => {
            const user = result.user;

            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                status: "allowed"
            });
            }

            return result;
        });
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
        signUp,
        googleSignIn,
        googleSignUp
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}