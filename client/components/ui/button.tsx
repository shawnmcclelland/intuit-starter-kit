import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Design token style mapping for Builder.io
const getDesignTokenStyles = (variant?: string, size?: string) => {
  const baseStyles = {
    fontFamily: "var(--font-family-component)",
    borderRadius: "var(--radius-action)",
    border: "1px solid transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-component-gap-small)",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
    textDecoration: "none",
  };

  const variantStyles = (() => {
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
          backgroundColor: "var(--color-action-passive)",
          color: "var(--color-text-primary)",
          borderColor: "var(--color-action-passive)",
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

  const sizeStyles = (() => {
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
          height: "44px",
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

    // Check if we're in Builder.io context and use design token styles
    const isBuilderContext =
      (typeof window !== "undefined" && (window as any).builderContext) ||
      (typeof document !== "undefined" &&
        document.querySelector("[data-builder-context]"));

    const designTokenStyles = isBuilderContext
      ? getDesignTokenStyles(variant, size)
      : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={{ ...designTokenStyles, ...style }}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
