import { Link } from 'react-router-dom';

const Login = () => (
  <div className="min-h-[80vh] flex justify-center items-center py-16 px-5 bg-gray-50">
    <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-center text-gray-800 mb-2 text-3xl">Welcome Back</h2>
      <p className="text-center text-gray-500 mb-">Login to your account</p>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-800">Email Address</label>
          <input type="email" placeholder="john@example.com" className="p-3 border-2 border-gray-200 rounded-lg transition-all focus:outline-none focus:border-orange-500" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-800">Password</label>
          <input type="password" placeholder="••••••••" className="p-3 border-2 border-gray-200 rounded-lg transition-all focus:outline-none focus:border-orange-500" />
        </div>
        <button type="submit" className="w-full mt-2 bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-500">
          Login
        </button>
      </form>
      <div className="text-center mt-6 text-gray-500">
        Don't have an account? <Link to="/signup" className="text-orange-600 no-underline">Sign Up</Link>
      </div>
    </div>
  </div>
);

export default Login;