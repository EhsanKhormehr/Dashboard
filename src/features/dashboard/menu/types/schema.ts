import z from "zod";

const subFormSchema = z.object({
  name: z.string().trim().min(1, "This field is required!"),
  href: z.string().trim().min(1, "This field is required!"),
});

export const menuSchema = z.object({
  name: z.string().trim().min(1, "This field is required!"),
  href: z.string().trim().min(1, "This field is required!"),
  subMenus: z.array(subFormSchema).optional(),
});

export type SubMenuFormValue = z.infer<typeof subFormSchema>;

export const MenuFormDefaultValue = {
  name: "",
  href: "",
  subMenus: [],
};

export type MenuFormValue = z.infer<typeof menuSchema>;
