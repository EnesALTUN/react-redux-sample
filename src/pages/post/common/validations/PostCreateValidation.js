import { object, string } from "yup";

export const postCreateValidationSchema = object().shape({
  title: string().required("Title is required"),
  content: string().required("Content is required"),
  authorId: string().required("Author is required"),
});
