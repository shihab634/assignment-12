import { useState } from "react";

const FilterSelectBlog = ({ onFilterChange }) => {
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setStatus(value);
    onFilterChange(value);
  };

  return (
    <div className="flex justify-center mb-4">
      <select
        className="select select-bordered w-full max-w-xs"
        value={status}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
       
      </select>
    </div>
  );
};

export default FilterSelectBlog;
