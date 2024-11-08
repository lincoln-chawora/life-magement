import React from "react"

import { signInWithGoogle, signOut } from "../services/apiAuth";

const Login: React.FC = () => {
  async function handleSignIn() {
      signInWithGoogle();  
  }
  return (
    <div>
        <button onClick={() => handleSignIn()}>Sign in</button>
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
};

export default Login;
