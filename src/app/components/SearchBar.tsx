import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (filters: {
    query: string;
    location: string;
    salaryRange: string;
  }) => void;
}

/** Search bar component with filters */
export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query, location, salaryRange });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
    >
      <input
        type="text"
        placeholder="Search by Job title / Company Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Filter by location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Filter by salary range..."
        value={salaryRange}
        onChange={(e) => setSalaryRange(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        title="Search"
        type="submit"
        className="px-4 py-2 bg-purple-900 text-white rounded"
      >
        Search
      </button>
    </form>
  );
}
