import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiHeart } from "react-icons/bi";

export default function Navbar({ userData, logout }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // حالة القائمة (مغلقة أو مفتوحة)
  const [activeLink, setActiveLink] = useState("/home"); // بدء التفعيل على "/home"
  const [cartCount, setCartCount] = useState(0);

  const handleLinkClick = (link) => {
    setActiveLink(link); // تعيين الرابط النشط عند النقر
    setIsNavCollapsed(true); // إغلاق القائمة بعد اختيار العنصر
  };

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed); // فتح أو غلق القائمة عند الضغط على زر القائمة
  };

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  useEffect(() => {
    // Update cart count on page load
    updateCartCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCartCount);

      return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fw-bold d-flex me-4" to="/home">
          <i className="fa-solid fa-cart-shopping"></i>
          <h4 className="custom-font mt-3 fw-bold">BuyItAll</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={toggleNavCollapse}
        >
          <div className="icon d-flex justify-content-center align-items-center">
            <i
              className={`fa-solid ${
                isNavCollapsed ? "fa-bars" : "fa-xmark"
              }  fs-3`}
            ></i>
          </div>
        </button>
        <div
          className={`navbar-collapse ${!isNavCollapsed ? "active" : ""}`} // إضافة كلاس active عند فتح القائمة
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "/home" ? "active" : ""}`}
                aria-current="page"
                to="/home"
                onClick={() => handleLinkClick("/home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "/product" ? "active" : ""
                }`}
                aria-current="page"
                to="/product"
                onClick={() => handleLinkClick("/product")}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "/customerInfo" ? "active" : ""
                }`}
                aria-current="page"
                to="/customerInfo"
                onClick={() => handleLinkClick("/customerInfo")}
              >
                Customer Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "/blog" ? "active" : ""}`}
                aria-current="page"
                to="/blog"
                onClick={() => handleLinkClick("/blog")}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "/about" ? "active" : ""
                }`}
                aria-current="page"
                to="/about"
                onClick={() => handleLinkClick("/about")}
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
            <li className="nav-item d-flex justify-content-between align-items-center">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/WishList">
               <BiHeart size={20} /> 
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/cart">
               <i className="fa-solid fa-cart-shopping"></i> ({cartCount})
              </Link>
            </li>
            <span className="me-2 fw-bold" onClick={logout}>
              Logout
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
}
