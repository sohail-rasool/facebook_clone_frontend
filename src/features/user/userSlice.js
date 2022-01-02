import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: {
    _id: "61d0a9b2cb63c72e64ecf114",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings:[],
    isAdmin: false,
    username: "sohail",
    email: "sohail@gmail.com",
    password: "12345678",
    createdAt: "2022-01-01T19:21:22.636+00:00",
    updatedAt: "2022-01-01T19:21:22.636+00:00",
    city: "lahore",
    _v: ""
  },
  isFetching: false,
  error: '',
}

export const loginCall = createAsyncThunk(
  'auth/login',
  async (userCreditails) => {
    const response = await axios.post('auth/login', userCreditails)
    const data = response.data
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reducers: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginCall.pending, (state) => {
        state.user = null
        state.isFetching = true
        state.error = ''
      })
      .addCase(loginCall.fulfilled, (state, action) => {
        state.user = action.payload
        state.isFetching = false
        state.error = ''
      })
      .addCase(loginCall.rejected, (state, action) => {
        state.user = null
        state.isFetching = false
        state.error = action.error.message
      })
  },
})

export const selectUser = (state) => state.user.user;
export const selectIsFetching = (state) => state.user.isFetching;

export default userSlice.reducer
