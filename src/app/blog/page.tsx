import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  searchParams: { category?: string };
}

export default async function Blog({ searchParams }: BlogProps) {
  let posts: Post[] = [];
  const category = searchParams.category;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'force-cache'
    });
    
    if (response.ok) {
      const allPosts = await response.json();
      posts = allPosts.slice(0, 10);
      
      // Category filtering based on keywords in title/body
      if (category) {
        switch (category) {
          case 'tech':
            posts = posts.filter(post => 
              post.title.toLowerCase().includes('qui') || 
              post.title.toLowerCase().includes('ut') ||
              post.body.toLowerCase().includes('voluptat') ||
              [1, 2, 3, 4].includes(post.id)
            );
            break;
          case 'lifestyle':
            posts = posts.filter(post => 
              post.title.toLowerCase().includes('sunt') || 
              post.title.toLowerCase().includes('et') ||
              post.body.toLowerCase().includes('aut') ||
              [5, 6, 7, 8].includes(post.id)
            );
            break;
          case 'education':
            posts = posts.filter(post => 
              post.title.toLowerCase().includes('nesciunt') || 
              post.title.toLowerCase().includes('dolorem') ||
              post.body.toLowerCase().includes('quia') ||
              [9, 10].includes(post.id)
            );
            break;
        }
      }
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Posts` : 'Blog Posts'}
      </h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.body.substring(0, 150)}...</p>
            <Link 
              href={`/blog/${post.id}`} 
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="text-gray-500 text-center py-8">No posts found for this category.</p>
      )}
    </div>
  );
}