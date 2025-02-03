// Structure of a job listing
export interface Job {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
}

// Structure of the API response
export interface JobsResponse {
  "0-legal-notice": string;
  "job-count": number;
  jobs: Job[];
}

// Structure of the search/filter parameters
export interface JobFilters {
  search?: string;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  category?: string;
  limit?: number;
}

// Structure of the form data for job application
export interface ApplyFormData {
  fullName: string;
  email: string;
  resume: FileList;
  coverLetter?: string;
}
