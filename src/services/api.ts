import { Job } from "../types/job";

/** Fetch Jobs */
export const fetchJobs = async (
  filters: { query?: string; location?: string; salaryRange?: string } = {},
  page: number = 1,
  jobsPerPage: number = 20
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

// Fetch a job by ID (fetches all jobs and filters locally)
export const fetchJobById = async (id: string): Promise<Job | null> => {
  const response = await fetch("https://remotive.com/api/remote-jobs");
  const data = await response.json();
  const job = data.jobs.find((job: Job) => job.id === Number(id)); // Find the job with the matching ID
  return job || null; // Return the job or null if not found
};
