import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tshirt = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      // await axios
      //
      //   .then((res) => {
      //     setData(res.data);

      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      const result = await axios.get("https://fakestoreapi.com/products");
      console.log(result);
      setData(result.data);
    };

    fetchdata();
  }, []);

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md">
              <Link to={`/Productdetails/${product.id}`} className="text-blue-500">
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "200px", height: "200px" }}
                    className="mx-auto"
                  />
                  <h2 className="text-lg font-bold mt-4">{product.title}</h2>
                  <p className="text-gray-700">{product.description}</p>
                  <p className="text-gray-800 font-semibold mt-2">Price: ${product.price}</p>
                  <p className="text-gray-800 font-semibold">Category: {product.category}</p>
                  <p className="text-gray-800 font-semibold">
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                  </p>
                  {/* <p className="mt-4">
                
              </p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="">
      <div className=" flex  flex w-1/4 give flex as equal and make other components display below">
        {data.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <p>
              <Link to={`/Productdetails/${product.id}`}>Product Details</Link>
            </p>
          </div>
        ))}
      </div>
    </div> */}
    </>
  );
};

export default Tshirt;
