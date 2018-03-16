import axios from 'axios';

export const getPosts = () => {
  return dispatch => {
  axios.get('/api/posts')
    .then( res => {
      dispatch({ type: 'GET_POSTS', posts: res.data })
    })
  }
} 

export const newPost = (post) => dispatch => {
  axios.post('/api/posts', post)
    .then( res => {
      dispatch({ type: 'ADD_POST', post: res.data,})
    })
  } 