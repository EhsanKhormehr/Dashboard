import z from "zod";

// const blogStatus = z.enum(["PUBLISHED", "ARCHIVED"]);

export const newBlogSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title field is required!")
    .max(150, "Title must not be more than 150 characters"),
  slug: z
    .string()
    .trim()
    .min(1, "Slug field is required!")
    .max(150, "Slug must not be more than 150 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only English letters, numbers, and hyphens",
    ),
  thumbnail: z.string().optional(),
  content: z.any(),
  description: z.string().trim().min(1, "Description field is required!"),
  category: z.string().min(1, "Category filed is required"),
  status: z.enum(["PUBLISHED", "ARCHIVED", "DRAFT"], {
    error: "Status field is required",
  }),
});
export type BlogFormValues = z.infer<typeof newBlogSchema>;

export const blogFormDefaultValues: BlogFormValues = {
  title: "",
  slug: "",
  thumbnail: "",
  content : "",
  description: "",
  category: "",
  status: "DRAFT",
};
