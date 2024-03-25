import Layout from "../components/Layout";
import CategoryLayout from "../components/user/CategoryLayout";
import Jeans from "../components/user/products/Jeans";
import ProductDetails from "../components/user/ProductDetails";
import Tshirt from "../components/user/products/Tshirt";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registeration from "../pages/Registeration";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<CategoryLayout />}>
              <Route index element={<Tshirt />} />
              <Route path="/tshirt" element={<Tshirt />} />
              <Route path="/jeans" element={<Jeans />} />
              <Route path="/formalshirt" element={<Tshirt />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              {/* <Route path="/card/:id/:title/:price" element={<ProductDetails />} /> */}

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
