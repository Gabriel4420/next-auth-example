'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('Credentials', {
      redirect: false,
      email,
      password,
    });

    console.log(result)

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-black">Sign In</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-800">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-800">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
