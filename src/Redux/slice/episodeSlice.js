// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData=createAsyncThunk("fetchData", async()=>
{
  const response=await fetch("http://localhost:4444/episode");
  return response.json();
});
const episodeslice=createSlice({
  name:"episode",
  initialState:{
    isLoading:false,
    data:null,
    isError:false
  },
  extraReducers:(builder)=>
  {
    builder.addCase(fetchData.pending,(state,action)=>
    {
      state.isLoading=true;
    });
    builder.addCase(fetchData.fulfilled,(state,action)=>
      {
        state.isLoading=false;
        state.data=action.payload;
      });
      builder.addCase(fetchData.rejected,(state,action)=>
        {
          state.isError=true;
        });
    }
  }
  
);
export default episodeslice.reducer;
