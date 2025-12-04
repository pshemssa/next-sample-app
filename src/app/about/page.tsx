interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export default async function About() {
  let user: User | null = null;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      cache: 'no-store' // This ensures SSR
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    user = await response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About</h1>
        <p className="text-lg mb-8 text-gray-600">This is the about page of my Next.js sample project.</p>
        
        {user ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Author Information</h2>
            <div className="space-y-3">
              <p className="text-gray-700"><strong className="text-blue-600">Name:</strong> {user.name}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Username:</strong> {user.username}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Email:</strong> {user.email}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Phone:</strong> {user.phone}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Website:</strong> {user.website}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Company:</strong> {user.company.name}</p>
              <p className="text-gray-700"><strong className="text-blue-600">Location:</strong> {user.address.street}, {user.address.city}</p>
            </div>
          </div>
        ) : (
          <p className="text-red-500">Failed to load author information.</p>
        )}
      </div>
    </div>
  );
}
