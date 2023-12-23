import { z } from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: "Password can't be more than 20 characters" })
    .optional(),
});
