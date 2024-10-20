import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Required "),
});

const signUpSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email(),
  password: z.string().min(8, "Required "),
});

export { loginSchema, signUpSchema };
