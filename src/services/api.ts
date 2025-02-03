import axios from "axios";
import { Job } from "../types/job";

const API_URL = "https://remotive.com/api/remote-jobs";

export const fetchJobs = async (
  filters: { query?: string; location?: string; salaryRange?: string } = {},
  page: number = 1,
  jobsPerPage: number = 10 // Number of jobs per page
): Promise<{ jobs: Job[]; totalJobs: number }> => {
  // Simulate API call or fetch from a real API
  const response = await fetch("https://remotive.com/api/remote-jobs");
  const data = await response.json();

  // Filter jobs based on the criteria
  const filteredJobs = data.jobs.filter((job: Job) => {
    const matchesQuery = filters.query
      ? job.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.query.toLowerCase())
      : true;

    const matchesLocation = filters.location
      ? job.candidate_required_location
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      : true;

    const matchesSalaryRange = filters.salaryRange
      ? job.salary?.includes(filters.salaryRange)
      : true;

    return matchesQuery && matchesLocation && matchesSalaryRange;
  });

  // Paginate the filtered jobs
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  return { jobs: paginatedJobs, totalJobs: filteredJobs.length };
};

export const fetchJobById = async (id: string): Promise<Job> => {
  const response = await axios.get(`${API_URL}?id=${id}`);
  return response.data;
};
