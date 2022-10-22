
export const reducer = (state, action) => {
  switch (action.type) {
    case 'addFavorite': return {...state, favorites: [...state.favorites, action.id]};
    case 'removeFavorite': return {...state, favorites: state.favorites.filter(item => item !== action.id)};
    case 'toggleFavorite': return (state.favorites.find(id => action.id === id)) ? {...state, favorites: state.favorites.filter(item => item !== action.id)} : {...state, favorites: [...state.favorites, action.id]}
    case 'getProducts': return {...state, listProducts: action.list};
    default: return state;
  }
}