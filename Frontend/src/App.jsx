// import { useState } from 'react';


// export default function Counter() {

//   const [count, setcount]=useState(0);

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setcount(count +1)}>Add</button>
      
//     </>
//   )
// }




// import { useState } from 'react';



// export default function NameStore() {

//   const[Name, setName]=useState("")
//   return (
//     <>
//     <h1>{Name}</h1>
//     <input type="text" onChange={(e)=>setName(e.target.value)} />
      
//     </>
//   )
// }






// import { useEffect, useState } from 'react';


// export default function Messages() {

//   const[Message, setMessage]=useState("");
  
//   useEffect(()=>{
//     fetch("http://localhost:5001")
//     .then((res)=>res.text())
//     .then((data)=>setMessage(data))
//   }, [])
//   return (
//     <>
//     <h1>{Message}</h1>
//     </>
//   )
// }




// import { useEffect, useState } from "react";

// export default function App() {

//   // INPUT STATES
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone_number, setPhoneNumber] = useState();

//   // USERS STATE
//   const [users, setUsers] = useState([]);



//   // INSERT USER
//   const addUser = async () => {

//     await fetch("http://localhost:5001/adduser", {

//       method: "POST",

//       headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         name,
//         email,
//         phone_number
//       })

//     });

//     // REFRESH DATA
//     getUsers();

//     // CLEAR INPUTS
//     setName("");
//     setEmail("");
//     setPhoneNumber("");
//   };




//   // GET USERS
//   const getUsers = async () => {

//     const res = await fetch("http://localhost:5001/users");

//     const data = await res.json();

//     setUsers(data);
//   };




//   // LOAD DATA WHEN PAGE STARTS
//   useEffect(() => {
//     getUsers();
//   }, []);



// const deleteUser = async (id) => {

//   await fetch(`http://localhost:5001/deleteuser/${id}`, {
//     method: "DELETE"
//   });

//   getUsers();
// };




//   return (
//     <div>

//       <h1>User Form</h1>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br /><br />

//       <input
//         type="text"
//         placeholder="Enter Phone Number"
//         value={phone_number}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={addUser}>
//         Add User
//       </button>

//       <hr />

//       <h1>All Users</h1>

//       {users.map((user) => (

//         <div key={user.id}>
//           <button onClick={() => deleteUser(user.id)}>
//               Delete
//           </button>

//           <h3>Name: {user.name}</h3>

//           <p>Email: {user.email}</p>

//           <p>Phone: {user.phone_number}</p>

//           <hr />

//         </div>

//       ))}

//     </div>
//   );
// }



import './App.css'
import Navbar from "./Components/Navbar";
import Home from './Components/home';
import Adduser from './Components/adduser';
import Viewusers from './Components/viewusers';
import{BrowserRouter, Routes, Route} from 'react-router-dom'



export default function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Adduser' element={<Adduser/>} />
      <Route path='/Viewusers' element={<Viewusers/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

