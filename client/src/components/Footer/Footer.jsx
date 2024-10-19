import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
export default function Footer() {

return (
  <footer className="footer text-light text-center">
    {/* Section: Social media */}
    <section className="social-media d-flex justify-content-between">
      <div className="left">
        <span>Get connected with us on social networks:</span>
      </div>

      <div className="right">
        <Link to="#" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="#" className="social-link">
          <i className="fab fa-google"></i>
        </Link>
        <Link to="#" className="social-link">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="#" className="social-link">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="#" className="social-link">
          <i className="fab fa-github"></i>
        </Link>
      </div>
    </section>

    {/* Section: Links */}
    <section className="links-section">
      <div className="container footer-cont d-flex justify-content-around">
        <div className="row">
          <div className="column">
            <h6>Company name</h6>
            <hr />
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="column">
            <h6>Products</h6>
            <hr />
            <p>
              <Link to="#!" className="footer-link">
                MDBootstrap
              </Link>
            </p>
            <p>
              <Link to="#!" className="footer-link">
                MDWordPress
              </Link>
            </p>
            <p>
              <Link to="#!" className="footer-link">
                BrandFlow
              </Link>
            </p>
            <p>
              <Link to="#!" className="footer-link">
                Bootstrap Angular
              </Link>
            </p>
          </div>

          <div className="column">
            <h6>Useful links</h6>
            <hr />
            <p>
              <Link to="#!" className="footer-link">
                Your Account
              </Link>
            </p>
            <p>
              <Link to="#!" className="footer-link">
                Become an Affiliate
              </Link>
            </p>
            <p>
              <Link to="#!" className="footer-link">
                Shipping Rates
              </Link>
            </p>
            <p>
              <Link to="#!" className="footer-link">
                Help
              </Link>
            </p>
          </div>

          <div className="column">
            <h6>Contact</h6>
            <hr />
            <p>
              <i className="fas fa-home"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Copyright */}
    <div className="footer-copyright">
      © 2024 Copyright: <Link to="https://mdbootstrap.com/">MDBootstrap.com</Link>
    </div>
  </footer>
);
}
