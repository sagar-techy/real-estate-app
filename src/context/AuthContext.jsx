import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "../services/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u)
        localStorage.setItem(
          "rea_user",
          JSON.stringify({
            uid: u.uid,
            email: u.email,
            displayName: u.displayName || "",
          })
        );
      else localStorage.removeItem("rea_user");
    });
    return () => unsub();
  }, [auth]);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const signup = async (name, email, password) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (name) await updateProfile(cred.user, { displayName: name });
    return cred;
  };
  const logout = () => signOut(auth);

  const value = { user, loading, login, signup, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
