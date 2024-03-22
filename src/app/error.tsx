"use client";

function error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-red-500">
      <h1 className="text-6xl font-bold">500</h1>
      <p className="mt-3 text-xl">Internal Server Error</p>
      <p className="mt-3">Something went wrong on our end.</p>
      <a href="/" className="mt-6 text-blue-200 underline">
        Go back to Home
      </a>
    </div>
  );
}

export default error;
