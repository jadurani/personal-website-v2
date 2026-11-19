import { validateField } from "@lib/inquiry";
import React, { useState } from "react";

interface MessageTextareaProps {
  name: string;
  disabled?: boolean;
  onBlur?: (value: string) => void;
}

const MessageTextarea: React.FC<MessageTextareaProps> = ({
  name,
  disabled = false,
  onBlur,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    const message = validateField("message", value);
    setError(message);
    if (!message) onBlur?.(value);
  };

  return (
    <div className="pb-4 relative">
      <label
        className={`pl-4 block text-tuna font-header font-bold mb-1 ${
          error ? "text-error" : ""
        }`}>
        Message
      </label>
      <textarea
        name={name}
        disabled={disabled}
        className={`resize-none appearance-none border-2 w-full py-2 px-3 text-tuna bg-tuna/10 outline-none disabled:cursor-not-allowed ${error ? "border-error" : "focus:border-verdigris"}`}
        placeholder="Hi, I would like to inquire about...."
        onBlur={(e) => handleBlur(e.target.value)}
        rows={4}
      />
      <p className="absolute bottom-1 pl-4 text-error font-bold italic text-body2">
        {error}
      </p>
    </div>
  );
};

export default MessageTextarea;
