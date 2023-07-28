//selectors
export const getCategories = state => state.categories;
export const getCategoryById = ({posts}, category) => 
posts.filter(post => post.category.toLowerCase() === category.toLowerCase())


const categoriesReducer = (statePart = []) => {
  return statePart;
  
};

export default categoriesReducer;