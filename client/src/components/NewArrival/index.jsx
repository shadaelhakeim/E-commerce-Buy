import React from "react";
import laptop from "../../images/laptop.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function NewArrival() {
  let navigate = useNavigate()
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <h2 className="fw-bold">New Arrival</h2>
          <div className="col-12 col-lg-4 mt-3">
            <div className="img-card">
              <img src={laptop} alt="laptop img" />
              <div className="description ">
                <h2 className="text-light">MacBook</h2>
                <p className="text-light text-center">Be Pro Anywhere</p>
                <button
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  From $1.199
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-4"></div>
        </div>
      </div>
    </>
  );
}
