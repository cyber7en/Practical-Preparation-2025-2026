export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      
      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-2xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          Welcome To Cyber7en
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-lg leading-relaxed">
          This is a modern React and Tailwind CSS project. 
          You can add users, view users, and manage your 
          application with a clean and responsive design.
        </p>

        {/* Button */}
        <button className="mt-8 bg-cyan-500 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300">
          Get Started
        </button>

      </div>

    </div>
  );
}
