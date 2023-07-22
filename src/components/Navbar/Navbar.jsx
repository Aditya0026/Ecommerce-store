import React from 'react';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { useCartContext } from '../../store/Context/CartContext';
import { Cart } from '../Cart/Cart';
import { useWishlistContext } from '../../store/Context/WishlistContext';
import { Sidebar } from '../Sidebar/Sidebar';

export const Navbar = () => {
  const { cart, setCart, toggleCartModal, setToggleCartModal } =
    useCartContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const [showSidebar, setShowSidebar] = React.useState(false);

  return (
    <>
      <section className="header">
        <div className="humburger-menu">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            type="submit"
            id="btnHamburger"
            href="#"
            aria-label="menu-icon"
            className={`nav-toggle hide-for-desktop m-right-small border-none ${
              showSidebar ? 'open' : ''
            }`}
          >
            <Hamburger size={25} />
          </button>
          <Link to="/">
            <h2 className="logo">Apex</h2>
          </Link>
        </div>
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
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};
