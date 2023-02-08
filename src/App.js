import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import {  setTokenAndRole, setUser } from "./features/auth/authSlice";
import auth from "./firebase/firebase.config";
import useToken from "./hooks/useToken";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const token = useToken()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        // dispatch(setTokenAndRole(token))
      }
    });
  }, [token]);

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
