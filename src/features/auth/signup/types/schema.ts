import z from "zod";


export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, "Email field is required!")
    .email("Please enter valid email!"),
  userName: z.string().min(1, "Username field is required!"),
  password: z.string().min(8, "Please enter at least 8 characters."),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export const signUpFormDefaultValues : SignUpFormValues = {
  email: "",
  userName: "",
  password: "",
};
