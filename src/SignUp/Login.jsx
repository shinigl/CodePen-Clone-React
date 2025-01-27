import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'; 
import styles from './Login.module.css'; 
import logo from '../assets/codePenLogo.png'
import { signInWithPopup } from 'firebase/auth';
import { googleAuthProvider,githubAuthProvider } from '../firebase';
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom'


function Login() {

const navigate = useNavigate();

async function signInGoogle(){
  try{
    let res = await signInWithPopup(auth,googleAuthProvider);
    localStorage.setItem('name',res.user.displayName);
    localStorage.setItem('photo',res.user.photoURL)
    console.log(res);
    navigate('/');
  } catch(err){
    console.log('Error');
  }
}

async function signInGithub(){
  try{
    let res = await signInWithPopup(auth,githubAuthProvider);
    localStorage.setItem('name',res.user.displayName);
    localStorage.setItem('photo',res.user.photoURL)
    console.log(res.user.photoURL);
    navigate('/')
  }catch(err){
    console.log('Error');
  }
}


  return (
    <div className={styles.loginContainer}>
      {/* Main container */}
      <div className={styles.loginBox}>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" />
        </div>
        

        {/* Google Login Button */}
        <button onClick={signInGoogle} className={`${styles.loginButton} ${styles.googleButton}`}>
          <FaGoogle className="mr-3" />
          Sign in with Google
        </button>

        {/* GitHub Login Button */}
        <button onClick={signInGithub} className={`${styles.loginButton} ${styles.githubButton}`}>
          <FaGithub className="mr-3" /> 
          Sign in with GitHub
        </button>

        
      </div>
    </div>
  );
}

export default Login;
