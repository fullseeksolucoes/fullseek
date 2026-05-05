import Link from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  target,
  rel,
  ...props
}: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    outline: "border border-white/20 text-white hover:bg-white/10",
    whatsapp:
      "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const computedTarget = external ? "_blank" : target;
  const computedRel = external ? "noopener noreferrer" : rel;

  return (
    <Link
      href={href}
      target={computedTarget}
      rel={computedRel}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {variant === "whatsapp" && <FaWhatsapp className="text-xl" />}
      {children}
    </Link>
  );
}
