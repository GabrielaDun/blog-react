import shortid from 'shortid';

//selectors
export const getAllPosts = state => state.posts;
export const getPostsById = ({ posts }, postId) => posts.find(post => post.id === postId)

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST')
const ADD_POST = createActionName('ADD_POST')

// action creators
export const deletePost = payload => ({type: DELETE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return [...statePart.filter(posts => posts.id !== action.payload)];
    case ADD_POST:
      return [...statePart,{ ...action.payload, id: shortid() }];

    default:
      return statePart;
  }; 
};

export default postsReducer;