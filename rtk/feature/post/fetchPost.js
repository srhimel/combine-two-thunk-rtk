const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const fetch = require('node-fetch')
const { fetchRelatedPosts } = require('./fetchRelatedPosts')

const initialState = {
  loading: false,
  data: {
    post: {},
    relatedPosts: []
  },
  error: ''
}

const fetchPost = createAsyncThunk('fetch/post', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/100')
  const data = await response.json()
  return data
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false
      state.data.post = action.payload
    })
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })
    builder.addCase(fetchRelatedPosts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      state.loading = false
      state.data.relatedPosts = action.payload
    })
    builder.addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })
  }
})

module.exports = postSlice.reducer
module.exports.fetchPost = fetchPost
