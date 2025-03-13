import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddletName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = { firstName,middleName, lastName, email, password };
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem("users", JSON.stringify([...storedUsers, userInfo]));

    alert("Signup successful! ✅ Redirecting to login...");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          onChange={(e) => setMiddletName(e.target.value)}
          value={middleName}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
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
        <div className=" justify-between gap-15">
<input type="checkbox" name="" id="" />
<label htmlFor="">i agree to terms and policy</label>
       
        <button
          type="submit"
          className="w-full bg-blue-400 text-white py-2 px-0.5 rounded-md hover:bg-blue-700"
        >
          Signup
        </button>
        </div>
      </form>
    </div>
  );
};

export default UserSignup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify"

// const UserSignup = () => {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [infoArry, setinfoArray] = useState([]);

//   const handleChangeF = (e) => {
//     e.preventDefault();

//     let info = { firstName, lastName, email, password };

//     console.log(info);

//     // infoArry.push(info);
//     // console.log(infoArry);
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     localStorage.setItem("users", JSON.stringify([...storedUsers, info]));

//     alert("Signup successful! ✅ Redirecting to login...");

//     navigate("/login");
//   };
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form action="" className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">User Signup</h2>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           onChange={(e) => setFirstName(e.target.value)}
//           value={firstName}
//           required
//           className="w-full p-2 border border-gray-300 rounded-md mb-2"
//         />
//         <input
//           type="text"
//           name="firstName"
//           placeholder="Last Name"
//           onChange={(e) => setLastName(e.target.value)}
//           value={lastName}
//           required
//           className="w-full p-2 border border-gray-300 rounded-md mb-2"
//         />
//         <input
//           type="emaiL"
//           name="email"
//           placeholder="Email Address"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email} required
//           className="w-full p-2 border border-gray-300 rounded-md mb-2"
//         />
//         <input
//           type="password"
//           name="passwword"
//           placeholder="Password "
//           onChange={(e) => setPassword(e.target.value)}
//           value={password} required
//           className="w-full p-2 border border-gray-300 rounded-md mb-2"
//         />
//         <input
//           type="submit"
//           value="signup"
//           onClick={handleChangeF}
//           className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
//         />
//       </form>
//     </div>
//   );
// };

// export default UserSignup;
