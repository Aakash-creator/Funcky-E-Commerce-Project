// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// //
// const ProductDetails = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         console.log(id);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   return (
//     <div>
//       <div className=" w-4/5 bg-slate-400">
//         {product && (
//           <div key={id}>
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <p>Category: {product.category}</p>
//             <p>
//               Rating: {product.rating.rate} ({product.rating.count} reviews)
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded-lg shadow-md p-6">
        {product && (
          <div key={id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto md:mx-0"
              style={{ width: "200px", height: "200px" }}
            />
            <div>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700 my-2">{product.description}</p>
              <p className="text-gray-800 font-semibold">Price: ${product.price}</p>
              <p className="text-gray-800">Category: {product.category}</p>
              <p className="text-gray-800">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
