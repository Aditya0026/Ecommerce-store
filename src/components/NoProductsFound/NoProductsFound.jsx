import React from 'react';

export const NoProductsFound = () => (
  <>
    <div className="section-center single-product-center flex img ">
      <img
        alt="no product found"
        src="https://res.cloudinary.com/ddlpde95c/image/upload/v1671611574/3828532_yuo8hf.jpg"
        className="single-product-img img no-products"
      />
      <article className="single-product-info">
        <div>
          <h2 className="single-product-title">No products found</h2>
        </div>
      </article>
    </div>
  </>
);
