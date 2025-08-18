import React from 'react';
import useAllBlogs from '../../hooks/useAllBlogs';
import { Link } from 'react-router';

const Blog = () => {
  const {blogs} = useAllBlogs()
  return (
    <div className="">
      <div className='bg-white '>
      <h2 className="text-center font-bold pt-3 mb-10 text-red-600 text-4xl">Blog Section</h2>
      <div className="grid grid-cols-1 w-11/12 mx-auto pb-10 md:grid-cols-2 gap-6">
        {blogs.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No blogs yet.
          </p>
        )}
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="card  border bg-white text-black  p-4 rounded   shadow-xl  border-base-300"
          >
            <div className="card-body">
              <h3 className="card-title">{blog.title}</h3>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <div className="flex justify-between items-baseline">
                <p className="text-xs text-gray-500 mt-4">
                 
                </p>
                <div className="flex flex-col space-y-2 items-center">
                  <Link className="badge badge-accent" to={`${blog._id}`}>View</Link>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;