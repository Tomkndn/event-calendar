import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-indigo-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Sign In Required
        </h1>
        <p className="text-gray-600 mb-6">
          You need to sign in to access this page. Please log in to continue.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

export default Redirect;
