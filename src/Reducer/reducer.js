import { reducerConstants } from './reducerConstants';

function reducer(state, { type, payload }) {
  switch (type) {
    case reducerConstants.PRODUCTS: {
      return {
        ...state,
        productsList: [...payload],
      };
    }
    default:
      return state;
  }
}
export default reducer;
