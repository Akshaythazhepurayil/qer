// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsForRent from "./pages/ProductsForRent";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
// import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="products-for-rent" element={<ProductsForRent />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
