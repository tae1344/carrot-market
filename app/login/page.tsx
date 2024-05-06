"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "@/app/login/actions";

export default function LogIn() {
  const [state, action] = useFormState(handleForm, {} as any);

  return (
    <div className={"flex flex-col gap-10 px-6 py-8"}>
      <div className={"flex flex-col gap-2 *:font-medium"}>
        <h1 className={"text-2xl"}>안녕하세요</h1>
        <h2 className={"text-xl"}>Log in with email and password.</h2>
      </div>
      <form action={action} className={"flex flex-col gap-3"}>
        <Input name={"email"} type={"email"} placeholder={"Email"} required={true} />
        <Input name={"password"} type={"password"} placeholder={"Password"} required={true} />
        <Button text={"Create account"} />
      </form>
      <SocialLogin />
    </div>
  );
}
