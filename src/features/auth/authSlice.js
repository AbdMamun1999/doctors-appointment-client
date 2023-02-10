import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";

const initialState = {
  email: "",
  role: "",
  isLoading: false,
  isError: false,
  error: "",
  token: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    console.log(email, password);
    const data = await createUserWithEmailAndPassword(auth, email, password);

    /*  console.log(data)
    const userInfo = await userPost();
    if (data.user.email) {
      console.log(userInfo);
    } */

    return data.user.email;
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
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
    localStorage.setItem("token", data.data.token);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      state.email = action.payload.email;
      state.isLoading = false;
    },
    logout: (state) => {
      state.email = "";
    },
    setTokenAndRole: (state, action) => {
      state.role = action.payload.role;
      // state.token = action.payload.token;
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


export const { setUser, logout,setTokenAndRole } = authSlice.actions;

export default authSlice.reducer;
