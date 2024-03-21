import { Link } from "react-router-dom";
// import Tshirt from "./Tshirt";

const Product = () => {
  return (
    <>
      All tshirts cards <br />
      <Link to="/category/product/ProductDetails">Denim Shirt</Link>
      {/* <Tshirt /> */}
      {/* we have to render here cards components multiple of the above fields  */}
    </>
  );
};

export default Product;
