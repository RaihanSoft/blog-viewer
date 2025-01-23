'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data));
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
};

export default BlogDetails;
