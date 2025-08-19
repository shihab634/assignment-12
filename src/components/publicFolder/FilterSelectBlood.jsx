import React, { useState } from "react";

const FilterSelectBlood = ({onFilterChange}) => {
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
        <option value="">All Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
    </div>
  );
};

export default FilterSelectBlood;
