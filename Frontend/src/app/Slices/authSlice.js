// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axiosInstance.js";

const initialState = {
  loading: false,
  status: false,
  userData: JSON.parse(localStorage.getItem("userData")) || null,
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

export const refreshToken = createAsyncThunk("auth/refreshToken", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/auth/refreshToken");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || { message: "Session expired, please log in again." });
  }
});

export const getCurrentUser = createAsyncThunk("auth/getCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/auth/getCurrentUser");
    console.log(response);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response?.data) || { message: "Failed to fetch user data" };
  }
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

        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
        localStorage.setItem("userData", JSON.stringify(action.payload.user));
      });
      
      // Login rejected
      builder.addCase(login.rejected, (state) => {
        state.loading = false;
        state.status = false;
        state.userData = null;
      })

    // logout
      builder.addCase(logout.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(logout.fulfilled, (state) => {
        state.status = false;
        state.userData = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userData");
      });

      builder.addCase(logout.rejected, (state) => {
        state.loading = false;
      });

    //get current user  

      builder.addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.status = false;
      });

      // getCurrentUser
      builder.addCase(getCurrentUser.fulfilled, (state, action) => {
        state.status = true;
        state.userData = action.payload;
        localStorage.setItem("userData", JSON.stringify(action.payload));
        state.loading = false;
      });

    builder.addCase(getCurrentUser.rejected, (state) => {
      state.status = false;
      state.userData = null;
      state.loading = false;
      localStorage.removeItem("userData");
    });

    // refresh token
      builder.addCase(refreshToken.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        localStorage.setItem("accessToken", action.payload.accessToken);
        localStorage.setItem("refreshToken", action.payload.refreshToken);
      });

      builder.addCase(refreshToken.rejected, (state) => {
        state.loading = false;
        state.status = false;
        state.userData = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userData");
      });
    
  },
});

export default authSlice.reducer;
