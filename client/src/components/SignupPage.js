import React from "react";
import { Link } from 'react-router-dom';

export const SignupPage = () => {
    
    return (
        <div id="login-section">
        <div className="container">
            <div className="login-content">
            <form id="login-form">
                <h3 id="welcome-title">Register</h3>
                <div className="label-input-div">
                    <h5 id="firstName">Full Name</h5>
                    <input type="text" className="input"/>
                </div>
                <div className="label-input-div">
                    <h5 id="email">Email</h5>
                    <input type="text" className="input"/>
                </div>
                <div className="label-input-div">
                    <h5 id="password">Password</h5>
                    <input type="password" className="input"/>
                </div>
                <input type="submit" id="login-btn" value="Create account"/>
                <button type="submit" id="google-btn">
                <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="search engine"/> Sign up with Google</button>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>  
            </form>    
            </div>
        </div>
        </div>
    );
}