import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js"; // LoadStripe function
import { Elements } from "@stripe/react-stripe-js";
import { DataProvider } from "./context/DataContext";
const stripePromise = loadStripe(
  "pk_test_51Q9Vk62M98qASWQqc6u7n5Br3p6QrHcc1lwFHR4Z8AdGs6vbE3QBdE55uFgTxpnLY3D6xvlgYw6A8DrlqWynFMFL00OoSAg4i0"
);

// import ProductComponent from './components/ProductForStripe/productforstripe';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </DataProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
