import z from "zod";

const userProfileSchema = z.object({
  name: z.string().min(1, { message: "name can't be emtpy" }),
  email: z.string().email({ message: "give valid email" }),
  age: z
    .number()
    .min(18, { message: "user must be above 18 years" })
    .optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;
