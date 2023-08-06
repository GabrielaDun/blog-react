//selectors
export const getCategories = state => state.categories;
export const getCategoryById = ({posts}, category) => 
posts.filter(post => post.category.toLowerCase() === category.toLowerCase())


const createActionName = actionName => `app/categories/${actionName}`;
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES');

// action creators
export const updateCategories = payload => ({type: UPDATE_CATEGORIES, payload})
export const fetchCategories = (dispatch) => {
  fetch('http://localhost:3131/api/categories')
  .then(res => res.json())
  .then(categories => dispatch(updateCategories(categories)))
};

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return [...action.payload]
    default:
    return statePart;
  };
  
};

export default categoriesReducer;