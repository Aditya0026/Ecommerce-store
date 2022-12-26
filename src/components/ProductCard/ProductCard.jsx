import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { useProductContext } from '../../store/Context/ProductContext';
import './product.css';
import { useAuthContext } from '../../store/Context/AuthContext';
import {
  useAddToWishlist,
  useDeleteFromWishlist,
  useWishlistContext,
} from '../../store/Context/WishlistContext';

import { isPresentInState } from '../../Utils/utils';

export const ProductCard = ({ product }) => {
  const { user } = useAuthContext();
  const [wishlist, setWishlist] = useWishlistContext();
  const ratingsArray = [];
  for (let i = 1; i <= product.rating; i += 1) {
    ratingsArray.push({
      icon: <AiFillStar key={i} style={{ color: 'rgb(243, 181, 25)' }} />,
    });
  }
  return (
    <>
      <div className="pro1">
        <img src={product.imgUrl} alt="" />
        <AiOutlineHeart className="fav" />
        <div className="des">
          <span>{product.productTitle}</span>
          <h5>{product.productDesc}</h5>
          <div className="star" />
          <h4>{product.price}</h4>
          {ratingsArray.map((item) => item.icon)}
        </div>
        <BsCartFill className="add_cart" />
      </div>
    </>
  );
};
