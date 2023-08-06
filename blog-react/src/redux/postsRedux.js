import shortid from 'shortid';

//selectors
export const getAllPosts = state => state.posts;
export const getPostsById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST')
const ADD_POST = createActionName('ADD_POST')
const EDIT_POST = createActionName('EDIT_POST')
const UPDATE_POST = createActionName('UPDATE_POST')

// action creators
export const deletePost = payload => ({type: DELETE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});
export const updatePost = payload => ({type: UPDATE_POST, payload});

export const fetchPost = (dispatch) => {
  fetch('http://localhost:3131/api/posts')
  .then(res => res.json())
  .then(posts => dispatch(updatePost(posts)))
};

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return [...statePart.filter(posts => posts.id !== action.payload)];
    case ADD_POST:
      return [...statePart,{ ...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map(post => post.id === action.payload.id ? {...post, ...action.payload }:post )
    case UPDATE_POST:
      return [...action.payload]
    default:
      return statePart;
  }; 
};

export default postsReducer;