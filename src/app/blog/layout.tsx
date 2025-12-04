import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = ['All', 'Tech', 'Lifestyle', 'Education'];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link 
                href={category === 'All' ? '/blog' : `/blog?category=${category.toLowerCase()}`}
                className="text-blue-600 hover:text-blue-800 block py-2 px-3 rounded hover:bg-blue-50 transition-colors"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
