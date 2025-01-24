"use client";

import { useFormContext } from "@/lib/formContext";
import clsx from "clsx";
import Link from "next/link";
import { commonInputCls } from "./templateInput";
import { useEffect, useState } from "react";

export default function FinalResult() {
  const { template, finalText, placeholders } = useFormContext();
  const [copied, setCopied] = useState<string | undefined>();

  useEffect(() => {
    if ((copied || "").trim() !== finalText.trim()) {
      setCopied(undefined);
    }
  }, [finalText, copied]);

  if (
    !template ||
    Object.values(placeholders).filter(Boolean).length === 0 ||
    Object.keys(placeholders).length !==
      Object.values(placeholders).filter(Boolean).length
  )
    return <></>;

  const askGptQuery = `https://chatgpt.com/?${new URLSearchParams({ q: finalText })}`;
  const copyText = () => {
    navigator.clipboard
      .writeText(finalText)
      .then(() => setCopied(finalText))
      .catch((e) => alert("Failed to copy text: " + e));
  };

  return (
    <div className="flex flex-col mt-3">
      <header className="flex justify-between sm:items-center mb-2 flex-col sm:flex-row gap-2">
        <h2 className="text-lg lg:text-xl font-bold text-gray-800">
          Final Prompt
        </h2>
        <div className="flex gap-3 items-center">
          <Link
            href={askGptQuery}
            target="_blank"
            className="rounded bg-indigo-500 py-1 px-4 flex flex-nowrap transition-all duration-150 hover:bg-red-600 text-white"
          >
            AskGPT
          </Link>
          <button
            onClick={copyText}
            disabled={!!copied}
            className={clsx(
              "rounded  py-1 px-4 flex flex-nowrap transition-all duration-150 text-white items-center gap-1",
              !!copied ? "bg-gray-600" : "bg-indigo-500 hover:bg-red-600",
            )}
          >
            {!!copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
            Copy
          </button>
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
