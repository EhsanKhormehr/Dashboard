import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email field is required!")
    .email("Please enter valid email!"),
  password: z.string().min(8, "Please enter at least 8 characters."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const loginFormDefaultValues: LoginFormValues = {
  email: "",
  password: "",
};
