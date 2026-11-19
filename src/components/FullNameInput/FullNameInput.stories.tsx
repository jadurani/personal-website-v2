import { Meta } from "@storybook/nextjs";
import { useState } from "react";
import FullNameInput from "./FullNameInput";

export default {
  component: FullNameInput,
  title: "FormElements/FullNameInput",
} as Meta;

export const Default = () => {
  const [fullName, setFullName] = useState<string>("");
  return (
    <FullNameInput name="fullName" onBlur={(value) => setFullName(value)} />
  );
};
