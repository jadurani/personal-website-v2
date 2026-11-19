import { validateField } from "@lib/inquiry";
import React, { useState } from "react";

interface FullNameInputProps {
  name: string;
  disabled?: boolean;
  onBlur?: (value: string) => void;
}

const FullNameInput: React.FC<FullNameInputProps> = ({
  name,
  disabled = false,
  onBlur,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    const message = validateField("fullName", value);
    setError(message);
    if (!message) onBlur?.(value);
  };

  return (
    <div className="pb-6 relative font-body">
      <label
        className={`pl-4 block text-tuna font-bold mb-1 ${error ? "text-error" : ""}`}>
        Name
      </label>
      <input
        name={name}
        type="text"
        disabled={disabled}
        className={`appearance-none border-2 w-full py-2 px-3 text-tuna bg-tuna/10 outline-none disabled:cursor-not-allowed ${error ? "border-error" : "focus:border-verdigris"}`}
        placeholder="Full Name"
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <p className="absolute bottom-1 pl-4 text-error font-bold italic text-body2">
        {error}
      </p>
    </div>
  );
};

export default FullNameInput;
