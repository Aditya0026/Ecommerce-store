import React from 'react';
import { useQuery } from 'react-query';
import { reducer } from '../Reducer/reducer';
import { fetchProducts } from '../../serverCalls/cartCalls/fetchProducts';
import { reducerConstants } from '../Reducer/reducerConstants';
import { getMaxPrice } from '../../components/Filters/Filters.data';

const ProductContext = React.createContext();

const initialState = {
  sortBy: '',
  filterBy: { categories: [] },
  productsList: [],
  price: getMaxPrice(),
};

const ProductsContextProvider = ({ children }) => {
  const [productCurrentState, dispatch] = React.useReducer(
    reducer,
    initialState
  );
  const { data, isLoading, isError } = useQuery('products', fetchProducts);
  const productsArray = data?.data.products;

  React.useEffect(() => {
    if (productsArray) {
      dispatch({ type: reducerConstants.PRODUCTS, payload: productsArray });
    }
  }, [isLoading, productsArray]);

  const value = React.useMemo(
    () => ({ productCurrentState, dispatch, isLoading, isError }),
    [productCurrentState, isLoading, isError]
  );
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
const useProductContext = () => {
  const context = React.useContext(ProductContext);
  if (context === 'undefined') {
    throw new Error(
      'useProductContext must be use in a ProductContextProvider component'
    );
  }
  return context;
};
export { ProductsContextProvider, useProductContext, initialState };
