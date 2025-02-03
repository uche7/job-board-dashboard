"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchJobById } from "@/services/api";
import { Job } from "@/types/job";
import { Loader } from "@/app/components/Loader";

/** Page component for displaying job details */
export default function JobDetails() {
  const params = useParams();
  const id = params?.id as string | undefined;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadJob = async () => {
      try {
        setLoading(true);
        const data = await fetchJobById(id);
        setJob(data);
      } catch (err) {
        setError("Failed to fetch job details.");
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">No job found.</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.company_name}</p>
      {/* Render the description as HTML */}
      <div dangerouslySetInnerHTML={{ __html: job.description }} />{" "}
      <a
        href={job.url}
        className="text-purple-900 underline focus:outline-none focus:ring-2 focus:ring-purple-700"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${job.company_name} website`}
      >
        Visit Company Website
      </a>
    </main>
  );
}
