import React, { useState, useEffect } from "react";
import Navbar from "../../components/Header/Header";
import "./CartPage.css"
const CartPage = (userData, logout) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const deleteItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Update localStorage
  };

   // Calculate subtotal (total before tax)
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Calculate tax (e.g., 10%)
  const calculateTax = (subtotal) => {
    const taxRate = 0.10;  // Adjust this rate if needed
    return (subtotal * taxRate).toFixed(2);
  };

  // Calculate grand total (subtotal + tax)
  const calculateGrandTotal = (subtotal, tax) => {
    return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  };

  return (
    <div className="container mt-5 c-body">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
            <ul className="list-group">
             <Navbar userData={userData} logout={logout} />
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="cart-w">
                    <img src={item.image} alt={item.title} width="50" />
                    <span className="ms-3">
                     {item.title
                ? item.title.split(" ").slice(0, 7).join(" ")
                : "No title available"}
                    
                    </span>
                  </div>
                  <div>
                    {item.quantity} x ${item.price}
                  </div>
                   <button
                      className="btn ms-3"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                </div>
              </li>
            ))}
          </ul>
            {/* Subtotal, Tax, and Grand Total */}
            <div className="subtotal">
          <h6 className="mt-3 subtotal-t"><span>Subtotal:</span> ${calculateSubtotal()}</h6>
          <h6 className="mt-3 subtotal-t text-secondary disabled"><span className="text-secondary disabled">Sales Tax (10%):</span> ${calculateTax(calculateSubtotal())}</h6>
          <h6 className="mt-3 subtotal-t"><span>Grand Total:</span> ${calculateGrandTotal(calculateSubtotal(), calculateTax(calculateSubtotal()))}</h6>
          </div>
          {/* Checkout Button */}
          <button className="checkout-btn subtotal-t mt-3">Check Out</button>
        </>
      )}
    </div>
  );
};

export default CartPage;