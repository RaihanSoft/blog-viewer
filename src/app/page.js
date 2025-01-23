'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
