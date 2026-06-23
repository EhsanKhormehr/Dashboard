import z, { boolean } from "zod";

const attributeTypeSchema = z.enum(["TEXT", "NUMBER", "BOOLEAN", "SELECT"]);
// const requiredTypeSchema = z.enum(["TRUE", "FALSE"]);

export const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  slug: z.string().min(1, "Category slug is required"),
  attributes: z
    .array(
      z
        .object({
          name: z.string().min(1, "Attribute name is required"),
          slug: z.string().min(1, "Attribute slug is required"),
          type: attributeTypeSchema,
          required: boolean(),
          options: z.string().optional(),
        })
        .superRefine((value, ctx) => {
          if (value.type === "SELECT" && !value.options?.trim()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["options"],
              message: "Options are required when type is SELECT",
            });
          }
        }),
    )
    .min(1, "At least one attribute is required"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

export const categoryDefaultValues: CategoryFormValues = {
  name: "",
  slug: "",
  attributes: [
    {
      name: "",
      slug: "",
      type: "TEXT",
      required: false,
      options: "",
    },
  ],
};
