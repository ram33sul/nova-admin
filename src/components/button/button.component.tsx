import { ButtonHTMLAttributes } from "react";
import { classNamesMap } from "./button.util";
import { ButtonStyleType } from "./button.d";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  styletype?: ButtonStyleType;
  loading?: boolean;
}

export default function Button({
  styletype = ButtonStyleType.PRIMARY,
  loading = false,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`relative rounded-lg hover:opacity-75 active:opacity-95 px-2 cursor-pointer border-[1px] ${classNamesMap[styletype]} ${className}`}
    >
      <span
        className={`flex gap-2 items-center justify-center ${
          loading ? "opacity-0" : ""
        }`}
      >
        {props.children}
      </span>
      {loading ? (
        <AiOutlineLoading3Quarters className="absolute top-[50%] left-[50%] translate-[-50%] animate-spin" />
      ) : null}
    </button>
  );
}
