import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyFormSchema } from "../../utils/validation";
import { ApplyFormData } from "../../types/job";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ApplyFormProps {
  onClose: () => void;
  jobTitle: string;
}

/** Apply Form */
export default function ApplyForm({ onClose, jobTitle }: ApplyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ApplyFormData>({
    resolver: yupResolver(applyFormSchema),
  });

  const onSubmit = (data: ApplyFormData) => {
    console.log("Application Data:", data);
    toast.success("Application submitted successfully!");
    reset();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-lg py-3 px-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-lg font-bold text-purple-900 mb-4">
          Apply for {jobTitle}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Full Name
            </label>
            <input
              {...register("fullName")}
              placeholder="Your Full Name"
              className={`w-full p-3 border rounded-lg focus:ring-2 text-black ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Email Address
            </label>
            <input
              {...register("email")}
              placeholder="Your Email Address"
              className={`w-full p-3 border rounded-lg focus:ring-2 text-black ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Resume (PDF or DOC)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setValue("resume", e.target.files);
                }
              }}
              className={`w-full p-3 border rounded-lg focus:ring-2 text-black ${
                errors.resume
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-300"
              }`}
            />
            {errors.resume && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.resume.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Cover Letter
            </label>
            <textarea
              {...register("coverLetter")}
              placeholder="Write your cover letter here..."
              rows={4}
              className={`w-full p-3 border rounded-lg focus:ring-2 text-black ${
                errors.coverLetter
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-purple-300"
              }`}
            />
            {errors.coverLetter && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.coverLetter.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-3 px-6 rounded-lg hover:bg-purple-800 transition-colors font-medium focus:ring-2 focus:ring-purple-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </motion.div>
  );
}
