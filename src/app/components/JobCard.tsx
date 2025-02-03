import { motion } from "framer-motion";
import { Job } from "../../types/job";
import { useRouter } from "next/navigation";

interface JobCardProps {
  job: Job;
}

/** Card component for displaying a job */
export default function JobCard({ job }: JobCardProps) {
  const Router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border p-4 rounded-lg shadow-lg"
    >
      <img
        src={job.company_logo}
        alt={job.company_name}
        className="w-16 h-16 mb-2"
      />
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.company_name}</p>
      <p>{job.candidate_required_location}</p>
      <p>{job.salary}</p>
      <button
        title="Apply Now"
        className="mt-2 bg-purple-900 text-white px-4 py-2 rounded"
        onClick={() => Router.push(`/job/${job.id}`)}
      >
        Apply Now
      </button>
    </motion.div>
  );
}
