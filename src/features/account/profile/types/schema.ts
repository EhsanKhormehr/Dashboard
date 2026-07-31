import z from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(100, "Email must be less than 100 characters"),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, "Phone number must be a valid mobile number"),
  userName: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters"),
});

export type ProfileFormValue = z.infer<typeof profileSchema>;

export const passwordSchema = z
  .object({
    currentPassword: z.string().trim().min(1, "Please enter current password!"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password do not match",
        path: ["confirmPassword"],
      });
    }
  });

export const passwordFormDefaultValue = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export type PasswordFormValue = z.infer<typeof passwordSchema>;
