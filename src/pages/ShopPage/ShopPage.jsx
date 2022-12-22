import React from 'react';
import { useProductContext } from '../../Context/ProductContext';
import './ShopPage.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const ShopPage = () => {
  const {
    productCurrentState: { productsList },
  } = useProductContext();
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
            <div className="product-Categories">
              <h3>Categories</h3>
              <div className="check">
                <div className="check1">
                  <input type="checkbox" className="" name="product" value="" />
                  <label htmlFor="product"> T-Shirts</label>
                  <br />
                </div>
                <div className="check1">
                  <input
                    type="checkbox"
                    id=""
                    className=""
                    name="product"
                    value=""
                  />
                  <label htmlFor="product"> Pants</label>
                  <br />
                </div>
                <div className="check1">
                  <input
                    type="checkbox"
                    id=""
                    className=""
                    name="product"
                    value=""
                  />
                  <label htmlFor="vehicle1"> Mens</label>
                  <br />
                </div>
                <div className="check1">
                  <input
                    type="checkbox"
                    id=""
                    className=""
                    name="product"
                    value=""
                  />
                  <label htmlFor="product"> Women</label>
                  <br />
                </div>
              </div>
            </div>
            <div className="filter">
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
            </div>
          </div>
        </div>
        <div className="pro">
          {productsList.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
