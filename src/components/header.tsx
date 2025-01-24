"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-end">
      <h1 className="text-2xl font-bold text-indigo-950">Prompt Smith</h1>
      <button
        className="text-indigo-500"
        onClick={() => {
          alert("show sample action");
        }}
      >
        Show samples
      </button>
    </header>
  );
}
