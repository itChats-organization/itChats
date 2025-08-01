import { useState, useNavi } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "../SignUp.css"
import { useAuth } from "../context/AuthContext"

function SignIn(){
   
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const {signIn, googleSignIn} = useAuth();
    const navigate = useNavigate();

    async function handleSignIn(e){
        e.preventDefault();
        
        try{
            setError(false);
            setLoading(true);
            await signIn(email, password);
            navigate("/");
            console.log("sign-in succesful")
        }
        catch{
            setError(true);
            console.log("sign-in failed");
        }
        setLoading(false);
    }

    async function handleGoogleSignIn(){
        try{
            setLoading(true);
            await googleSignIn();
            navigate("/") ;
            console.log("google sign-in successful")
        }
        catch{
            setError(true);
            console.log("google sign-in failed");
        }
    }
    

    return(
        <section className="auth-page">
            <section className="auth-container">
                <section className="auth-header">
                    <h1 className="auth-title">
                        {"Welcome Back!"}
                    </h1>
                    <p className="auth-subtitle">
                        {"Sign In to get started"}
                    </p>
                </section>

                <form onSubmit={ handleSignIn } >
                    <section className="input-wrapper">
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Email"
                            required
                            onChange={e => setEmail(e.target.value) }
                        />
                    </section>
                    
                    <section className="input-wrapper">
                        <input
                            className="form-input"
                            placeholder="Password"
                            required
                            minLength={6}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </section>

                    {error && <span>Incorrect password or email</span>}

                    <button type="submit">Sign In</button>
                </form>

                <span id="span2">or</span>
            
                <button id="google-button" onClick={ handleGoogleSignIn }>
                    <FcGoogle />
                    Continue with Google
                </button>
            </section>
        </section>
    )

}

export default SignIn