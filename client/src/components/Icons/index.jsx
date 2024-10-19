import React from 'react'

export default function Icons() {
  return (
    <div className="icons">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="icon text-center">
              <i className="fa-solid fa-truck mb-5 fs-3"></i>
              <h6>Free Shipping & Returns</h6>
              <p className="text-muted">For all orders over $199.00</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="icon text-center">
              <i className="fa-solid fa-credit-card mb-5 fs-3"></i>
              <h6>Secure Payment</h6>
              <p className="text-muted">We ensure secure payment</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="icon text-center">
              <i className="fa-solid fa-rotate-left mb-5 fs-3"></i>
              <h6>Money Back Guarantee</h6>
              <p className="text-muted">Returning money 30 days</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="icon text-center">
              <i className="fa-regular fa-comments mb-5 fs-3"></i>
              <h6>24/7 Customer Support</h6>
              <p className="text-muted">Friendly customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
