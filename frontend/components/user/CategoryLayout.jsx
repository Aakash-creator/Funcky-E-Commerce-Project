import { Link, Outlet } from "react-router-dom";

const CategoryLayout = () => {
  return (
    <div>
      Image
      <nav>
        <Link to="/tshirt">T-Shirt</Link>
        <Link to="/jeans">Jeans</Link>
        <Link to="/formalshirts">Formal Shirts</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default CategoryLayout;
