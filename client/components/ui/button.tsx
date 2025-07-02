import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Get design token styles directly
const getTokenStyles = (variant?: string, size?: string) => {
  const baseStyles: React.CSSProperties = {
    fontFamily: "var(--font-family-component)",
    borderRadius: "var(--radius-medium)",
    border: "1px solid transparent",
    cursor: "pointer",
    fontWeight: "var(--font-weight-component-semibold)",
    transition: "all 0.15s ease",
  };

  const variantStyles: React.CSSProperties = (() => {
    switch (variant) {
      case "destructive":
        return {
          backgroundColor: "var(--color-action-negative)",
          color: "var(--color-text-inverse)",
          borderColor: "var(--color-action-negative)",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "var(--color-action-standard)",
          borderColor: "var(--color-action-standard)",
        };
      case "secondary":
        return {
          backgroundColor: "var(--color-action-complementary)",
          color: "var(--color-text-inverse)",
          borderColor: "var(--color-action-complementary)",
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          color: "var(--color-text-primary)",
          borderColor: "transparent",
        };
      case "link":
        return {
          backgroundColor: "transparent",
          color: "var(--color-action-standard)",
          borderColor: "transparent",
          textDecoration: "underline",
        };
      default: // default variant
        return {
          backgroundColor: "var(--color-action-standard)",
          color: "var(--color-text-inverse)",
          borderColor: "var(--color-action-standard)",
        };
    }
  })();

  const sizeStyles: React.CSSProperties = (() => {
    switch (size) {
      case "sm":
        return {
          padding:
            "var(--space-component-inline-padding-x-small) var(--space-component-inline-padding-small)",
          fontSize: "var(--font-size-component-small)",
          height: "36px",
        };
      case "lg":
        return {
          padding:
            "var(--space-component-inline-padding-medium) var(--space-component-inline-padding-x-large)",
          fontSize: "var(--font-size-component-large)",
          height: "48px",
        };
      case "icon":
        return {
          width: "40px",
          height: "40px",
          padding: "0",
          fontSize: "var(--font-size-component-medium)",
        };
      default:
        return {
          padding:
            "var(--space-component-inline-padding-small) var(--space-component-inline-padding-medium)",
          fontSize: "var(--font-size-component-medium)",
          height: "40px",
        };
    }
  })();

  return { ...baseStyles, ...variantStyles, ...sizeStyles };
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const tokenStyles = getTokenStyles(variant, size);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={{ ...tokenStyles, ...style }}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
