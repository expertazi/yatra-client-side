import React from "react";
import initializeAuthentication from "./Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from "../../contexts/useAuth";
import { useHistory, useLocation } from "react-router";

initializeAuthentication();

const Login = () => {
  const { signinWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log("Come From", location.state?.from);

  const handleGoogleLogin = () => {
    signinWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <div className="text-center mt-5">
        <h2>login</h2>
        <button onClick={handleGoogleLogin} className="btn btn-warning">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
