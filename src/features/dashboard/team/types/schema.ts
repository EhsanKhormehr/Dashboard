import z from "zod";

const newTeamMemberGenderSchema = z.enum(["MALE", "FEMALE"]);

export const newTeamMemberSchema = z.object({
  firstName: z.string().min(1, "Firstname Field Is Required!"),
  lastName: z.string().min(1, "Lastname Field Is Required!"),
  email: z
    .string()
    .min(1, "Email Field Is Required!")
    .email("Please Enter Valid Email!"),
  phoneNumber: z
    .string()
    .min(1, "Phone Number Field Is Required!")
    .regex(/^\d+$/, "Please Enter Valid Number!"),
  position: z.string().min(1, "Position Field Is Required!"),
  gender: newTeamMemberGenderSchema,
  imageUrl: z.string().optional(),
});

export type NewTeamMemberFormValues = z.infer<typeof newTeamMemberSchema>;

export const newTeamMemberDefaultValues: NewTeamMemberFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  position: "",
  gender: "MALE",
  imageUrl: "",
};
