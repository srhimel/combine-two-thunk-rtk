const { createAsyncThunk } = require('@reduxjs/toolkit')
const fetch = require('node-fetch')

const fetchRelatedPosts = createAsyncThunk(
  'fetch/relatedPost',
  async (queryString) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${queryString}`
    )
    const relatedPosts = await response.json()
    return relatedPosts
  }
)

module.exports.fetchRelatedPosts = fetchRelatedPosts
