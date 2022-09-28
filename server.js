const store = require('./rtk/app/store')
console.log('initial State', store.getState())
const { fetchPost } = require('./rtk/feature/post/fetchPost')
const { fetchRelatedPosts } = require('./rtk/feature/post/fetchRelatedPosts')

store.subscribe(() => {})
;(async () => {
  await store.dispatch(fetchPost())
  let { post } = store.getState()
  const title = post.data.post.title
  const queryString = title.split(' ').join('&title_like=')
  await store.dispatch(fetchRelatedPosts(queryString))

  console.log(store.getState().post.data)
})()
