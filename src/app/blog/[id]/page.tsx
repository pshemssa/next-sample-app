import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let post: Post | null = null;
  let author: User | null = null;

  try {
    // Fetch post with ISR (revalidate every 60 seconds)
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: { revalidate: 60 } // This enables ISR
    });
    
    if (postResponse.ok) {
      post = await postResponse.json();
      
      // Fetch author information if post exists
      if (post) {
        const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
          next: { revalidate: 60 }
        });
        
        if (authorResponse.ok) {
          author = await authorResponse.json();
        }
      }
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-red-600">Post Not Found</h1>
        <p className="mt-4">The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
            {author && (
              <div className="flex items-center text-gray-600">
                <span>By <span className="text-blue-600 font-medium">{author.name}</span> (@{author.username})</span>
                <span className="mx-2">•</span>
                <span>{author.email}</span>
              </div>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">{post.body}</p>
          </div>
          
          <footer className="mt-8 pt-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Blog
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}

// Generate static params for the first 10 posts
export async function generateStaticParams() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await response.json();
    
    return posts.slice(0, 10).map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}