"use client";

import { useFormContext } from "@/lib/formContext";
import clsx from "clsx";
import Link from "next/link";
import { commonInputCls } from "./templateInput";

export default function FinalResult() {
  const { template, finalText, placeholders } = useFormContext();
  console.log(template, placeholders, finalText);

  if (
    !template ||
    Object.values(placeholders).filter(Boolean).length === 0 ||
    Object.keys(placeholders).length !==
      Object.values(placeholders).filter(Boolean).length
  )
    return <></>;

  const askGptQuery = `https://chatgpt.com/?${new URLSearchParams({ q: finalText })}`;
  const copyText = () => {
    navigator.clipboard.writeText(finalText);
  };

  return (
    <div className="flex flex-col mt-3">
      <header className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-800">Final Prompt</h2>
        <div>
          <Link href={askGptQuery} target="_blank">
            AskGPT
          </Link>
          <button onClick={copyText}>Copy</button>
        </div>
      </header>
      <textarea
        id="templateInput"
        value={finalText}
        disabled
        placeholder="Describe/paste your template ..."
        rows={3}
        className={clsx("p-3 min-h-24", commonInputCls)}
      />
    </div>
  );
}
