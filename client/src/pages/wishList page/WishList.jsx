import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WishList.css";
import { Info } from "lucide-react";
import Navbar from "../../components/Header/Header";
import { FaShoppingCart } from "react-icons/fa";

const Wishlist = (userData,logout) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlist);
  }, []);

  return (
    <div className="wishlist-page container mt-5">
      <Navbar userData={userData} logout={logout} />
      <div className="pt-5">
        <h2>Your Wishlist</h2>
        <div className="row ">
          {wishlistItems.length === 0 ? (
            <p>
              <span>
                <Info size={20} />
              </span>
              No items in your wishlist.
            </p>
          ) : (
            wishlistItems.map((product, index) => (
              <div key={index} className="col-md-4">
                <div className="card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                       {product.title
                ? product.title.split(" ").slice(0, 10).join(" ")
                : "No title available"}
                    </h5>
                    <p className="card-text">${product.price}</p>
                    <Link
                      to={`/productDetails/${product.id}`}
                      className="btn wishlist-btn"
                    >
                      View Product
                    </Link>
                    <div className="shop-cart">
                      <FaShoppingCart />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
