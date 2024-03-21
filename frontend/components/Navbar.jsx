import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          {/* add navbar code here */}
          Navbar cart
          <Link to="/">Home</Link>
          {/* error at / route  */}
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
          <br />
          <br />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
