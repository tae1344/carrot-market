"use server";

import { z } from "zod";
import validator from "validator";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine((phone) => validator.isMobilePhone(phone, "ko-KR"), "Wrong phone format");

const tokenSchema = z.coerce.number().min(100000).max(999999); // string -> number로 강제 변환

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

interface ActionState {
  token: boolean;
}

export const smsLogIn = async (pervState: ActionState, formData: FormData) => {
  const phone = formData.get("phone");
  const token = formData.get("token");

  const validatePhone = () => {
    const result = phoneSchema.safeParse(phone);

    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  };

  const validateToken = () => {
    const result = tokenSchema.safeParse(token);

    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  };

  if (!pervState.token) {
    return validatePhone();
  } else {
    return validateToken();
  }
};
