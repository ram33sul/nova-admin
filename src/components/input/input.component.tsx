import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputClassNames?: string;
}

export default function Input({
  label = "Type here",
  error = "",
  inputClassNames = "",
  ...props
}: Props) {
  return (
    <div className={`relative ${props.className}`}>
      <input
        {...props}
        placeholder=" "
        className={`relative peer w-full p-2 border-[1px] ${
          error ? "border-red-500" : "border-gray-500"
        } rounded-lg focus:outline-[1px] outline-black dark:outline-white ${inputClassNames}`}
      />
      <label className="absolute peer-placeholder-shown:-z-10 peer-placeholder-shown:top-[50%] -translate-y-[50%] left-2 peer-placeholder-shown:opacity-50 peer-placeholder-shown:text-base top-0 text-xs px-2 bg-white dark:bg-black z-10 transition-all text-black/75 dark:text-white/75">
        {error || label}
      </label>
    </div>
  );
}
