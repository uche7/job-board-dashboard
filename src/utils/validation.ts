import * as yup from "yup";

export const applyFormSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  resume: yup
    .mixed<FileList>()
    .required("Resume is required")
    .test("fileRequired", "Resume is required", (value) => {
      return value instanceof FileList && value.length > 0;
    }),
  coverLetter: yup.string().optional(),
});
