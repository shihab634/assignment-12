// import axios from "axios";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../utils/useAxiosPublic";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  // console.log(auth);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const removeUser = (user) => {
    return deleteUser(user);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // axiosPublic.get("/foods").then((res) => console.log(res.data));
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("🚀 ~ unsubscribe ~ currentUser:", currentUser);
      setUser(currentUser);
      setLoading(false);
      // if (currentUser) {

      //   axiosPublic
      //     .post("/add-user-login", {
      //       email: currentUser.email,
      //       role: "user",
      //       loginCount: 1,
      //     })
      //     .then((res) => {
      //       console.log(res.data);

      //     });
      // }

      // fetch("http://localhost:3000/email", {
      //   method: "GET", // or POST, PUT, DELETE
      //   headers: {
      //     "Coxntent-Type": "application/json",
      //     Authorization: `Bearer ${currentUser?.accessToken}`,
      //   },
      // });
      // fetch("http://localhost:3000", {
      //   headers: {
      //     Authorization: `Bearer ${currentUser?.accessToken}`,
      //   },
      // })
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    setUser,
    logOut,
    googleSignIn,
    updateUser,
    removeUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    //  <AuthContext value={info}>{children}</AuthContext>;
  );
};

export default AuthProvider;
