// import { useEffect, useState } from "react";

// export default function Viewusers() {

//   // USERS STATE
//   const [users, setUsers] = useState([]);

//   // UPDATE STATES
//   const [editId, setEditId] = useState(null);
//   const [editName, setEditName] = useState("");
//   const [editEmail, setEditEmail] = useState("");
//   const [editPhone, setEditPhone] = useState("");




//   // GET USERS
//   const getUsers = async () => {

//     const res = await fetch("http://localhost:5001/users");

//     if (res.ok) {

//       const data = await res.json();

//       setUsers(data);
//     }
//   };




//   // LOAD DATA WHEN PAGE STARTS
//   useEffect(() => {
//     getUsers();
//   }, []);




//   // DELETE USER
//   const deleteUser = async (id) => {

//     await fetch(`http://localhost:5001/deleteuser/${id}`, {
//       method: "DELETE"
//     });

//     getUsers();
//   };




//   // START UPDATE
//   const startUpdate = (user) => {

//     setEditId(user.id);
//     setEditName(user.name);
//     setEditEmail(user.email);
//     setEditPhone(user.phone_number);
//   };




//   // UPDATE USER
//   const updateUser = async () => {

//     const res = await fetch(`http://localhost:5001/updateuser/${editId}`, {

//       method: "PUT",

//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         name: editName,
//         email: editEmail,
//         phone_number: editPhone
//       })
//     });




//     if (res.ok) {

//       alert("User Updated Successfully");

//       setEditId(null);

//       getUsers();

//     } else {

//       alert("Failed To Update User");
//     }
//   };




//   return (

//     <div className="min-h-screen bg-gray-900 px-6 py-10">

//       <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
//         All Users
//       </h1>

//       <div className="grid gap-6 max-w-4xl mx-auto">

//         {users.map((user) => (

//           <div
//             key={user.id}
//             className="bg-gray-800 p-6 rounded-2xl shadow-xl"
//           >

//             {/* TOP */}
//             <div className="flex justify-between items-center mb-4">

//               <h2 className="text-2xl font-bold text-white">
//                 {user.name}
//               </h2>

//               <div className="flex gap-3">

//                 {/* UPDATE BUTTON */}
//                 <button
//                   onClick={() => startUpdate(user)}
//                   className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
//                 >
//                   Update
//                 </button>



//                 {/* DELETE BUTTON */}
//                 <button
//                   onClick={() => deleteUser(user.id)}
//                   className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
//                 >
//                   Delete
//                 </button>

//               </div>

//             </div>





//             {/* NORMAL VIEW */}
//             {editId !== user.id ? (

//               <div>

//                 <p className="text-gray-300 mb-2">
//                   Email: {user.email}
//                 </p>

//                 <p className="text-gray-300">
//                   Phone: {user.phone_number}
//                 </p>

//               </div>

//             ) : (

//               // UPDATE FORM
//               <div className="space-y-4">

//                 <input
//                   type="text"
//                   value={editName}
//                   onChange={(e) => setEditName(e.target.value)}
//                   placeholder="Enter Name"
//                   className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
//                 />



//                 <input
//                   type="email"
//                   value={editEmail}
//                   onChange={(e) => setEditEmail(e.target.value)}
//                   placeholder="Enter Email"
//                   className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
//                 />



//                 <input
//                   type="text"
//                   value={editPhone}
//                   onChange={(e) => setEditPhone(e.target.value)}
//                   placeholder="Enter Phone"
//                   className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
//                 />



//                 <div className="flex gap-3">

//                   {/* SAVE BUTTON */}
//                   <button
//                     onClick={updateUser}
//                     className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
//                   >
//                     Save
//                   </button>



//                   {/* CANCEL BUTTON */}
//                   <button
//                     onClick={() => setEditId(null)}
//                     className="bg-gray-500 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
//                   >
//                     Cancel
//                   </button>

//                 </div>

//               </div>
//             )}

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }






















import { useEffect, useState } from "react";

export default function Viewusers() {

  // STORE ALL USERS
  const [users, setUsers] = useState([]);

  // STORE USER ID FOR UPDATE
  const [editId, setEditId] = useState(null);

  // STORE INPUT VALUES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");



  // =========================
  // GET USERS FROM DATABASE
  // =========================
  const getUsers = async () => {

    const res = await fetch("http://localhost:5001/users");

    if (res.ok) {

      const data = await res.json();

      // SAVE USERS INSIDE STATE
      setUsers(data);
    }
  };



  // LOAD USERS WHEN PAGE STARTS
  useEffect(() => {
    getUsers();
  }, []);




  // =========================
  // DELETE USER
  // =========================
  const deleteUser = async (id) => {

    await fetch(`http://localhost:5001/deleteuser/${id}`, {
      method: "DELETE"
    });

    // REFRESH USERS
    getUsers();
  };




  // =========================
  // OPEN UPDATE FORM
  // =========================
  const editUser = (user) => {

    // SAVE USER ID
    setEditId(user.id);

    // PUT OLD DATA INSIDE INPUTS
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone_number);
  };




  // =========================
  // UPDATE USER
  // =========================
  const updateUser = async () => {

    const res = await fetch(
      `http://localhost:5001/updateuser/${editId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: name,
          email: email,
          phone_number: phone
        })
      }
    );



    if (res.ok) {

      alert("User Updated");

      // CLOSE UPDATE MODE
      setEditId(null);

      // REFRESH USERS
      getUsers();
    }
  };




  return (

    <div className="min-h-screen bg-gray-900 p-10">

      <h1 className="text-4xl text-cyan-400 font-bold text-center mb-10">
        Users Table
      </h1>




      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full border border-gray-700">




          {/* TABLE HEAD */}
          <thead className="bg-gray-800 text-white">

            <tr>

              <th className="border border-gray-700 p-3">
                ID
              </th>

              <th className="border border-gray-700 p-3">
                Name
              </th>

              <th className="border border-gray-700 p-3">
                Email
              </th>

              <th className="border border-gray-700 p-3">
                Phone
              </th>

              <th className="border border-gray-700 p-3">
                Actions
              </th>

            </tr>

          </thead>





          {/* TABLE BODY */}
          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="text-center text-white bg-gray-800"
              >




                {/* USER ID */}
                <td className="border border-gray-700 p-3">
                  {user.id}
                </td>





                {/* NAME */}
                <td className="border border-gray-700 p-3">

                  {editId === user.id ? (

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-700 p-2 rounded w-full"
                    />

                  ) : (

                    user.name
                  )}

                </td>





                {/* EMAIL */}
                <td className="border border-gray-700 p-3">

                  {editId === user.id ? (

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-700 p-2 rounded w-full"
                    />

                  ) : (

                    user.email
                  )}

                </td>





                {/* PHONE */}
                <td className="border border-gray-700 p-3">

                  {editId === user.id ? (

                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-700 p-2 rounded w-full"
                    />

                  ) : (

                    user.phone_number
                  )}

                </td>





                {/* ACTION BUTTONS */}
                <td className="border border-gray-700 p-3 space-x-2">

                  {editId === user.id ? (

                    <button
                      onClick={updateUser}
                      className="bg-green-500 px-4 py-2 rounded"
                    >
                      Save
                    </button>

                  ) : (

                    <button
                      onClick={() => editUser(user)}
                      className="bg-blue-500 px-4 py-2 rounded"
                    >
                      Update
                    </button>

                  )}





                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 px-4 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}