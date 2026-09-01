// import { z } from "zod";

// export const basicInfoSchema = z.object({
//   name: z.string().min(1, "Name Field is required"),
//   slug: z.string().min(1, "Slug Field is required"),
//   description: z.string().optional(),
//   price: z.coerce.number<number>("Please enter a valid number").min(1 , "Price Feild is required"),
//   stock: z.coerce.number<number>("Please enter a valid number").int().min(1 , "Stock Feild is required"),
//   categoryId: z.string().min(1),
//   attributes: z.record(z.string(), z.union([z.string()])).optional()

// });

// export const basicInfoDefaultValues: BasicInfoFormValues = {
//   name: "",
//   slug: "",
//   description: "",
//   price: 0,
//   stock: 0,
//   categoryId: "",
//   attributes : {}
// };

// export type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;

import z from "zod";
import { CategoryFormValues } from "../../categories/types/schema";

export const basicInfoSchema = z.object({
  name: z.string().min(1, "Name Field is required"),
  slug: z.string().min(1, "Slug Field is required"),
  description: z.string().optional(),
  price: z.coerce
    .number<number>("Please enter a valid number")
    .min(1, "Price Feild is required"),
  stock: z.coerce
    .number<number>("Please enter a valid number")
    .int()
    .min(1, "Stock Feild is required"),
  content: z.string().min(1, "Expert Review Field is required"),
  categoryId: z.string().min(1),
  thumbnail: z.any(),
  images: z.any(),
});

export const basicInfoDefaultValues = {
  name: "",
  slug: "",
  description: "",
  price: 0,
  stock: 0,
  content: "",
  categoryId: "",
  attributes: {},
  thumbnail: "",
  images: "",
};

export type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;

export type ProductFormValues = BasicInfoFormValues & {
  attributes: Record<string, unknown>;
};

type CategoryAttribute = {
  name: string;
  slug: string;
  type: "TEXT" | "BOOLEAN" | "NUMBER" | "SELECT";
  required: boolean;
  options?: string[];
};

export const buildAttributesSchema = (attributes: CategoryAttribute[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};

  for (const attr of attributes) {
    let fieldSchema: z.ZodTypeAny;

    switch (attr.type) {
      case "TEXT":
        if (attr.required) {
          fieldSchema = z.preprocess(
            (value) => value ?? "",
            z.string().min(1, `${attr.name} is required`),
          );
        } else {
          fieldSchema = z.preprocess(
            (value) => value ?? "",
            z.string().optional(),
          );
        }

        break;

      case "BOOLEAN":
        if (attr.required) {
          fieldSchema = z
            .enum(["true", "false"], { message: `${attr.name} is required` })
            .transform((value) => value === "true");
        } else {
          fieldSchema = z
            .enum(["true", "false"], { message: `${attr.name} is required` })
            .transform((value) => value === "true")
            .optional();
        }

        break;

      case "NUMBER":
        if (attr.required) {
          fieldSchema = z.preprocess(
            (value) => value ?? "",
            z.coerce.number<number>().min(1, `${attr.name} is required`),
          );
        } else {
          fieldSchema = z.preprocess(
            (value) => value ?? "",
            z.coerce.number<number>().optional(),
          );
        }
        break;
      case "SELECT":
        if (attr.required) {
          fieldSchema = z.preprocess(
            (value) => value ?? "",
            z.string().min(1, `${attr.name} is required`),
          );
        } else {
          fieldSchema = z.preprocess(
            (value) => value ?? "",
            z.string().optional(),
          );
        }
        break;
      default:
        fieldSchema = z.any().optional();
    }
    shape[attr.slug] = fieldSchema;
  }
  return z.object(shape);
};

export const buildProductSchema = (attributes: CategoryAttribute[]) => {
  return basicInfoSchema.extend({
    attributes: buildAttributesSchema(attributes),
  });
};
