import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'; 
import styles from './Login.module.css'; 
import logo from '../assets/codePenLogo.png'

function Login() {
  return (
    <div className={styles.loginContainer}>
      {/* Main container */}
      <div className={styles.loginBox}>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" />
        </div>
        

        {/* Google Login Button */}
        <button className={`${styles.loginButton} ${styles.googleButton}`}>
          <FaGoogle className="mr-3" /> {/* Google Icon */}
          Sign in with Google
        </button>

        {/* GitHub Login Button */}
        <button className={`${styles.loginButton} ${styles.githubButton}`}>
          <FaGithub className="mr-3" /> {/* GitHub Icon */}
          Sign in with GitHub
        </button>

        
      </div>
    </div>
  );
}

export default Login;
