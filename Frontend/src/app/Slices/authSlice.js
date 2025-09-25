// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance.js";

const initialState = {
  loading: false,
  status: false,
  userData: null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

// Normal login thunk
export const login = createAsyncThunk("auth/google", async (token, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/auth/google", { token });
    console.log(response)
    return response.data.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response?.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await axiosInstance.post("/users/logout");
    toast.success("Logged out successfully...");
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout failed");
    return rejectWithValue(error.response?.data);
  }
});

export const fetchUser = createAsyncThunk("auth/me", async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data.user;
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
        state.loading = true;
      });
      
      // Login fulfilled
      builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.userData = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        
        // Store tokens in localStorage
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      });
      
      // Login rejected
      builder.addCase(login.rejected, (state) => {
        state.loading = false;
        state.status = false;
        state.userData = null;
      });
    

    // logout
    builder.addCase(logout.fulfilled, (state) => {
      state.status = false;
      state.userData = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = true;
      state.userData = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.status = false;
      state.userData = null;
    });
    
  },
});

export default authSlice.reducer;
