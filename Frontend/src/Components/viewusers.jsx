import { useEffect, useState } from "react";

export default function Viewusers() {

  // USERS STATE
  const [users, setUsers] = useState([]);




  // GET USERS
  const getUsers = async () => {

    const res = await fetch("http://localhost:5001/users");

    const data = await res.json();

    setUsers(data);
  };




  // LOAD DATA WHEN PAGE STARTS
  useEffect(() => {
    getUsers();
  }, []);




  // DELETE USER
  const deleteUser = async (id) => {

    await fetch(`http://localhost:5001/deleteuser/${id}`, {
      method: "DELETE"
    });

    getUsers();
  };




  return (

    <div className="min-h-screen bg-gray-900 px-6 py-10">

      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
        All Users
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">

        {users.map((user) => (

          <div
            key={user.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl"
          >

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-2xl font-bold text-white">
                {user.name}
              </h2>

              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Delete
              </button>

            </div>

            <p className="text-gray-300 mb-2">
              Email: {user.email}
            </p>

            <p className="text-gray-300">
              Phone: {user.phone_number}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
