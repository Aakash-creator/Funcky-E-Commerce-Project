import { Link, Outlet } from "react-router-dom";
// import Product from "./Product";

const CategoryLayout = () => {
  return (
    <>
      categories <span></span>
      <Link to="/category/t-shirt">T-Shirt</Link>
      <Link to="/category/jeans">Jeans</Link>
      <br />
      <Outlet />
      <hr />
    </>
  );
};

export default CategoryLayout;
