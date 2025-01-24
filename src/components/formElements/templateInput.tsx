import { useFormContext } from "@/lib/formContext";
import { getFinalText, getParts } from "@/lib/formHelpers";
import clsx from "clsx";

export const commonInputCls: string = `border border-gray-200 rounded-sm transition-[border] duration-150 focus:outline-none focus-visible:border-indigo-300 placeholder:text-gray-600 text-indigo-900`;

export default function TemplateInput() {
  const { template, setTemplate, setPlaceholders, setFinalText, placeholders } =
    useFormContext();
  return (
    <>
      <textarea
        id="templateInput"
        defaultValue={template}
        onChange={(e) => {
          const val = e.target.value;
          setTemplate(val);
          const nextPlaceholders = getParts(val).uniqueBlocks.reduce(
            (a, c) => ({ ...a, [c]: placeholders?.[c] || "" }),
            {},
          );
          setPlaceholders(nextPlaceholders);
          setFinalText(getFinalText(nextPlaceholders, val));
        }}
        placeholder="Describe/paste your template ..."
        rows={3}
        className={clsx("mt-4 mb-2 p-3 min-h-24", commonInputCls)}
      />
      <label htmlFor="templateInput" className="text-sm text-gray-400">
        Example: Teach me [language] phrases related to [topic], with examples
        of usage.
      </label>
    </>
  );
}
