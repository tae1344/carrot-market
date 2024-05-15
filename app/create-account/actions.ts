"use server";

import { z } from "zod";
import { PASSWORD_REGEX } from "@/lib/constants";

const checkPassword = ({ password, confirm_password }: { password: string; confirm_password: string }) =>
  password === confirm_password;

const formSchema = z
  .object({
    username: z.string({
      invalid_type_error: "Username must be a string",
      required_error: "Where is my username?",
    }),
    email: z.string().email(),
    password: z
      .string()
      .min(10)
      .regex(
        PASSWORD_REGEX,
        "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-",
      ),
    confirm_password: z.string().min(10),
  })
  .refine(checkPassword, {
    message: "Both password should be the same!",
    path: ["confirm_password"],
  });

export async function createAccount(pervState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
