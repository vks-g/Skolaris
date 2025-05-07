export default function SignupPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  