import React from 'react';
import { useLoaderData } from 'react-router';

const BlogDetails = () => {
  const blog = useLoaderData()
  // console.log(data);
  
  return (
    <div className='bg-white py-30  min-h-screen'>
      <div className="card bg-base-100   shadow-lg border border-base-300 max-w-3xl  mx-auto  p-6 rounded-2xl py-6">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

      <div
        className="prose max-w-none mb-4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <div className="text-sm text-gray-500 flex justify-between">
        <span>Status: <span className="capitalize font-medium">{blog.status}</span></span>
        <span>Posted at: {new Date(blog.createdAt).toLocaleString()}</span>
      </div>
    </div>
    </div>
  );
};

export default BlogDetails;