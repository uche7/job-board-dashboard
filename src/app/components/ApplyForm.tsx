import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { applyFormSchema } from "../../utils/validation";
import { ApplyFormData } from "../../types/job";

export default function ApplyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ApplyFormData>({
    resolver: yupResolver(applyFormSchema),
  });

  const onSubmit = (data: ApplyFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full p-2 border rounded"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setValue("resume", e.target.files);
            }
          }}
        />
        {errors.resume && (
          <p className="text-red-500 text-sm">{errors.resume.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("coverLetter")}
          placeholder="Cover Letter"
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
