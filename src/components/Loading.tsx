const Loading = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
        <p className="text-sm text-gray-500">
          Please wait while we fetch the data.
        </p>
      </div>
    </main>
  );
}

export default Loading;