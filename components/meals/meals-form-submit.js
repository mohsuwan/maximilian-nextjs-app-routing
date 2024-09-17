"use client";
import { useFormState } from "react-dom";


export default function MealsFormSumbit() {
  const { pending } = useFormState();

  return (
    <button disabled={pending}>
      {pending ? "Submitting ..." : "Share Meal"}
    </button>
  );
}
