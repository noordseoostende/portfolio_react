import API from '../../utils/api';

export const getUsers = (token) => {
  API.getUsers(token, res => {
    dispatchEvent({
      type: 'GOT_USERS',
      payload: res.data
    })
  })
}

export const getPosts = (token) => {
  return dispatch => {
    API.getPosts(token,res => {
      dispatch({
        type: 'GOT_POSTS',
        payload: res.data
      })
    })
  }
}