import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const successNotify = () => toast.success("User Login Successfully!");
  const errorNotify = () => toast.error("Invalid email or password!");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // create user
  const userRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        const user = result.user;
        if (user) {
          setUser(user);
          return <Navigate to="/login"></Navigate>;
        }
      }
    );
  };
  // login user
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        successNotify();
      })
      .catch(() => {
        errorNotify().then(() => {
          window.location.href = "/login";
        });
      });
  };
    // google login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    // twitter login
    const twitterLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, twitterProvider);
    };
  // logout user
  const logOut = () => {
    setLoading(true)
    setUser(null);
    return signOut(auth);
  };
//   update user
const updateUserProfile = (name, url) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    userRegister,
    userLogin,
    googleLogin,
    twitterLogin,
    logOut,
    updateUserProfile,
    loading,
    
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
