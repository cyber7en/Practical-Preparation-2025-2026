import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* Logo / Title */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Cyber7en
          </h1>

          {/* Navigation Links */}
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <Link
                to="/Home"
                className="hover:text-cyan-400 transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Adduser"
                className="hover:text-cyan-400 transition duration-300"
              >
                Add User
              </Link>
            </li>

            <li>
              <Link
                to="/Viewusers"
                className="hover:text-cyan-400 transition duration-300"
              >
                View Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
