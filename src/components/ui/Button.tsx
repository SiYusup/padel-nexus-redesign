import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "signal";

const cls: Record<Variant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  signal: "btn btn-signal",
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };

export function Button({
  variant = "outline",
  className = "",
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={`${cls[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "outline",
  className = "",
  children,
  href,
  external,
  ...props
}: CommonProps &
  Omit<ComponentProps<"a">, "href"> & { href: string; external?: boolean }) {
  const c = `${cls[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={c} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={c} {...props}>
      {children}
    </Link>
  );
}
