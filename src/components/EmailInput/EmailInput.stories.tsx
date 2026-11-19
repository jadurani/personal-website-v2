import { Meta } from "@storybook/nextjs";
import { useState } from "react";
import EmailInput from "./EmailInput";

export default {
  component: EmailInput,
  title: "FormElements/EmailInput",
} as Meta;

export const Default = () => {
  const [email, setEmail] = useState<string>("");
  return <EmailInput name="email" onBlur={(value) => setEmail(value)} />;
};
