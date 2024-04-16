import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'
import '../../../Styles/login.css'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password); 
            } catch (error) {
                setErrorMessage(error.message); 
            }
            setIsSigningIn(false);
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle(); // Using Firebase authentication method
            } catch (error) {
                setIsSigningIn(false); // Handling errors
            }
        }
    };

    return (
        <div>
            {userLoggedIn && <Navigate to={'/instrument'} replace={true} />}

            <main className="login-container">
                <div className="login-form">
                    <div className="login-header">
                        <h3 className="login-title">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="form-fields">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                            />
                        </div>
                        {errorMessage && <span className='error-message'>{errorMessage}</span>}
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`login-button ${isSigningIn ? 'disabled' : ''}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="signup-link">Don't have an account? <Link to={'/register'} className="signup-text">Sign up</Link></p>
                    <div className='or-divider'>
                        <div className='divider-line'></div><div className='or-text'>OR</div><div className='divider-line'></div>
                    </div>
                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`google-signin-button ${isSigningIn ? 'disabled' : ''}`}
                    >
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Login