import { useState } from "react";

export default function Adduser() {

  // INPUT STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");



  // INSERT USER
  const addUser = async () => {

    await fetch("http://localhost:5001/adduser", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        phone_number
      })

    });

    // CLEAR INPUTS
    setName("");
    setEmail("");
    setPhoneNumber("");
  };



  return (

    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">

      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-xl">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Add User
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none mb-4"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none mb-4"
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none mb-6"
        />

        <button
          onClick={addUser}
          className="w-full bg-cyan-500 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Add User
        </button>

      </div>

    </div>
  );
}
