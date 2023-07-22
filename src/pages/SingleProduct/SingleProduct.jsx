import React, { useEffect } from 'react';
import './SingleProduct.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useParams } from 'react-router';
import { useProductContext } from '../../store/index.store';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { NoProductsFound } from '../../components/NoProductsFound/NoProductsFound';
import { useAddToCart, useCartContext } from '../../store/Context/CartContext';
import { isPresentInState } from '../../Utils/utils';
import { useAuthContext } from '../../store/Context/AuthContext';
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlistContext,
} from '../../store/Context/WishlistContext';

export const SingleProduct = ({ product, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { productID } = useParams();
  const { productCurrentState } = useProductContext();
  const singleProduct = productCurrentState?.productsList?.find(
    (product) => product._id === productID
  );
  const { mutate: addToCart, isLoading: isLoadingCart } = useAddToCart();
  const { user } = useAuthContext();
  const { cart, setCart, setToggleCartModal } = useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const { mutate: addToWishlist, isLoading: isLoadingWishlist } =
    useAddToWishlist();
  const { mutate: removeFromWishlist, isLoading: isDeletingWishlist } =
    useDeleteFromWishlist();
  const {
    productCurrentState: { productsList },
  } = useProductContext();
  return (
    <>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            Home
            <span className="title-slash"> /</span> {singleProduct.productTitle}
          </h3>
        </div>
      </section>
      <section className="detail">
        <div className="left">
          <img src={singleProduct?.imgUrl} alt="" />
        </div>
        <div className="right">
          <h4>Men's Fashion T Shirt</h4>
          <h2>{singleProduct?.price} RS/-</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />

          <button className="btn_cart">Add To Cart</button>
          <h4>Product Details</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            tenetur, expedita incidunt minus architecto commodi, nihil sequi
            error obcaecati nesciunt numquam voluptates facilis laboriosam
            itaque, repudiandae id aliquid soluta dicta.
          </p>
        </div>
      </section>

      {/* <section className="product pad padding">
        <h2>Similar Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro">
          {productsList
            .filter((product) => product.latest)
            .map((product) => (
              <ProductCard product={product} />
            ))}
        </div>
      </section> */}
    </>
  );
};
