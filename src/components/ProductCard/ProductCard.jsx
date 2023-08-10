import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProductContext } from '../../store/Context/ProductContext';
import { useAuthContext } from '../../store/Context/AuthContext';
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlistContext,
} from '../../store/Context/WishlistContext';
import { useAddToCart, useCartContext } from '../../store/Context/CartContext';
import { isPresentInState } from '../../Utils/utils';

export const ProductCard = ({ product, children }) => {
  const { user } = useAuthContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const { cart, setCart, setToggleCartModal } = useCartContext();
  const { mutate: addToWishlist, isLoading: isLoadingWishlist } =
    useAddToWishlist();
  const { mutate: removeFromWishlist, isLoading: isDeletingWishlist } =
    useDeleteFromWishlist();
  const { mutate: addToCart, isLoading: isLoadingCart } = useAddToCart();
  const ratingsArray = [];
  for (let i = 1; i <= product.rating; i += 1) {
    ratingsArray.push({
      icon: <AiFillStar key={i} style={{ color: 'rgb(243, 181, 25)' }} />,
    });
  }
  return (
    <>
      <div className="product pro1">
        <Link to={`/products/${product._id}`}>
          <img className="product_img" src={product.imgUrl} alt="" />
        </Link>
        {user.id ? (
          isPresentInState(product, wishlist) ? (
            <button
              disabled={isDeletingWishlist}
              onClick={() => {
                removeFromWishlist(product, {
                  onSuccess: ({ data: { wishlist: wishlistData } }) => {
                    setWishlist(wishlistData);
                  },
                  onError: () => {
                    toast.error('error');
                  },
                });
              }}
              type="submit"
              className="card-wishlist border-none"
            >
              <BsFillHeartFill className="icon-svg card-heart added" />
            </button>
          ) : (
            <button
              disabled={isLoadingWishlist}
              onClick={() =>
                addToWishlist(product, {
                  onSuccess: ({ data: { wishlist: wishlistData } }) => {
                    setWishlist(wishlistData);
                  },
                })
              }
              type="submit"
              className="card-wishlist border-none"
            >
              <BsFillHeartFill className={`icon-svg card-heart `} />
            </button>
          )
        ) : (
          <Link
            aria-label="login-icon"
            to="/login"
            className="card-wishlist border-none"
          >
            <button
              className="border-none"
              onClick={() => toast.info('Please Log In First')}
              type="button"
            >
              <BsFillHeartFill className={`icon-svg card-heart `} />
            </button>
          </Link>
        )}
        <div className="des">
          <span className="span">{product.productTitle}</span>
          <h5 className="h5">{product.productDesc}</h5>
          <div className="star" />
          <h4 className="price">RS.{product.price}</h4>
          {ratingsArray.map((item) => item.icon)}
        </div>
        {user.id ? (
          isPresentInState(product, cart) ? (
            <button
              onClick={() => setToggleCartModal((prev) => !prev)}
              type="button"
              className="btn btn-squared m-top-small button"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() =>
                addToCart(product, {
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
              className="btn btn-squared m-top-small"
            >
              {children || 'Add to Cart'}
            </button>
          )
        ) : (
          <Link to="/login" className="">
            <button
              onClick={() => toast.info('Please Log In First')}
              type="submit"
              className="btn btn-squared m-top-small"
            >
              Add to Cart
            </button>
          </Link>
        )}
      </div>
    </>
  );
};
