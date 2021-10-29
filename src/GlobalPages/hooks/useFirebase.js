import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    setIsLoading(true);

    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUsers(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signinWithGoogle,
    logOut,
  };
};

export default useFirebase;
