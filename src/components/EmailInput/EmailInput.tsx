import React, { useState } from "react";

interface EmailInputProps {
  disabled?: boolean;
  onBlur: (value: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  disabled = false,
  onBlur,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      setError("This field is required");
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      setError("Invalid email format");
    } else {
      setError(null);
      onBlur(value);
    }
  };

  return (
    <div className="pb-6 relative">
      <label
        className={`pl-4 block text-tuna font-header font-bold mb-1 ${
          error ? "text-error" : ""
        }`}>
        Email
      </label>
      <input
        type="email"
        disabled={disabled}
        className={`appearance-none border-2 w-full py-2 px-3 text-tuna bg-tuna/10 outline-none disabled:cursor-not-allowed ${error ? "border-error" : "focus:border-verdigris"}`}
        placeholder="email@address.com"
        onBlur={(e) => handleBlur(e.target.value)}
      />
      <p className="absolute bottom-1 pl-4 text-error font-bold italic text-body2">
        {error}
      </p>
    </div>
  );
};

export default EmailInput;
