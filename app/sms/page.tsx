import Input from "@/components/input";
import Button from "@/components/button";

export default function SMSLogIn() {
  return (
    <div className={"flex flex-col gap-10 px-6 py-8"}>
      <div className={"flex flex-col gap-2 *:font-medium"}>
        <h1 className={"text-2xl"}>SMSLogIn</h1>
        <h2 className={"text-xl"}>Verify your phone number</h2>
      </div>
      <form className={"flex flex-col gap-3"} action="">
        <Input name={"phone"} type={"number"} placeholder={"Phone number"} required={true} errors={[]} />
        <Input
          name={"verification_code"}
          type={"number"}
          placeholder={"Verification code"}
          required={true}
          errors={[]}
        />
        <Button text={"Verify"} />
      </form>
    </div>
  );
}
