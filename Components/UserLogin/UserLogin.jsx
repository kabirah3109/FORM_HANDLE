import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); // Store logged-in user
      setErrorMessage("");
      alert("Login successful! 🎉");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">User Login</h2>

        {errorMessage && (
          <p className="text-red-600 text-center mb-3">{errorMessage}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";

// const UserLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChangeF = (e) => {
//       e.preventDefault()
//       const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

//       const foundUser = storedUsers.find(
//         (user) => user.email === email && user.password === password
//       );
//       if (foundUser) {
//         setErrorMessage("");
//         alert("Login successful! 🎉");
//         navigate("/dashboard");
//       } else {
//         setErrorMessage("Invalid email or password ❌");
//       }
//     };
//   return (

//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         className="bg-white p-8 rounded-lg shadow-md w-96"
//         onSubmit={handleChangeF}
//       >
//         <h2 className="text-2xl font-bold text-center mb-4">User Login</h2>

//         {errorMessage && (
//           <p className="text-red-600 text-center mb-3">{errorMessage}</p>
//         )}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           required
//           className="w-full p-2 border border-gray-300 rounded-md mb-2"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           required
//           className="w-full p-2 border border-gray-300 rounded-md mb-2"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
//         >
//           Login
//         </button>

//         </form>
//     </div>
//   );
// };

// export default UserLogin;
