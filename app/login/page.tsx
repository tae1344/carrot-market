"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { login } from "@/app/login/actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, action] = useFormState(login, {} as any);

  return (
    <div className={"flex flex-col gap-10 px-6 py-8"}>
      <div className={"flex flex-col gap-2 *:font-medium"}>
        <h1 className={"text-2xl"}>안녕하세요</h1>
        <h2 className={"text-xl"}>Log in with email and password.</h2>
      </div>
      <form action={action} className={"flex flex-col gap-3"}>
        <Input name={"email"} type={"email"} placeholder={"Email"} required={true} errors={state?.fieldErrors?.email} />
        <Input
          name={"password"}
          type={"password"}
          placeholder={"Password"}
          required={true}
          aria-valuemin={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors?.password}
        />
        <Button text={"Log in"} />
      </form>
      <SocialLogin />
    </div>
  );
}
