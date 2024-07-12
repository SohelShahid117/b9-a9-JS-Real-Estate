import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    //for Register component
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    //for Login component
    return signInWithEmailAndPassword(auth, email, password);
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "observing current user inside useEffect of AuthProvider is",
        currentUser
      );
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    name: "sohel",
    user,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

/*
1nmbr kaj =createContext() & export it
2nmbr kaj = <AuthContext.Provider value={AuthInfo}>  ;set provider+value set
3nmbr kaj  = main.jsx e ase ai kajti korte hobe  
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
4nmbr kaj = AuthProvider.jsx e ({children }) hisebe dokate hobe

*/
