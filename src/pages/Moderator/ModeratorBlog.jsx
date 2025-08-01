import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useMonchaise from "../../hooks/useMonchaise";
import useAllBlogs from "../../hooks/useAllBlogs";
import FilterSelectBlog from "../../components/publicFolder/FilterSelectBlog";

const ModeratorBlog = () => {
  const monchaise = useMonchaise();
  const { blogs, setBlogs } = useAllBlogs();
 const [filter, setFilter] = useState("");
  

  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 

  const handleCreate = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill out both title and content");
      return;
    }

    const newBlog = {
      title,
      content,
      createdAt: new Date(),
      status: "draft",
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");

    monchaise.post("/post-blog", newBlog).then((res) => {
      console.log(res.data);
      toast("CREATED");
    });
  };
  const handleChange = (id) => {
  
    monchaise
      .patch(`/blog-status/${id}`, { status: "published" })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          const filtered = blogs.find((blog) => blog._id == id);
          filtered.status = "published";
          const rest = blogs.filter((blog) => blog._id != id);
          setBlogs([filtered, ...rest]);
          toast("Published");
        }
      });
  };
  const handleChangeStatus = (id) => {
    // console.log(id);
    monchaise.patch(`/blog-status/${id}`, { status: "draft" }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast("Unpublished");
        const filtered = blogs.find((blog) => blog._id == id);
        filtered.status = "draft";
        const rest = blogs.filter((blog) => blog._id != id);
        setBlogs([filtered, ...rest]);
      }
    });
  };
 const filteredData = filter
    ? blogs.filter((item) => item.status === filter)
    : blogs;
  if (!blogs) {
    return <p className="text-red-400">Loading</p>;
  }
  return (
    <div className="">
      <FilterSelectBlog onFilterChange={setFilter} ></FilterSelectBlog>
      <div className="max-w-5xl mx-auto p-4">
      <ToastContainer autoClose={500} />

      <div className="bg-base-200  p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a Blog</h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="input input-bordered"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Content</span>
          </label>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            className="text-black"
          />
        </div>

        <button className="btn btn-primary w-full mt-4" onClick={handleCreate}>
          Create Blog
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.length === 0 && (
          <p className="text-center text-gray-400 col-span-full">
            No blogs yet.
          </p>
        )}
        {filteredData.map((blog) => (
          <div
            key={blog._id}
            className="card bg-base-100 shadow-xl border border-base-300"
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
                  <div className="badge badge-accent">{blog.status}</div>
                  {blog.status == "draft" ? (
                    <div
                      onClick={() => handleChange(blog?._id)}
                      className="badge opacity-50 pointer-events-none badge-soft badge-success cursor-not-allowed "
                    >
                      publish
                    </div>
                  ) : (
                    <div
                      onClick={() => handleChangeStatus(blog?._id)}
                      className="badge opacity-50 pointer-events-none badge-soft badge-error cursor-not-allowed"
                    >
                      Unpublish
                    </div>
                  )}
                  
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

export default ModeratorBlog;
