import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export type FormContextType = {
  template: string;
  setTemplate: Dispatch<SetStateAction<string>>;
  finalText: string;
  setFinalText: Dispatch<SetStateAction<string>>;
  placeholders: {
    [key: string]: string;
  };
  setPlaceholders: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
};

export const FormContext = createContext<FormContextType>({
  template: "",
  setTemplate: () => {},
  finalText: "",
  setFinalText: () => {},
  placeholders: {},
  setPlaceholders: () => {},
});

export const useFormContext = () => useContext(FormContext);
