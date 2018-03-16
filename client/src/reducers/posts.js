const posts = (state = [], action ) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [action.post, ...state];
    default:
      return state;
  }
}

export default posts;