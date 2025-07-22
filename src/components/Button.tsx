import { cn } from "../lib/utils";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled,
  variant = "default",
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-2xl p-2.5 justify-center flex items-center gap-2.5 w-full transition-colors duration-200",
        variant === "default" &&
          "bg-primary text-secondary hover:bg-primary-hover",
        variant === "secondary" &&
          "bg-secondary text-primary border border-primary",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
