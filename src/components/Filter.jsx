import React from "react";
export default function Filter({ value, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <label className="text-sm text-gray-600">Type:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full sm:w-auto px-3 py-2 border rounded-xl"
      >
        <option value="all">All</option>
        <option value="sale">Sale</option>
        <option value="rent">Rent</option>
      </select>
    </div>
  );
}
