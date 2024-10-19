import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import { BiArrowToBottom, BiCart, BiHeart } from "react-icons/bi";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Header/Header";
const ProductDetails = (userData, logout) => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
      setProduct(res.data.product);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  // Add to Cart logic
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    
    const productExists = cartItems.find(item => item.id === product.id);
    
    if (productExists) {
      productExists.quantity += quantity;
    } else {
      cartItems.push({
        ...product,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Trigger a custom event to update cart count
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };

   // Add to Wishlist logic
  const addToWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

    const productExists = wishlistItems.find((item) => item.id === product.id);

    if (!productExists) {
      wishlistItems.push(product); // Add product to wishlist if it's not already there
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  };


  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-self-center  w-100">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
          <>
         <Navbar userData={userData} logout={logout} />
        <div className="container-fluid mt-5 ">
          <div className="ms-5">
            <div className="d-flex mb-2">
              <div className="me-2">
                <Link to="/">
                  <p>Home</p>
                </Link>
              </div>
              <div className="me-2">
                <Link to="/product">
                  <p>Shop</p>
                </Link>
              </div>
              <div className="me-2">
                <p className="text-secondary">Product Details</p>
              </div>
            </div>
            <h4>{product.title}</h4>
          </div>
          <span className="span ms-5">General Info</span>
          <span className="span-border"></span>
          <div className="row">
            {/* Product Image */}
            <div className="col-md-6 col-12">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid product-image"
              />
            </div>
            {/* Product Details */}
            <div className="col-md-6 col-12 des-details">
              <div>
                <h5>Model</h5>
                <p className="model-t mb-4">{product.model}</p>
              </div>
              <div className="d-flex">
                <div>
                  <h5>Brand</h5>
                  <p className="text-secondary text-capitalize">
                    {product.brand}
                  </p>
                </div>
                <div className="color-d">
                  <h5>Color</h5>
                  <p className="text-secondary">{product.color}</p>
                </div>
              </div>
              <p className="py-3">{product.description}</p>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center mb-4">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <div className="d-flex">
                <button className="btn btn-danger cart btn-lg me-3" onClick={addToCart}>
                  <BiCart size={20} /> Add to cart
                  
                </button>
                <button onClick={addToWishlist} className="btn favorites btn-outline-secondary btn-lg">
                  <BiHeart size={20} />
                </button>
              </div>

              {/* Shipping Information */}
              <div className="shipping-info ">
                <h6 className="mb-4 fs-5">Shipping options</h6>
                <ul className="list-unstyled ">
                  <li>
                    Pickup from the store:{" "}
                    <span className="text-secondary">Today</span>{" "}
                    <strong>Free</strong>
                  </li>
                  <li>
                    Pickup from postal offices:{" "}
                    <span className="text-secondary">Tomorrow</span>{" "}
                    <strong>$25.00</strong>
                  </li>
                  <li>
                    Delivery by courier:{" "}
                    <span className="ms-5 text-secondary">2-3 days</span>{" "}
                    <strong>$35.00</strong>
                  </li>
                </ul>
              </div>

              {/* Warranty Information */}
              <div className="warranty-info ">
                <div className="d-flex justify-content-between">
                  <h6>Warranty information</h6>
                 <i className="fa-solid fa-angles-down me-2" ></i>
                </div>
                <div>
                  <div className="my-3 info-f">
                    <BadgeCheck size={20} className="me-2" />
                    Warranty: 12 months of official manufacturer's warranty.
                    Exchange/return of the product within 14 days.
                  </div>
                  <p className="text-secondary inf0-fp">
                    Explore the details of our product warranties here,
                    including duration, coverage, and any additional protection
                    plans available. We prioritize your satisfaction, and our
                    warranty information is designed to keep you informed and
                    confident in your purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
            </>
      )}
    </>
  );
};

export default ProductDetails;
