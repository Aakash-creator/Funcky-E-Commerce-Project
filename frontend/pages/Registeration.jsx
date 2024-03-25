import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Registeration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    const { name, email, password } = formData;
    // console.log(name, username, password);
    try {
      axios
        .post(
          "http://localhost:3535/register",
          { name, email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((result) => {
          if (result.data == "User Created Sucessfully") {
            console.log("User Created Sucessfully");
            navigate("/login");
          } else {
            if (result.data == `User already exist using email ${email}, try other usernames`) {
              console.log("Username Already exist try using different username");
            } else console.log("Server is Down!!");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* // <div> 
    //   <div>
    //     <div>
    //       <p className="text-8xl	text-red-600">Registration Page</p>
    //       <form onSubmit={handleSubmit}>
    //         <div>
    //           <div>
    //             <label htmlFor="name">
    //               <strong>Name:</strong>
    //             </label>
    //             <input
    //               type="text"
    //               name="name"
    //               value={formData.name}
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="username">
    //               <strong>E-mail:</strong>
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               autoComplete="email"
    //               value={formData.email}
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="password">
    //               <strong>Password:</strong>
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               autoComplete="new-password"
    //               value={formData.password}
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //           <button type="submit">
    //             <strong>Register</strong>
    //           </button>
    //         </div>
    //       </form>
    //       <hr />
    //       <div>
    //         <p>Already have a account</p>
    //         <button>
    //           <strong>Login</strong>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>*/}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="./src/assets/Web-Logo.png" alt="logo" />
            Food-To-Go
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registration
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@mail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <Link
                        to="/about"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/Login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registeration;
