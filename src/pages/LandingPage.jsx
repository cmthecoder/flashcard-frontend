import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl text-center font-bold mb-4">
          Welcome to Study In A Flash!
        </h1>
        <div className="flex flex-col space-y-4">
          <Link to="/login" >
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
