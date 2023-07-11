import React from 'react';
import { NoProductsFound } from '../../components/NoProductsFound/NoProductsFound';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import './Wishlist.css';

export const Wishlist = () => {
  const [wishlist] = useWishlistContext();
  console.log(wishlist, 'asfsa');

  return (
    <main>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            <span className="title-slash">/</span> Wishlist
          </h3>
        </div>
      </section>
      <section className="wishlist-products">
        <div
          className={`products ${wishlist?.length >= 1 ? 'more-products' : ''}`}
        >
          {wishlist?.length === 0 && <NoProductsFound />}
          {wishlist?.map((product) => (
            <ProductCard className="pro2" key={product._id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};
