// import { useEffect, useState } from "react";

// export default function Viewusers() {

//   // STORE ALL USERS
//   const [users, setUsers] = useState([]);

//   // STORE USER ID FOR UPDATE
//   const [editId, setEditId] = useState(null);

//   // STORE INPUT VALUES
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");



//   // =========================
//   // GET USERS FROM DATABASE
//   // =========================
//   const getUsers = async () => {

//     const res = await fetch("http://localhost:5001/users");

//     if (res.ok) {

//       const data = await res.json();

//       // SAVE USERS INSIDE STATE
//       setUsers(data);
//     }
//   };



//   // LOAD USERS WHEN PAGE STARTS
//   useEffect(() => {
//     getUsers();
//   }, []);




//   // =========================
//   // DELETE USER
//   // =========================
//   const deleteUser = async (id) => {

//     await fetch(`http://localhost:5001/deleteuser/${id}`, {
//       method: "DELETE"
//     });

//     // REFRESH USERS
//     getUsers();
//   };




//   // =========================
//   // OPEN UPDATE FORM
//   // =========================
//   const editUser = (user) => {

//     // SAVE USER ID
//     setEditId(user.id);

//     // PUT OLD DATA INSIDE INPUTS
//     setName(user.name);
//     setEmail(user.email);
//     setPhone(user.phone_number);
//   };




//   // =========================
//   // UPDATE USER
//   // =========================
//   const updateUser = async () => {

//     const res = await fetch(
//       `http://localhost:5001/updateuser/${editId}`,
//       {
//         method: "PUT",

//         headers: {
//           "Content-Type": "application/json"
//         },

//         body: JSON.stringify({
//           name: name,
//           email: email,
//           phone_number: phone
//         })
//       }
//     );



//     if (res.ok) {

//       alert("User Updated");

//       // CLOSE UPDATE MODE
//       setEditId(null);

//       // REFRESH USERS
//       getUsers();
//     }
//   };




//   return (

//     <div className="min-h-screen bg-gray-900 p-10">

//       <h1 className="text-4xl text-cyan-400 font-bold text-center mb-10">
//         Users Table
//       </h1>




//       {/* TABLE */}
//       <div className="overflow-x-auto">

//         <table className="w-full border border-gray-700">




//           {/* TABLE HEAD */}
//           <thead className="bg-gray-800 text-white">

//             <tr>

//               <th className="border border-gray-700 p-3">
//                 ID
//               </th>

//               <th className="border border-gray-700 p-3">
//                 Name
//               </th>

//               <th className="border border-gray-700 p-3">
//                 Email
//               </th>

//               <th className="border border-gray-700 p-3">
//                 Phone
//               </th>

//               <th className="border border-gray-700 p-3">
//                 Actions
//               </th>

//             </tr>

//           </thead>





//           {/* TABLE BODY */}
//           <tbody>

//             {users.map((user) => (

//               <tr
//                 key={user.id}
//                 className="text-center text-white bg-gray-800"
//               >




//                 {/* USER ID */}
//                 <td className="border border-gray-700 p-3">
//                   {user.id}
//                 </td>





//                 {/* NAME */}
//                 <td className="border border-gray-700 p-3">

//                   {editId === user.id ? (

//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="bg-gray-700 p-2 rounded w-full"
//                     />

//                   ) : (

//                     user.name
//                   )}

//                 </td>





//                 {/* EMAIL */}
//                 <td className="border border-gray-700 p-3">

//                   {editId === user.id ? (

//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="bg-gray-700 p-2 rounded w-full"
//                     />

//                   ) : (

//                     user.email
//                   )}

//                 </td>





//                 {/* PHONE */}
//                 <td className="border border-gray-700 p-3">

//                   {editId === user.id ? (

//                     <input
//                       type="text"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="bg-gray-700 p-2 rounded w-full"
//                     />

//                   ) : (

//                     user.phone_number
//                   )}

//                 </td>





//                 {/* ACTION BUTTONS */}
//                 <td className="border border-gray-700 p-3 space-x-2">

//                   {editId === user.id ? (

//                     <button
//                       onClick={updateUser}
//                       className="bg-green-500 px-4 py-2 rounded"
//                     >
//                       Save
//                     </button>

//                   ) : (

//                     <button
//                       onClick={() => editUser(user)}
//                       className="bg-blue-500 px-4 py-2 rounded"
//                     >
//                       Update
//                     </button>

//                   )}





//                   <button
//                     onClick={() => deleteUser(user.id)}
//                     className="bg-red-500 px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// }



















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
