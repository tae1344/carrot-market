"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={"primary-btn disabled:text-nuetral-300 h-10 disabled:cursor-not-allowed disabled:bg-neutral-400"}
    >
      {pending ? "로딩 중..." : text}
    </button>
  );
}
