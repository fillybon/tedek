import React from "react";
import { HiSearch } from "react-icons/hi";

const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-48 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <button className="absolute right-3 top-[.6rem] text-slate-600">
        <HiSearch size={24} className="" />
      </button>
    </div>
  );
};

export default SearchBar;
