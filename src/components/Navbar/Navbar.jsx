import React from 'react';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../store/Context/CartContext';
import { Cart } from '../Cart/Cart';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { Sidebar } from '../Sidebar/Sidebar';

export const Navbar = () => {
  const { cart, setCart, toggleCartModal, setToggleCartModal } =
    useCartContext();
  const [toggleSearchModal, setToggleSearchModal] = React.useState(false);
  const [wishlist, setWishlist] = useWishlistContext();

  return (
    <>
      <section className="header">
        <div className="side">
          <Sidebar />
        </div>
        <Link to="/">
          <h2 className="logo">Shopify</h2>
        </Link>

        <div className="nav-right">
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Link to="/wishlist" className="flex">
            <AiOutlineHeart className="icon-link" />
            {wishlist?.length ? (
              <span className="nav-link-span wishlist-span">
                {wishlist?.length}
              </span>
            ) : null}
          </Link>
          <button
            aria-label="cart-icon"
            type="submit"
            className="flex btn_1"
            onClick={() => {
              setToggleCartModal(!toggleCartModal);
            }}
          >
            <AiOutlineShoppingCart className="icon-link" />
            {cart?.length ? (
              <span className="nav-link-span cart-span">{cart?.length}</span>
            ) : null}
          </button>
          <Link to="/login" className="flex">
            <AiOutlineUser className="icon-link" />
          </Link>
        </div>
      </section>
      <Cart
        toggleCartModal={toggleCartModal}
        setToggleCartModal={setToggleCartModal}
      />
    </>
  );
};
