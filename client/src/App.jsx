// App.js or HomePage.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// import lucide-react
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/index";
import Login from "./pages/Signin/index";
import ForgetPassword from "./components/ForgetPassword/index";
import ConfirmCode from "./components/ConfirmCode";
import TechBlog from "./components/Blog/Blog";
import AboutSection from "./pages/customerInformation";
import ProductPage from "./pages/product/ProductPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import CartPage from "./pages/cartPage/CartPage";
import Wishlist from "./pages/wishList page/WishList";
// import FAQ from "./pages/FAQ/FAQ";
// import PrivacyPolicy from "./pages/privacyPolicy/index";
// import UsingPrivacy from "./pages/usingPrivacy";
// import ItellectualProperty from "./pages/itellectualProperty";
const App = () => {
  let navigate = useNavigate();
  let [userData, SetUserData] = useState(null);
  function saveUserData() {
    if (localStorage.getItem("token")) {
      let encodeToken = localStorage.getItem("token");
      let decodeToken = jwtDecode(encodeToken);
      SetUserData(decodeToken);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    SetUserData(null);
    navigate("/login");
  }
  useEffect(() => {
    saveUserData();
  }, []);

  function ProtectRoute(props) {
    if (localStorage.getItem("token")) {
      return props.children;
    } else {
      return <Navigate to={"/login"} />;
    }
  }
  return (
    <Routes>
      {localStorage.getItem("token") ? (
        <Route
          path="/"
          element={<Home logout={logout} userData={userData} />}
        />
      ) : (
        <Route path="/" element={<Navigate to="/signup" />} />
      )}
      {/* هنا جعلنا SignUp هي الصفحة الرئيسية */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login saveUserData={saveUserData} />} />
      <Route
        path="/home"
        element={
          <ProtectRoute>
            <Home logout={logout} userData={userData} />
          </ProtectRoute>
        }
      />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/confirmCode" element={<ConfirmCode />} />
      <Route
        path="/blog"
        logout={logout}
        userData={userData}
        element={<TechBlog />}
      />
      <Route
        path="/about"
        logout={logout}
        userData={userData}
        element={<AboutSection />}
      />
      <Route
        path="/product"
        logout={logout}
        userData={userData}
        element={<ProductPage />}
      />
      <Route
        path="/productDetails/:id"
        logout={logout}
        userData={userData}
        element={<ProductDetails />}
      />
      <Route
        path="/Cart"
        logout={logout}
        userData={userData}
        element={<CartPage />}
      />
      <Route
        path="/WishList"
        logout={logout}
        userData={userData}
        element={<Wishlist />}
      />
      <Route
        path="*"
        element={<h1 className=" mt-5 text-center text-light">NOT FOUND !</h1>}
      />
    </Routes>

    //  <div className="container">
    //
    //    <h1> Pisho Work Here</h1>
    //    <>
    //      <FAQ />
    //      <PrivacyPolicy />
    //      <UsingPrivacy />
    //      <ItellectualProperty />
    //
    //    </>
    //  </div>
  );
};

export default App;

/*
  This is the main application file for the React project.

  Libraries used in this project:

  1. **React Router** (`react-router-dom`):
     - Used for managing navigation and routing in the application, allowing us to create a single-page application with multiple views.

  2. **Axios**:
     - A promise-based HTTP client for making API requests. It simplifies the process of sending GET, POST, PUT, DELETE requests to remote servers.

  3. **Styled Components**:
     - A library for writing CSS in JavaScript. It allows for styling components at the component level, enabling dynamic styling and theme support.

  4. **React Hook Form**:
     - A library for handling forms in React applications. It provides an easy way to manage form state and validation, reducing boilerplate code.

  5. **React Icons**:
     - A collection of popular icons that can be easily included in your React components. This helps in adding icons without needing to manage SVG files manually.

  6. **React Toastify**:
     - A library for adding toast notifications in your application. It allows us to display brief messages to the user, such as success or error alerts.

  7. **React Helmet**:
     - A library for managing the document head. It helps in setting meta tags, titles, and other head elements dynamically based on the page content.

  8. **Redux (or Zustand)** (optional):
     - State management libraries that help in managing the application's global state. Redux is widely used, while Zustand is a simpler alternative.

  9. **Framer Motion** (optional):
     - A library for creating animations and transitions in React applications. It allows for smooth animations and provides an easy API for managing them.

  10. **Formik** (optional):
      - An alternative library for handling forms and validation in React. It provides a simpler API and structure compared to React Hook Form.

  11. **React Query** (optional):
      - A library for managing server state, caching, and fetching data from APIs. It simplifies data-fetching logic and improves performance.
  11. **React Query** (optional):
      - A library for managing server state, caching, and fetching data from APIs. It simplifies data-fetching logic and improves performance.

  11. **React Query** (optional):
      - A library for managing server state, caching, and fetching data from APIs. It simplifies data-fetching logic and improves performance.
       طلبات الجماهير 
      12. **Bootstrap** 
      13. fortawesome 
      14. lucide-react  
      15. joi
      16. jwt
17.chakra ui      




  This setup provides a robust foundation for building a modern web application with React, ensuring a great user experience and maintainable code.
*/
