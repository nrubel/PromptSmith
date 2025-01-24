import { useFormContext } from "@/lib/formContext";
import {
  camelCaseToHumanReadable,
  getFinalText,
  getParts,
} from "@/lib/formHelpers";
import { samples } from "@/lib/samples";

export default function PromptSamples() {
  const {
    setTemplate,
    placeholders,
    setPlaceholders,
    setFinalText,
    setShowSamples,
  } = useFormContext();

  return (
    <div className="mt-4">
      {Object.keys(samples).map((sample: string) => (
        <div key={`prompt-sample-group-${sample}`} className="mb-6">
          <h2 className="mb-2 text-xl font-bold text-gray-700">
            {camelCaseToHumanReadable(sample)}
          </h2>
          {samples[sample].map((val: string, i: number) => (
            <div
              key={`prompt-sample-${i}`}
              className="flex shadow-md bg-gray-200 gap-4 py-2 px-4 rounded-md mb-4 items-center last:mb-0"
            >
              <div className="text-gray-600 grow">{val}</div>
              <button
                className="rounded  py-1 px-4 flex flex-nowrap transition-all duration-150 text-white items-center gap-1 bg-indigo-500 hover:bg-red-600"
                onClick={() => {
                  setTemplate(val);
                  const nextPlaceholders = getParts(val).uniqueBlocks.reduce(
                    (a, c) => ({ ...a, [c]: placeholders?.[c] || "" }),
                    {},
                  );
                  setPlaceholders(nextPlaceholders);
                  setFinalText(getFinalText(nextPlaceholders, val));
                  setShowSamples(false);
                }}
              >
                Use
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
