export default function catsReducer(state = {
    pictures: [], loading: false,
  }, action) {
    switch (action.type) {
      case 'FETCH_CATS':
        return {...state, pictures: action.payload, loading: false}
        //return Object.assign({}, state, {loading: false, pictures: action.payload})
  
      case 'LOADING_CATS':
        return { ...state, loading: true };

      default:
        return state;
    }
  }