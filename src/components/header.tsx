"use client";

import { useFormContext } from "@/lib/formContext";

export default function Header() {
  const { showSamples, setShowSamples } = useFormContext();
  return (
    <header className="flex justify-between items-end">
      <h1 className="text-2xl font-bold text-indigo-950">
        {showSamples ? "Prompt Samples" : "Prompt Smith"}
      </h1>
      <button
        className="text-indigo-500"
        onClick={() => setShowSamples((prev) => !prev)}
      >
        {showSamples ? "Back" : "Show samples"}
      </button>
    </header>
  );
}
