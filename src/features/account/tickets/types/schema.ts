import z from "zod";

export const ticketSchema = z.object({
  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(120, "Subject must be less than 120 characters"),
  category: z.enum(
    ["ORDER", "PAYMENT", "SHIPPING", "RETURN", "TECHNICAL", "OTHER"],
    {
      message: "Please select a category",
    },
  ),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export const ticketDefaultValues = {
  subject: "",
  category: undefined,
  message: "",
};

export type TicketFormValues = z.infer<typeof ticketSchema>;

