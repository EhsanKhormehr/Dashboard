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
  thumbnail: z.any().optional(),
  content: z.any(),
  description: z.string().trim().min(1, "Description field is required!"),
  category: z.string().min(1, "Category filed is required"),
  status: z.enum(["PUBLISHED", "ARCHIVED", "DRAFT"], {
    error: "Status field is required",
  }),
  readingTime: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.coerce
      .number("Reading time must be a number")
      .int("Reading time must be an integer")
      .positive("Reading time must be greater than zero"),
  ),
  tags: z.array(z.string().min(1, "Tag name cannot be empty")).optional(),
});
export type BlogFormValues = z.output<typeof newBlogSchema>;
export type BlogFormInput = z.input<typeof newBlogSchema>;

export const blogFormDefaultValues: BlogFormValues = {
  title: "",
  slug: "",
  thumbnail: "",
  content: "",
  description: "",
  category: "",
  status: "DRAFT",
  readingTime: 0,
  tags: [],
};

export const newTagSchema = z.object({
  name: z.string().trim().min(1, "Name field is required!"),
  slug: z.string().trim().min(1, "Slug field is required!"),
});

export type TagFormValues = z.infer<typeof newTagSchema>;

export const tagFormDefaultValues: TagFormValues = {
  name: "",
  slug: "",
};
