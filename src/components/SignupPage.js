import React from "react";
import { Link } from 'react-router-dom';

export const SignupPage = () => {
    return (
        <div id="login-section">
        <div class="container">
            <div id="login-content">
            <form id="login-form">
                <h3 id="welcome-title">Register</h3>
                <div class="label-input-div">
                    <h5 id="firstName">First Name</h5>
                    <input type="text" class="input"/>
                </div>
                <div class="label-input-div">
                    <h5 id="lastName">Last Name</h5>
                    <input type="text" class="input"/>
                </div>
                <div class="label-input-div">
                    <h5 id="email">Email</h5>
                    <input type="text" class="input"/>
                </div>
                <div class="label-input-div">
                    <h5 id="password">Password</h5>
                    <input type="password" class="input"/>
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