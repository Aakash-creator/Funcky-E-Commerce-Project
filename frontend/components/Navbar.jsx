import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          {/* add navbar code here */}
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
