import React, { useState } from 'react';
import { JoditEditor } from 'jodit-react';

const BlogPage = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleCreateBlog = () => {
    const newBlog = {
      id: Date.now(),
      title,
      thumbnail,
      content,
      status: 'draft',
    };
    setBlogs([newBlog, ...blogs]);
    setTitle('');
    setThumbnail('');
    setContent('');
  };

  const toggleStatus = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, status: blog.status === 'draft' ? 'published' : 'draft' }
          : blog
      )
    );
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const filteredBlogs =
    filter === 'all' ? blogs : blogs.filter((blog) => blog.status === filter);

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-xl font-bold">Create Blog</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Thumbnail Image URL from imgbb"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="input input-bordered w-full"
        />
        <JoditEditor value={content} onChange={setContent} />
        <button onClick={handleCreateBlog} className="btn btn-primary">
          Create
        </button>
      </div>

      <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold">All Blogs</h3>
        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="card border p-4 rounded-lg shadow space-y-2"
          >
            <img src={blog.thumbnail} alt="thumbnail" className="w-full h-48 object-cover rounded" />
            <h4 className="font-bold text-lg">{blog.title}</h4>
            <div
              className="text-sm prose max-h-40 overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleStatus(blog.id)}
                className="btn btn-sm btn-secondary"
              >
                {blog.status === 'draft' ? 'Publish' : 'Unpublish'}
              </button>
              <button
                onClick={() => deleteBlog(blog.id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
