import React from "react";
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <div id="login-section">
        <div class="container">
            <div id="login-content">
            <form id="login-form">
                <h2 id="welcome-title">Log In</h2>
                <div class="label-input-div">
                    <h5 id="email">Email</h5>
                    <input type="text" class="input"/>
                </div>
                <div class="label-input-div">
                    <h5 id="password">Password</h5>
                    <input type="password" class="input"/>
                </div>
                <input type="submit" id="login-btn" value="Login"/>
                <button type="submit" id="google-btn">
                <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="search engine"/> Log in with Google</button>
                <p>New customer? <Link to="/signup">Create an account</Link></p>  
            </form>    
            </div>
        </div>
        </div>
    );
}