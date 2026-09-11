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
    .min(0, "Stock Feild is required"),
  content: z.string().min(1, "Expert Review Field is required"),
  categoryId: z.string().min(1),
  thumbnail: z.any(),
  images: z.any(),
  brandId: z.string().min(1, "Brand Field is required"),
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
  brandId: "",
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

// Brand
export const newBrandSchema = z.object({
  name: z.string().trim().min(1, "Name field is required!"),
  slug: z.string().trim().min(1, "Slug field is required!"),
  logo: z.string().trim().min(1, "Logo is required"),
});

export type NewBrandFormValues = z.infer<typeof newBrandSchema>;

export const newBrandDefaultValues = {
  name: "",
  slug: "",
  logo: "",
};

// Discount
export const discountCodeSchema = z
  .object({
    name: z.string().trim().min(2, "Please Enter at least 2 characters."),
    code: z.string().trim().min(2, "Please Enter at least 2 characters."),
    discountType: z.enum(["FIXED", "PERCENTAGE"]),
    percentage: z.coerce.number("Please enter number").optional(),
    amount: z.coerce.number("Please enter number").optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    usageLimit: z.coerce
      .number("Please enter number")
      .int("Please enter smaller number")
      .positive("Please enter positive number"),
  })
  .superRefine((data, ctx) => {
    if (data.discountType === "PERCENTAGE") {
      if (data.percentage === undefined) {
        ctx.addIssue({
          code: "custom",
          path: ["percentage"],
          message: "Percentage is required for percentage discount type",
        });
      }
      if (data.amount !== undefined) {
        ctx.addIssue({
          code: "custom",
          path: ["amount"],
          message: "Amount is not allowed for percentage discount type",
        });
      }
      if (
        data.percentage !== undefined &&
        (data.percentage <= 0 || data.percentage > 100)
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["percentage"],
          message: "Percentage must be between 1 and 100",
        });
      }
    }

    if (data.discountType === "FIXED") {
      if (data.amount === undefined) {
        ctx.addIssue({
          code: "custom",
          path: ["amount"],
          message: "Amount is required",
        });
      }

      if (data.percentage !== undefined) {
        ctx.addIssue({
          code: "custom",
          path: ["percentage"],
          message: "Percentage must be empty",
        });
      }

      if (data.amount !== undefined && data.amount <= 0) {
        ctx.addIssue({
          code: "custom",
          path: ["amount"],
          message: "Amount must be greater than 0",
        });
      }
    }

    if (!data.startDate) {
      ctx.addIssue({
        code: "custom",
        path: ["startDate"],
        message: "Start date is required",
      });
    }

    if (!data.endDate) {
      ctx.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "End date is required",
      });
    }

    if (data.startDate && data.endDate && data.endDate <= data.startDate) {
      ctx.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "End date must be after start date",
      });
    }
  });

export type DiscountCodeFormValues = z.infer<typeof discountCodeSchema>;

export const discountCodeDefaultValues: DiscountCodeFormValues = {
  code:"",
  name: "",
  discountType: "FIXED",
  percentage: undefined,
  amount: undefined,
  startDate: undefined,
  endDate: undefined,
  usageLimit: 0,
};
