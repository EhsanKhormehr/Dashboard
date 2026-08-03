import z from "zod";

export const detailsTicketSchema = z.object({
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type DetailsTicketFormValues = z.infer<typeof detailsTicketSchema>

export const detailsTicketDefaultValues = {
  message: "",
};