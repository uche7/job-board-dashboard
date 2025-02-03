"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Correct import for App Router
import { fetchJobById } from "@/services/api";
import { Job } from "@/types/job";
import { motion } from "framer-motion";

export default function JobDetails() {
  const params = useParams();
  const id = params?.id as string; // Ensure ID is treated as a string
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
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="w-16 h-16 border-4 border-purple-900 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    );
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.company_name}</p>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <a
        href={job.url}
        className="text-purple-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Company Website
      </a>
    </div>
  );
}
