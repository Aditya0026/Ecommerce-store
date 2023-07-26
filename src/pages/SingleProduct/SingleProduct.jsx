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
            <span className="title-slash"> /</span> {singleProduct.productDesc}
          </h3>
        </div>
      </section>
      <section className="detail">
        <div className="left">
          <img
            className="single-product-img "
            src={singleProduct?.imgUrl}
            alt=""
          />
        </div>
        <div className="right">
          <h2 className="single-product-title">{singleProduct.productDesc}</h2>
          <p className="single-product-company text-slanted">{`by ${singleProduct.productTitle}`}</p>
          <h4 className="single-product-price">₹{singleProduct?.price}</h4>
          <h4 className="">Product Details:-</h4>
          <p>{singleProduct.detail}</p>
          <div className="single-product-btns flex-al-centerr">
            {user.id ? (
              isPresentInState(singleProduct, cart) ? (
                <button
                  onClick={() => setToggleCartModal((prev) => !prev)}
                  type="button"
                  className="btn_cart"
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    addToCart(singleProduct, {
                      onSuccess: ({ data: { cart: cartData } }) => {
                        setCart(cartData);
                      },
                      onError: (error) => {
                        toast.error(error.message);
                      },
                    })
                  }
                  disabled={isLoadingCart}
                  type="submit"
                  className="btn_cart"
                >
                  Add to Cart
                </button>
              )
            ) : (
              <Link to="/login" className="">
                <button
                  onClick={() => toast.info('Please Log In First')}
                  type="submit"
                  className="btn_cart"
                >
                  Add to Cart
                </button>
              </Link>
            )}

            {user.id ? (
              isPresentInState(singleProduct, wishlist) ? (
                <button
                  disabled={isDeletingWishlist}
                  onClick={() => {
                    removeFromWishlist(singleProduct, {
                      onSuccess: ({ data: { wishlist: wishlistData } }) => {
                        setWishlist(wishlistData);
                      },
                      onError: () => {
                        toast.error('error');
                      },
                    });
                  }}
                  type="submit"
                  className="btn_wishlist "
                >
                  <AiFillHeart className="black" />
                </button>
              ) : (
                <button
                  disabled={isLoadingWishlist}
                  onClick={() =>
                    addToWishlist(singleProduct, {
                      onSuccess: ({ data: { wishlist: wishlistData } }) => {
                        setWishlist(wishlistData);
                      },
                    })
                  }
                  type="submit"
                  className="btn_wishlist"
                >
                  <AiOutlineHeart className="" />
                </button>
              )
            ) : (
              <Link to="/login" className="btn_wishlist">
                <button
                  className=""
                  onClick={() => toast.info('Please Log In First')}
                  type="button"
                >
                  <AiOutlineHeart />
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
