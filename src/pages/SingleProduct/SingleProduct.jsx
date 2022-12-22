import React from 'react';
import './SingleProduct.css';
import { useProductContext } from '../../Context/ProductContext';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const SingleProduct = () => {
  const {
    productCurrentState: { productsList },
  } = useProductContext();
  return (
    <>
      <section className="detail">
        <div className="left">
          <img
            src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/f1_o1a1lf.jpg"
            width="100%"
            alt=""
          />
        </div>
        <div className="right">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>800 RS/-</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button>Add To Cart</button>
          <h4>Product Details</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            tenetur, expedita incidunt minus architecto commodi, nihil sequi
            error obcaecati nesciunt numquam voluptates facilis laboriosam
            itaque, repudiandae id aliquid soluta dicta.
          </p>
        </div>
      </section>

      <section className="product pad padding">
        <h2>Similar Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro">
          {productsList
            .filter((product) => product.isFeatured)
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </section>
    </>
  );
};
