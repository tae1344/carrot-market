interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className={"primary-btn disabled:text-nuetral-300 h-10 disabled:cursor-not-allowed disabled:bg-neutral-400"}
    >
      {loading ? "로딩 중..." : text}
    </button>
  );
}
