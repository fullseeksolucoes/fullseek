import Link from "next/link";
import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
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
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    outline: "border border-white/20 text-white hover:bg-white/10",
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
        "inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
