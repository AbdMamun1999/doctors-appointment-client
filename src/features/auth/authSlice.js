import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";
import jwt_decode from "jwt-decode";

const userToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

let role;
if (userToken) {
  const decodedUser = jwt_decode(userToken);
  role = decodedUser.role;
}

const initialState = {
  email: "",
  role,
  userToken,
  isLoading: false,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    console.log(email, password);
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const user = await axios.post(
      `http://localhost:5000/user/login`,
      { email },
      config
    );
    console.log(user);
    localStorage.setItem("accessToken", user?.data?.token);
    return data.user.email;
  }
);

export const userGetStarted = createAsyncThunk(
  "auth/userGetStarted",
  async (user) => {
    const data = await axios.post(
      "http://localhost:5000/user/user-register",
      user
    );

    localStorage.setItem("accessToken", data?.data?.token);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.email = "";
      state.role = "";
      state.userToken = "";
      localStorage.setItem("accessToken", "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
