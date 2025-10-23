"use client";
import React, { useState, forwardRef } from "react";

type FloatingInputProps = {
  id?: string;
  value?: string | number;
  type?: string;
  width?: string;
  title?: string;
  className?: string;
  height?: string;
  bgColor?: string;
  labelFont?: string;
  inputLabel?: string;
  placeholder?: string;
  labelColor?: string;
  validationType?: "letters" | "numbers";
  inputClassName?: string;
  error?: string;
  validationMessage?: string;
  validationRegex?: RegExp;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onValidationError?: (message: string) => void;
};

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    {
      id,
      value,
      title,
      error,
      onChange,
      onKeyDown,
      className = "",
      validationType,
      inputClassName = "",
      onValidationError,
      width = "100%",
      labelFont = "400",
      bgColor = "transparent",
      type = "text",
      height = "46px",
      labelColor = "#2D2D2D",
    },
    ref
  ) => {
    const [localError, setLocalError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      let errorMessage = "";

      if (inputValue === "") {
        setLocalError(null);
        onChange?.(e);
        return;
      }

      if (validationType === "letters") {
        if (/[^a-zA-Z\s]/.test(inputValue)) {
          errorMessage = "Letters only (e.g., Name).";
        }
      }

      if (validationType === "numbers") {
        if (!/^\d*(\.\d*)?$/.test(inputValue)) {
          errorMessage = "Only numbers and decimals allowed.";
        }
        if ((inputValue.match(/\./g) || []).length > 1) {
          errorMessage = "Only one decimal point is allowed.";
        }
      }

      if (errorMessage) {
        setLocalError(errorMessage);
        onValidationError?.(errorMessage);
      } else {
        setLocalError(null);
        onChange?.(e);
      }
    };

    return (
      <div className={`relative w-full ${className}`}>
        <input
          id={id}
          type={type}
          ref={ref}
          value={value}
          onKeyDown={onKeyDown}
          placeholder=" "
          onChange={handleInputChange}
          min={type === "number" ? 0 : undefined}
          style={{ height, width, backgroundColor: bgColor }}
          className={`peer block w-full rounded-md border border-[#2E2C39] px-4 text-[12px] text-black focus:outline-none placeholder-transparent ${inputClassName} autofill:bg-white`}
        />
        <label
          htmlFor={id}
          className={`absolute left-3 bg-white px-1 text-gray-500 transition-all 
            top-1/2 -translate-y-1/2 text-[13px]
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[13px] peer-placeholder-shown:text-gray-400
            peer-focus:top-[1px] peer-focus:text-[13px]
            peer-[&:not(:placeholder-shown)]:top-[-1px] peer-[&:not(:placeholder-shown)]:text-[13px]
            peer-[&:-webkit-autofill]:-top-[1px] peer-[&:-webkit-autofill]:text-[13px]`}
          style={{ color: labelColor, fontWeight: labelFont }}
        >
          {title}
        </label>

        {(error || localError) && (
          <div className="mt-1">
            <span className="text-sm text-red-500">{error || localError}</span>
          </div>
        )}

        <style jsx>{`
          input:-webkit-autofill {
            box-shadow: 0 0 0px 1000px white inset !important;
            -webkit-text-fill-color: #000 !important;
            transition: background-color 9999s ease-in-out 0s;
          }
        `}</style>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
export default FloatingInput;
