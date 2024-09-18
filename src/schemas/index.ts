import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string({ required_error: "Por favor ingresa un nombre" }).min(1, {
    message: "Por favor ingresa un nombre",
  }),
  email: z
    .string({ required_error: "Ingresa un correo electrónico válido" })
    .email({
      message: "Ingresa un correo electrónico válido",
    }),
  phone: z.string().optional(),
  message: z.string().optional(),
});
