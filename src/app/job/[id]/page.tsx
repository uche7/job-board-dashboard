"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchJobById } from "@/services/api";
import { Job } from "@/types/job";
import { Loader } from "@/app/components/Loader";
import ApplyForm from "@/app/components/ApplyForm";
import { useTheme } from "@mui/material/styles";

/** Job Details */
export default function JobDetails() {
  const params = useParams();
  const router = useRouter();
  const muiTheme = useTheme();
  const id = params?.id as string | undefined;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

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
    <main
      style={{
        backgroundColor: muiTheme.palette.background.default,
        color: muiTheme.palette.text.primary,
        minHeight: "100vh",
      }}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 text-purple-900 hover:text-purple-700 transition-colors"
        >
          &larr; Back to Jobs
        </button>

        {/* Job Header */}
        <div
          style={{
            backgroundColor: muiTheme.palette.background.paper,
            padding: "2rem",
            borderRadius: "8px",
          }}
          className="shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={job.company_logo}
              alt={`${job.company_name} logo`}
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-purple-900">
                {job.title}
              </h1>
              <p className="text-gray-700 mt-2">{job.company_name}</p>
              <p className="text-gray-500 mt-1">
                {job.candidate_required_location}
              </p>
              <p className="text-gray-500 mt-1">{job.salary}</p>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div
          style={{
            backgroundColor: muiTheme.palette.background.paper,
            padding: "2rem",
            borderRadius: "8px",
          }}
          className="mt-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            Job Description
          </h2>
          <div
            className="prose max-w-none text-wrap"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-900 text-white text-center px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Visit Company Website
          </a>
          {showApplyModal && (
            <ApplyForm
              onClose={() => setShowApplyModal(false)}
              jobTitle={job.title}
            />
          )}
          <button
            onClick={() => setShowApplyModal(true)}
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </main>
  );
}
