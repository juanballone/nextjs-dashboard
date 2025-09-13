// app/ui/oauth-buttons.tsx
'use client';

import { signIn } from 'next-auth/react';
// You can use an icon library like 'react-icons' for the logos
// npm install react-icons
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';

export default function OAuthButtons() {
  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-100"
      >
        <FcGoogle size={24} />
        <span className="text-sm font-medium text-gray-700">
          Continue with Google
        </span>
      </button>
      <button
        onClick={() => signIn('azure-ad', { callbackUrl: '/dashboard' })}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-100"
      >
        <FaMicrosoft size={24} color="#0078D4" />
        <span className="text-sm font-medium text-gray-700">
          Continue with Microsoft
        </span>
      </button>
    </div>
  );
}