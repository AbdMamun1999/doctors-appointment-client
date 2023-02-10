import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  email: "",
  role: "",
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
    return data.user.email;
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
