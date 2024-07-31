import React from 'react';
import '../styles/login.css';
import Auth from 'aws-amplify';
import awsconfig from '../aws-exports';

Auth.configure(awsconfig);

const login = () => {
  const handleGoogleSignIn = () => {
    Auth.federatedSignIn({ provider: 'Google' })
      .then((result) => {
        console.log('Sign in success', result);
      })
      .catch((error) => {
        console.error('Sign in error', error);
      });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="sign-in">
          <h2>Sign in</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="submit-button">&#10132;</button>
          <div className="social-login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Sign In"
              className="google-logo"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
        <div className="divider">
          <div className="line"></div>
          <h2 className="logo">Saveit</h2>
          <div className="line"></div>
        </div>
        <div className="sign-up">
          <h2>Sign up</h2>
          <p>Create an Account!</p>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="submit-button">&#10132;</button>
          <div className="social-login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Sign Up"
              className="google-logo"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
