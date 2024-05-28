import React from 'react'
import { auth } from '../config/firebase';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {   

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        const userCred = await signInWithPopup(auth, provider);
    }

  return (
    
    <button 
        className='btn btn-primary btn-sm'
        onClick={googleSignIn}
    >
        <span className='text-center'>
          <i className="fa-brands fa-google"></i><br />
          Iniciar Sessión con Google
        </span>
    </button>
  )
}

export default Login