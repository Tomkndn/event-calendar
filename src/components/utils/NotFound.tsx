import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300 px-6 text-center space-y-8">
      <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
      <p className="text-lg sm:text-xl text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
