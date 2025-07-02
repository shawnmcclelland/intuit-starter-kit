import React from "react";
import { Builder } from "@builder.io/react";
import { Button } from "@/components/ui/button";

// Register Button component with Builder.io to use design tokens
Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Button",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "default",
      options: [
        { label: "Default (Action Standard)", value: "default" },
        { label: "Destructive (Action Negative)", value: "destructive" },
        { label: "Outline (Action Standard)", value: "outline" },
        { label: "Secondary (Action Passive)", value: "secondary" },
        { label: "Ghost", value: "ghost" },
        { label: "Link (Action Standard)", value: "link" },
      ],
      helperText: "Button variant using design tokens",
    },
    {
      name: "size",
      type: "select",
      defaultValue: "default",
      options: [
        { label: "Default", value: "default" },
        { label: "Small", value: "sm" },
        { label: "Large", value: "lg" },
        { label: "Icon", value: "icon" },
      ],
      helperText: "Button size using design token spacing",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
  ],
  // Override default styles to use design tokens explicitly
  defaultStyles: {
    backgroundColor: "var(--color-action-standard)",
    color: "var(--color-text-inverse)",
    borderColor: "var(--color-action-standard)",
    borderRadius: "var(--radius-action)",
    padding:
      "var(--space-component-inline-padding-small) var(--space-component-inline-padding-medium)",
    fontFamily: "var(--font-family-component)",
    fontSize: "var(--font-size-component-medium)",
    fontWeight: "var(--font-weight-component-semibold)",
    border: "1px solid",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-component-gap-small)",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
    textDecoration: "none",
  },
  canHaveChildren: true,
  noWrap: false,
});

// Register a design token aware button component
const DesignTokenButton = (props: {
  text?: string;
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "small" | "medium" | "large";
}) => {
  const { text = "Button", variant = "primary", size = "medium" } = props;

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "var(--color-action-standard)",
          color: "var(--color-text-inverse)",
          borderColor: "var(--color-action-standard)",
        };
      case "secondary":
        return {
          backgroundColor: "var(--color-action-passive)",
          color: "var(--color-text-primary)",
          borderColor: "var(--color-action-passive)",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: "var(--color-action-standard)",
          borderColor: "var(--color-action-standard)",
        };
      case "destructive":
        return {
          backgroundColor: "var(--color-action-negative)",
          color: "var(--color-text-inverse)",
          borderColor: "var(--color-action-negative)",
        };
      default:
        return {
          backgroundColor: "var(--color-action-standard)",
          color: "var(--color-text-inverse)",
          borderColor: "var(--color-action-standard)",
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          padding:
            "var(--space-component-inline-padding-x-small) var(--space-component-inline-padding-small)",
          fontSize: "var(--font-size-component-small)",
          height: "36px",
        };
      case "large":
        return {
          padding:
            "var(--space-component-inline-padding-medium) var(--space-component-inline-padding-x-large)",
          fontSize: "var(--font-size-component-large)",
          height: "48px",
        };
      default:
        return {
          padding:
            "var(--space-component-inline-padding-small) var(--space-component-inline-padding-medium)",
          fontSize: "var(--font-size-component-medium)",
          height: "40px",
        };
    }
  };

  return React.createElement(
    "button",
    {
      style: {
        ...getVariantStyles(),
        ...getSizeStyles(),
        fontFamily: "var(--font-family-component)",
        fontWeight: "var(--font-weight-component-semibold)",
        borderRadius: "var(--radius-action)",
        border: "1px solid",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-component-gap-small)",
        whiteSpace: "nowrap",
        transition: "all 0.2s ease",
        textDecoration: "none",
      },
    },
    text,
  );
};

Builder.registerComponent(DesignTokenButton, {
  name: "Design Token Button",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Button",
      helperText: "Button text content",
    },
    {
      name: "variant",
      type: "select",
      defaultValue: "primary",
      options: [
        { label: "Primary (Action Standard)", value: "primary" },
        { label: "Secondary (Action Passive)", value: "secondary" },
        { label: "Outline (Action Standard)", value: "outline" },
        { label: "Destructive (Action Negative)", value: "destructive" },
      ],
      helperText: "Button variant using design tokens",
    },
    {
      name: "size",
      type: "select",
      defaultValue: "medium",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
      helperText: "Button size using design token spacing",
    },
  ],
  noWrap: true,
  canHaveChildren: false,
});
