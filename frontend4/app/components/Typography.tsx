import { type ReactNode } from "react";

type Variant =
  | "eyebrow"
  | "h1"
  | "h2"
  | "h2-sm"
  | "h3"
  | "body"
  | "body-sm"
  | "body-lg"
  | "caption"
  | "label"
  | "logo"
  | "nav"
  | "form-label"
  | "badge"
  | "stat";

const variantMap: Record<Variant, { tag: keyof JSX.IntrinsicElements; className: string }> = {
  eyebrow:      { tag: "p",     className: "type-eyebrow" },
  h1:           { tag: "h1",    className: "type-h1" },
  h2:           { tag: "h2",    className: "type-h2" },
  "h2-sm":      { tag: "h2",    className: "type-h2-sm" },
  h3:           { tag: "h3",    className: "type-h3" },
  body:         { tag: "p",     className: "type-body" },
  "body-sm":    { tag: "p",     className: "type-body-sm" },
  "body-lg":    { tag: "p",     className: "type-body-lg" },
  caption:      { tag: "p",     className: "type-caption" },
  label:        { tag: "span",  className: "type-label" },
  logo:         { tag: "span",  className: "type-logo" },
  nav:          { tag: "span",  className: "type-nav" },
  "form-label": { tag: "label", className: "type-form-label" },
  badge:        { tag: "span",  className: "type-badge" },
  stat:         { tag: "p",     className: "type-stat" },
};

interface Props {
  variant: Variant;
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Typography({ variant, children, className = "", as }: Props) {
  const { tag: DefaultTag, className: variantClass } = variantMap[variant];
  const Tag = as ?? DefaultTag;
  return <Tag className={`${variantClass} ${className}`.trim()}>{children}</Tag>;
}
