import { reducerConstants } from './reducerConstants';

function reducer(state, { type, payload }) {
  switch (type) {
    case reducerConstants.PRODUCTS: {
      return {
        ...state,
        productsList: [...payload],
      };
    }
    case reducerConstants.SORT: {
      return {
        ...state,
        sortBy: payload,
      };
    }
    case reducerConstants.FILTER: {
      let newFilterProperty = state.filterBy[payload.property];
      const selectedFilter = payload.selection;
      if (state.filterBy[payload.property].includes(selectedFilter)) {
        newFilterProperty = newFilterProperty.filter(
          (item) => item !== selectedFilter
        );
      } else {
        newFilterProperty = newFilterProperty.concat(selectedFilter);
      }

      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [payload.property]: newFilterProperty,
        },
      };
    }
    default:
      return state;
  }
}
function dispatchFilterProperties(dispatch, payload) {
  dispatch({
    type: 'FILTER',
    payload: {
      property: payload.property,
      selection: payload.category,
    },
  });
}

function dispatchSort(dispatch, sortItem) {
  dispatch({ type: 'SORT', payload: sortItem });
}

function dispatchPrice(dispatch, event) {
  dispatch({ type: 'PRICE', payload: event.target.value });
}

function dispatchClearFilters(dispatch) {
  dispatch({ type: 'CLEAR FILTER' });
}
export {
  reducer,
  dispatchFilterProperties,
  dispatchSort,
  dispatchPrice,
  dispatchClearFilters,
};
