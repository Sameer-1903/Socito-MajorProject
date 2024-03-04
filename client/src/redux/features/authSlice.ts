import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService  from "../../services/authServices"
import { getTokenFromLocalStorage } from "../../utils/axiosConfig";
import {
    AuthState
} from "../../utils/interface"

const initialState: AuthState = {
    user: getTokenFromLocalStorage(),
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
      return await authService.logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logout.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(logout.fulfilled, (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
            state.message = "success";
          })
          .addCase(logout.rejected, (state, action) => {
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error.message ?? "An error occurred.";
            state.isLoading = false;
          })
    }
    
})



  export default authSlice.reducer;