"use client";

import TemplateInput from "@/components/formElements/templateInput";
import { FormContext } from "@/lib/formContext";
import { useState } from "react";
import FinalResult from "./formElements/finalResult";
import Placeholders from "./formElements/placeholders";

export default function PromptForm() {
  const [template, setTemplate] = useState<string>("");
  const [finalText, setFinalText] = useState<string>("");
  const [placeholders, setPlaceholders] = useState<{ [key: string]: string }>(
    {},
  );

  return (
    <FormContext.Provider
      value={{
        template,
        setTemplate,
        placeholders,
        setPlaceholders,
        finalText,
        setFinalText,
      }}
    >
      <div className="flex flex-col">
        <TemplateInput />
        <Placeholders />
        <FinalResult />
      </div>
    </FormContext.Provider>
  );
}
