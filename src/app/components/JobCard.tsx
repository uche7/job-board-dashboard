import { motion } from "framer-motion";
import { Job } from "../../types/job";
import { useRouter } from "next/navigation";

interface JobCardProps {
  job: Job;
}

/** Card component for displaying a job */
export default function JobCard({ job }: JobCardProps) {
  const router = useRouter();

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      className="border p-4 rounded-lg shadow-lg flex flex-col h-full"
    >
      <header>
        <img
          src={job.company_logo}
          alt={`${job.company_name} logo`} // Added alt text for screen readers
          width={64}
          height={64}
          className="mb-2 object-contain"
        />
        <h2 className="text-xl font-bold">{job.title}</h2>
      </header>
      
      <p>{job.company_name}</p>
      <p>{job.candidate_required_location}</p>
      <p>{job.salary}</p>

      <button
        title="Apply Now"
        aria-label={`Apply for ${job.title} at ${job.company_name}`} // Added aria-label for screen readers
        className="mt-auto bg-purple-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
        onClick={() => router.push(`/job/${job.id}`)}
      >
        Apply Now
      </button>
    </motion.article>
  );
}
