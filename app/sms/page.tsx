"use client";

import Input from "@/components/input";
import Button from "@/components/button";
import { useFormState } from "react-dom";
import { smsLogIn } from "@/app/sms/actions";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogIn() {
  const [state, dispatch] = useFormState(smsLogIn, initialState);

  return (
    <div className={"flex flex-col gap-10 px-6 py-8"}>
      <div className={"flex flex-col gap-2 *:font-medium"}>
        <h1 className={"text-2xl"}>SMSLogIn</h1>
        <h2 className={"text-xl"}>Verify your phone number</h2>
      </div>
      <form action={dispatch} className={"flex flex-col gap-3"}>
        {state.token ? (
          <Input
            name={"token"}
            type={"number"}
            placeholder={"Verification code"}
            required={true}
            min={100000}
            max={999999}
            errors={[]}
          />
        ) : (
          <Input
            name={"phone"}
            type={"text"}
            placeholder={"Phone number"}
            required={true}
            errors={state.error?.formErrors}
          />
        )}
        <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}
