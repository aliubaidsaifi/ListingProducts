import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
      navigate("/");
      
    } catch (error) {
      alert('Failed to log in: ' + error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto my-20 bg-white rounded-lg border border-gray-200 shadow-md">
    <h1 className="text-lg font-bold mb-4 text-center">Login</h1>
    <form onSubmit={handleLogin} className="space-y-4">
        <div className="flex flex-col space-y-2">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
            />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log In
        </button>
        <div className="mt-4 text-center">
        <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">Don't have an account? Sign up</Link>
    </div>
    </form>
</div>

  );
};

export default Login;
