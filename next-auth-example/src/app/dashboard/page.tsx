'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="px-4 py-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
      </header>
      <main className="p-6">
        <p>Welcome, {session.user?.email}</p>
        <button
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-700"
          onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        >
          Sign Out
        </button>
      </main>
    </div>
  );
}
