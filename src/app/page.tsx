import PromptForm from "@/components/form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div
        className={
          "p-6 bg-white shadow-xl rounded-sm border border-collapse border-gray-100 w-5/12"
        }
      >
        <PromptForm />
        <footer>
          <div className="text-center mt-4 leading-6 text-gray-500 text-sm">
            Made with ❤️ by{" "}
            <Link
              href={`https://nasiruddin.net`}
              target="_blank"
              className="text-indigo-800 hover:underline hover:text-red-600 transition-all duration-150"
            >
              Nasir Uddin
            </Link>{" "}
            Inspired by{" "}
            <Link
              href={"https://github.com/hasinhayder"}
              target="_blank"
              className="text-indigo-800 hover:underline hover:text-red-600 transition-all duration-150"
            >
              Hasin Haider
            </Link>
          </div>
          <div className="leading-6 text-sm mt-1 flex gap-2 justify-center">
            <Link
              href={`https://www.linkedin.com/in/nasir-uddin`}
              target="_blank"
              className="text-indigo-800 hover:underline hover:text-red-600 transition-all duration-150 inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              href={`https://github.com/nrubel/PromptSmith`}
              target="_blank"
              className="text-indigo-800 hover:underline hover:text-red-600 transition-all duration-150 inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
