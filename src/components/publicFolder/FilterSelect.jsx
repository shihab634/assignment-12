import { useState } from "react";

const FilterSelect = ({ onFilterChange }) => {
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
        <option value="pending">Pending</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
      </select>
    </div>
  );
};

export default FilterSelect;
