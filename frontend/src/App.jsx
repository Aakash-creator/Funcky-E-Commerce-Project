import CategoryLayout from "../components/CategoryLayout";
import Tshirt from "../components/Tshirt";
import Jeans from "../components/Jeans";
import Layout from "../components/Layout";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registeration from "../pages/Registeration";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="text-9x1 ">this is my project </div>
      <BrowserRouter>
        <Routes>
          {/* Layout Contains headers and footer component  */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="category" element={<CategoryLayout />}>
              <Route index element={<CategoryLayout />} />
              <Route path="t-shirt" element={<Tshirt />} />
              <Route path="productdetails" element={<ProductDetails />} />
              <Route path="jeans" element={<Jeans />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
