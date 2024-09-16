import { memo } from "react";
import classnames from "classnames";

interface inputFieldPropTypes
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  fontSize?: "xl" | "md" | "sm";
  variant?: "xl" | "md" | "sm";
  usage?: "form" | "search";
  outline?: boolean;
  className?: string;
}

export const InputField = memo(
  ({
    fontSize = "md",
    variant = "md",
    usage = "form",
    className,
    outline = false,
    ...other
  }: inputFieldPropTypes) => {
    return (
      <input
        type="text"
        className={classnames(`${className}`, {
          "border border-med-blue border-opacity-[.5]": outline,
          "bg-white": usage === "form",
          "bg-grey": usage === "search",
          "text-xl": fontSize === "xl",
          "text-md": fontSize === "md",
          "text-sm": fontSize === "sm",
          "p-5": variant === "xl",
          "p-3": variant === "md",
          "p-2": variant === "sm",
        })}
        {...other}
      />
    );
  }
);
