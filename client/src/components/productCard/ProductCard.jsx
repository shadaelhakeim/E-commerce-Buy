import React from "react";
import { Star, StarHalf } from "lucide-react";
import "./ProductCard.css"; // Custom styles for extra design
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductCard = ({ product , addToCart}) => {
  // Check if product is defined before trying to use its properties
  if (!product || !product.price) {
    return ;
  }

  // Function to calculate the discounted price
  const calculateDiscountedPrice = (price, discount) => {
    return discount
      ? (price - (price * discount) / 100).toFixed(2)
      : price.toFixed(2);
  };

  const discountedPrice = calculateDiscountedPrice(
    product.price,
    product.discount
  );

  return (
    <div className="col card-sid mb-4">
      <div className="card h-100 shadow-sm position-relative">
        {product.discount && (
          <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 discount-badge">
            -{product.discount}%
          </div>
        )}
        <Link to={`/productDetails/${product.id}`}>
          <img
            src={product.image || "default-image-url.jpg"} // Fallback for missing image
            className="card-img-top"
            alt={product.title || "No Title"} // Fallback for missing title
          />
        </Link>
        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            <Star size={14} className="stars fill-goldenrod text-warning" />
            <Star size={14} className="stars fill-goldenrod text-warning" />
            <Star size={14} className="stars fill-goldenrod text-warning" />
            <Star size={14} className="stars fill-goldenrod text-warning" />
            <StarHalf size={14} className="stars fill-goldenrod text-warning" />
          </div>

          <Link to={`/productDetails/${product.id}`}>
            <h5 className="card-title">
              {product.title
                ? product.title.split(" ").slice(0, 10).join(" ")
                : "No title available"}
            </h5>
          </Link>

          <p className="text-muted">{product.brand || "No brand"}</p>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              {/* Discounted Price */}
              <span className="c-price fs-5">
                <span className="text-danger">$</span> {discountedPrice}
              </span>

              {/* Original Price */}
              {product.discount && (
                <span className="text-muted text-decoration-line-through fs-6 ms-2">
                  <span className="text-danger">$</span>{" "}
                  {product.price.toFixed(2)}
                </span>
              )}
            </div>
            <button className="btn btn-outline-secondary" onClick={() => addToCart(product)}>
              <BiCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
