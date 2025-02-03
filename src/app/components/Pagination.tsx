import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/** Pagination component with previous and next buttons */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        title="Previous Page"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-purple-900 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      <span className="mx-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        title="Next Page"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-purple-900 text-white rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
}
