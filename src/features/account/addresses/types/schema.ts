import z from "zod";

export const addressSchema = z.object({
  province: z.string().trim().min(1, "Please select a province"),
  city: z.string().trim().min(1, "Please enter a city"),
  street: z.string().trim().min(10, "Address must be at least 10 characters"),
  buildingNo: z.string().trim().min(1, "Please enter the building number"),
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Postal code must be 10 digits."),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, "Phone number must be 11 digits and start with 09"),
  recipientName: z.string().trim().min(3, "Please enter the recipient name"),
  addressLabel: z.string().trim().optional(),
  unit: z.string().trim().optional(),
});

export const addressFormDefaultValue = {
  province: "",
  city: "",
  street: "",
  buildingNo: "",
  postalCode: "",
  phoneNumber: "",
  recipientName: "",
  addressLabel: "",
  unit: "",
};

export type AddressFormValue = z.infer<typeof addressSchema>;
