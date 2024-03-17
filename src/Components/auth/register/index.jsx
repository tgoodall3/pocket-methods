import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import '../../../Styles/register.css'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password); // Using Firebase authentication method
                navigate('/login'); // Redirecting to login page after successful registration
            } catch (error) {
                setErrorMessage(error.message); // Handling errors
            }
            setIsRegistering(false);
        }
    };

    return (
        <div className="register-page"> {/* Container for the entire registration page */}
          <div className="register-container"> {/* Container for the registration form */}
            <form onSubmit={onSubmit} className="register-form">
              <h2>Create a New Account</h2>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {errorMessage && <span className="error-message">{errorMessage}</span>}
              <button type="submit" disabled={isRegistering}>
                {isRegistering ? 'Signing Up...' : 'Sign Up'}
              </button>
              <div className="login-link">
                Already have an account? <Link to="/login">Continue</Link>
              </div>
            </form>
          </div>
        </div>
      );
    }
    
export default Register