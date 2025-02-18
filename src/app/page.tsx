"use client";

import React, { useEffect, useState, Suspense } from "react";
import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { fetchJobs } from "../services/api";
import { Job } from "../types/job";
import { Loader } from "./components/Loader";
import { useTheme } from "@mui/material/styles";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  const muiTheme = useTheme();
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const jobsPerPage = 20;

  // Fetch jobs when the page or filters change
  const loadJobs = async (filters = {}) => {
    setLoading(true);
    const { jobs: fetchedJobs, totalJobs } = await fetchJobs(
      filters,
      page,
      jobsPerPage
    );
    setJobs(fetchedJobs);

    setTotalPages(Math.ceil(totalJobs / jobsPerPage));
    setLoading(false);
  };

  // Initial load
  useEffect(() => {
    loadJobs();
  }, [page]);

  // Handle search
  const handleSearch = async (filters: {
    query: string;
    location: string;
    salaryRange: string;
  }) => {
    setPage(1);
    await loadJobs(filters);
  };

  if (loading) return <Loader />;

  return (
    <div
      style={{
        backgroundColor: muiTheme.palette.background.default,
        color: muiTheme.palette.text.primary,
      }}
    >
      <Suspense fallback={<Loader />}>
        <div className="container mx-auto p-4">
          <header className="p-4 flex justify-between items-center">
            <h1 className="text-2xl text-purple-900 font-bold mb-4">
              Job Board Dashboard
            </h1>
            <ThemeToggle />
          </header>
          <SearchBar onSearch={handleSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </Suspense>
    </div>
  );
}
