import z from "zod";

export const myAccountSchema = z.object({
  email: z
    .string()
    .min(1, "Email field is required!")
    .email("Please enter valid email!"),
  password: z.union([
    z.literal(""),
    z.string().trim().min(8, "Please enter at least 8 characters."),
  ]),
  userName: z.string().min(1, "Username field is required!"),
});

export type MyAccountFormValues = z.infer<typeof myAccountSchema>;

export const myAccountDefaultValues = {
  email: "",
  password: "",
  userName: "",
};

export type UpdateMyAccountData = {
  email: string;
  userName: string;
  password?: string;
};
