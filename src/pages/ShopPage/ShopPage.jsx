import React, { useEffect } from 'react';

import { useProductContext } from '../../store/Context/ProductContext';
import './ShopPage.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { FiltersDesktop } from '../../components/Filters/Filters';
import { filtersData } from '../../components/Filters/Filters.data';
import {
  getFilteredData,
  getPricesData,
  getSortedData,
} from '../../components/Filters/FilterOperations';

export const ShopPage = () => {
  const { productCurrentState } = useProductContext();
  const state = useProductContext();
  const [results, setResults] = React.useState([]);
  const { dispatch } = useProductContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => {
    let filteredProducts = [];

    filteredProducts = getFilteredData(state.productCurrentState, filtersData);

    const PricesData = getPricesData(
      filteredProducts,
      state?.productCurrentState.price
    );

    const newResults = getSortedData(
      PricesData,
      state.productCurrentState.sortBy
    );

    setResults(newResults);
  }, [
    dispatch,
    state.productCurrentState,
    state.productCurrentState?.productsList,
  ]);
  return (
    <>
      <section className="hero1">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>
      <div className="productHeading">
        <h2>Products</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <section className="product pad product1">
        <div className="sidebar-container">
          <div className="sidebar">
            {/* <div className="filter">
              <h3>Filters</h3>
              <h4>Sort By</h4>
              <div className="check1">
                <input
                  type="radio"
                  className="a"
                  id=""
                  name="choice"
                  value="Price - High to Low"
                />
                <label htmlFor="checkbox-1"> Price - High to Low</label>
                <br />
              </div>
              <div className="check1">
                <input
                  type="radio"
                  className="a"
                  id=""
                  name="choice"
                  value="Price - Low to High"
                />
                <label htmlFor="checkbox-2"> Price - Low to High</label>
                <br />
              </div>
              <div className="check1">
                <input
                  type="radio"
                  className="a"
                  id=""
                  name="choice"
                  value="Latest"
                />
                <label htmlFor="checkbox-3"> Latest</label>
                <br />
              </div>
            </div> */}
            <FiltersDesktop productState={productCurrentState} />
          </div>
        </div>
        <div className="pro">
          {/* {productCurrentState.productsList.map((product) => (
            <ProductCard product={product} />
          ))} */}

          {results.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
