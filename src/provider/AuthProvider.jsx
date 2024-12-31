import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if(currentUser?.email){
        const user = {email: currentUser.email}

        axios.post('https://bring-it-back-server.vercel.app/jwt',user,{withCredentials:true})
        .then(res=>{
          setLoading(false);
        })
      }else{
        axios.post('https://bring-it-back-server.vercel.app/logout',{},{
          withCredentials:true
        })
      .then(res=>{
        console.log('logout',res.data)
        setLoading(false)
      })
      }
    });

    return () => unSubscribe();
  }, []);

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    createUser,
    loginUser,
    googleSignIn,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
