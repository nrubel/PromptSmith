import { useFormContext } from "@/lib/formContext";
import clsx from "clsx";
import { commonInputCls } from "./templateInput";
import { getFinalText } from "@/lib/formHelpers";

export default function Placeholders() {
  const { placeholders, setPlaceholders, setFinalText, template } =
    useFormContext();
  return (
    <>
      {Object.keys(placeholders).length > 0 && (
        <>
          <h2 className="text-lg lg:text-xl font-bold mt-3 mb-2 text-gray-800">
            Fill Placeholders
          </h2>
          {Object.keys(placeholders).map((placeholder: string) => {
            const label = placeholder
              .replace("[", "")
              .replace("]", "")
              .split(" ")
              .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
              .join(" ");
            return (
              <div
                key={`placeholder-${placeholder}`}
                className="flex flex-col mb-3"
              >
                <label
                  htmlFor={placeholder + `-input`}
                  className="text-gray-800 mb-1"
                >
                  {label}
                </label>
                <input
                  type="text"
                  id={placeholder + "-input"}
                  placeholder={"Enter value for " + label}
                  className={clsx("px-3 py-2", commonInputCls)}
                  onChange={(e) => {
                    const val = e.target.value;
                    const nextPlaceholders = {
                      ...placeholders,
                      [placeholder]: val,
                    };
                    setPlaceholders(nextPlaceholders);
                    setFinalText(getFinalText(nextPlaceholders, template));
                  }}
                />
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
