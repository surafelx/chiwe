// app/profile-setup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfileSetup = () => {
  const [username, setUsername] = useState('');
  const [animal, setAnimal] = useState('');
  const [color, setColor] = useState('');
  const router = useRouter();

  const handleProfileSetup = (e: React.FormEvent) => {
    e.preventDefault();
    // Process profile setup (e.g., save to the backend)
    console.log({ username, animal, color });
    router.push('/trivia'); // Redirect to trivia page after profile setup
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile Setup</h2>
      <form onSubmit={handleProfileSetup}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="animal" className="block text-sm font-medium text-gray-700">
            Choose an Animal
          </label>
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Animal</option>
            <option value="Lion">Lion</option>
            <option value="Tiger">Tiger</option>
            <option value="Elephant">Elephant</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Choose a Color
          </label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full mt-1"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileSetup;
