import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import useMonchaise from "../../hooks/useMonchaise";
import { toast, ToastContainer } from "react-toastify";
import useAllBlogs from "../../hooks/useAllBlogs";
import Swal from "sweetalert2";
import FilterSelectBlog from "./FilterSelectBlog";

const BlogManager = () => {
  const monchaise = useMonchaise();
  const { blogs, setBlogs } = useAllBlogs();
 const [filter, setFilter] = useState("");
  // console.log(new Date());

  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [blogss, setBlogss] = useState([]);

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
    // console.log(id);
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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        monchaise.delete(`/delete-blog/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // console.log(2);
            const filteredData = blogs.filter((blog) => id != blog._id);
            setBlogs(filteredData);
          }
        });
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
                  {/* Posted at: {blog.createdAt} */}
                </p>
                <div className="flex flex-col space-y-2 items-center">
                  <div className="badge badge-accent">{blog.status}</div>
                  {blog.status == "draft" ? (
                    <div
                      onClick={() => handleChange(blog?._id)}
                      className="badge badge-soft badge-success cursor-pointer "
                    >
                      publish
                    </div>
                  ) : (
                    <div
                      onClick={() => handleChangeStatus(blog?._id)}
                      className="badge badge-soft badge-error cursor-pointer"
                    >
                      Unpublish
                    </div>
                  )}
                  <div
                    onClick={() => handleDelete(blog._id)}
                    className="badge badge-dash cursor-pointer badge-error"
                  >
                    Delete
                  </div>
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

export default BlogManager;
