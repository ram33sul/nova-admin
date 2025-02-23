import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  options: {
    label: string;
    value: string | number;
  }[];
  label?: string;
}

export default function Select({ options, label = "Select", ...props }: Props) {
  return (
    <select
      {...props}
      className={`border-[1px] border-gray-500 relative rounded-lg focus:outline-[1px] outline-black dark:outline-white py-2 ${props.className}`}
    >
      {options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
