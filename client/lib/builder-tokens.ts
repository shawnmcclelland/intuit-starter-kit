import { Builder } from "@builder.io/react";

// Register Intuit Design System tokens with Builder.io
Builder.register("editor.settings", {
  styleStrictMode: true,
  designTokens: {
    colors: [
      // Primary Action Colors
      {
        name: "Action Standard",
        value: "var(--color-action-standard)",
      },
      {
        name: "Action Standard Hover",
        value: "var(--color-action-standard-hover)",
      },
      {
        name: "Action Standard Active",
        value: "var(--color-action-standard-active)",
      },
      {
        name: "Action Standard Focus",
        value: "var(--color-action-standard-focus)",
      },

      // Negative/Error Colors
      {
        name: "Action Negative",
        value: "var(--color-action-negative)",
      },
      {
        name: "Action Negative Hover",
        value: "var(--color-action-negative-hover)",
      },
      {
        name: "Action Negative Active",
        value: "var(--color-action-negative-active)",
      },

      // Special Use Colors
      {
        name: "Action Special Use",
        value: "var(--color-action-special-use)",
      },
      {
        name: "Action Special Use Hover",
        value: "var(--color-action-special-use-hover)",
      },

      // Passive/Secondary Actions
      { name: "Action Passive", value: "var(--color-action-passive)" },
      {
        name: "Action Passive Hover",
        value: "var(--color-action-passive-hover)",
      },
      {
        name: "Action Complementary",
        value: "var(--color-action-complementary)",
      },

      // Text Colors
      { name: "Text Primary", value: "var(--color-text-primary)" },
      { name: "Text Secondary", value: "var(--color-text-secondary)" },
      { name: "Text Tertiary", value: "var(--color-text-tertiary)" },
      {
        name: "Text Quaternary",
        value: "var(--color-text-quaternary)",
      },
      { name: "Text Accent", value: "var(--color-text-accent)" },
      {
        name: "Text Complementary",
        value: "var(--color-text-complementary)",
      },
      { name: "Text Inverse", value: "var(--color-text-inverse)" },
      { name: "Text Disabled", value: "var(--color-text-disabled)" },
      { name: "Text Highlight", value: "var(--color-text-highlight)" },

      // Background Colors
      {
        name: "Page Background Primary",
        value: "var(--color-page-background-primary)",
      },
      {
        name: "Page Background Secondary",
        value: "var(--color-page-background-secondary)",
      },
      {
        name: "Page Background Tertiary",
        value: "var(--color-page-background-tertiary)",
      },
      {
        name: "Page Background Accent",
        value: "var(--color-page-background-accent)",
      },

      // Container Colors
      {
        name: "Container Background Primary",
        value: "var(--color-container-background-primary)",
      },
      {
        name: "Container Background Secondary",
        value: "var(--color-container-background-secondary)",
      },
      {
        name: "Container Background Tertiary",
        value: "var(--color-container-background-tertiary)",
      },
      {
        name: "Container Background Accent",
        value: "var(--color-container-background-accent)",
      },
      {
        name: "Container Background Positive",
        value: "var(--color-container-background-positive)",
      },
      {
        name: "Container Background Negative",
        value: "var(--color-container-background-negative)",
      },
      {
        name: "Container Background Attention",
        value: "var(--color-container-background-attention)",
      },
      {
        name: "Container Background Info",
        value: "var(--color-container-background-info)",
      },
      {
        name: "Container Background Neutral",
        value: "var(--color-container-background-neutral)",
      },

      // Border Colors
      {
        name: "Container Border Primary",
        value: "var(--color-container-border-primary)",
      },
      {
        name: "Container Border Secondary",
        value: "var(--color-container-border-secondary)",
      },
      {
        name: "Container Border Tertiary",
        value: "var(--color-container-border-tertiary)",
      },
      {
        name: "Container Border Accent",
        value: "var(--color-container-border-accent)",
      },
      {
        name: "Container Border Positive",
        value: "var(--color-container-border-positive)",
      },
      {
        name: "Container Border Negative",
        value: "var(--color-container-border-negative)",
      },

      // Icon Colors
      { name: "Icon Primary", value: "var(--color-icon-primary)" },
      { name: "Icon Secondary", value: "var(--color-icon-secondary)" },
      { name: "Icon Accent", value: "var(--color-icon-accent)" },
      {
        name: "Icon Complementary",
        value: "var(--color-icon-complementary)",
      },
      { name: "Icon Inverse", value: "var(--color-icon-inverse)" },
      { name: "Icon Disabled", value: "var(--color-icon-disabled)" },
    ],

    spacing: [
      // Component Spacing
      {
        name: "Component Gap XS",
        value: "var(--space-component-gap-x-small)",
      },
      {
        name: "Component Gap Small",
        value: "var(--space-component-gap-small)",
      },
      {
        name: "Component Gap Medium",
        value: "var(--space-component-gap-medium)",
      },
      {
        name: "Component Gap Large",
        value: "var(--space-component-gap-large)",
      },

      // Container Padding
      {
        name: "Container Padding XXS",
        value: "var(--space-container-padding-xx-small)",
      },
      {
        name: "Container Padding XS",
        value: "var(--space-container-padding-x-small)",
      },
      {
        name: "Container Padding Small",
        value: "var(--space-container-padding-small)",
      },
      {
        name: "Container Padding Medium",
        value: "var(--space-container-padding-medium)",
      },
      {
        name: "Container Padding Large",
        value: "var(--space-container-padding-large)",
      },
      {
        name: "Container Padding XL",
        value: "var(--space-container-padding-x-large)",
      },
      {
        name: "Container Padding XXL",
        value: "var(--space-container-padding-xx-large)",
      },
      {
        name: "Container Padding XXXL",
        value: "var(--space-container-padding-xxx-large)",
      },

      // Component Inline Padding
      {
        name: "Component Inline Padding XS",
        value: "var(--space-component-inline-padding-x-small)",
      },
      {
        name: "Component Inline Padding Small",
        value: "var(--space-component-inline-padding-small)",
      },
      {
        name: "Component Inline Padding Medium",
        value: "var(--space-component-inline-padding-medium)",
      },
      {
        name: "Component Inline Padding Large",
        value: "var(--space-component-inline-padding-large)",
      },
      {
        name: "Component Inline Padding XL",
        value: "var(--space-component-inline-padding-x-large)",
      },

      // Row and Column Gaps
      { name: "Row Gap Small", value: "var(--space-row-gap-small)" },
      { name: "Row Gap Medium", value: "var(--space-row-gap-medium)" },
      { name: "Row Gap Large", value: "var(--space-row-gap-large)" },
      { name: "Row Gap XL", value: "var(--space-row-gap-x-large)" },

      { name: "Column Gap Small", value: "var(--space-column-gap-small)" },
      {
        name: "Column Gap Medium",
        value: "var(--space-column-gap-medium)",
      },
      {
        name: "Column Gap Large",
        value: "var(--space-column-gap-large)",
      },
      { name: "Column Gap XL", value: "var(--space-column-gap-x-large)" },

      // General Spacing
      { name: "Space XS", value: "var(--space-x-small)" },
      { name: "Space Small", value: "var(--space-small)" },
      { name: "Space Medium", value: "var(--space-medium)" },
      { name: "Space Large", value: "var(--space-large)" },
      { name: "Space XL", value: "var(--space-x-large)" },
    ],

    fontFamily: [
      {
        name: "Body Font",
        value: "var(--font-family-body)",
      },
      {
        name: "Heading Font",
        value: "var(--font-family-heading)",
      },
      {
        name: "Display Font",
        value: "var(--font-family-display)",
      },
      {
        name: "Component Font",
        value: "var(--font-family-component)",
      },
    ],

    fontSize: [
      // Action/Button Text
      { name: "Action XS", value: "var(--font-size-action-x-small)" },
      { name: "Action Small", value: "var(--font-size-action-small)" },
      { name: "Action Medium", value: "var(--font-size-action-medium)" },
      { name: "Action Large", value: "var(--font-size-action-large)" },

      // Body Text
      { name: "Body 1", value: "var(--font-size-body-1)" },
      { name: "Body 2", value: "var(--font-size-body-2)" },
      { name: "Body 3", value: "var(--font-size-body-3)" },
      { name: "Body 4", value: "var(--font-size-body-4)" },

      // Headings
      { name: "Heading 1", value: "var(--font-size-heading-1)" },
      { name: "Heading 2", value: "var(--font-size-heading-2)" },
      { name: "Heading 3", value: "var(--font-size-heading-3)" },
      { name: "Heading 4", value: "var(--font-size-heading-4)" },
      { name: "Heading 5", value: "var(--font-size-heading-5)" },
      { name: "Heading 6", value: "var(--font-size-heading-6)" },

      // Display Text
      { name: "Display 1", value: "var(--font-size-display-1)" },
      { name: "Display 2", value: "var(--font-size-display-2)" },
      { name: "Display 3", value: "var(--font-size-display-3)" },
      { name: "Display 4", value: "var(--font-size-display-4)" },

      // Component Text
      {
        name: "Component XS",
        value: "var(--font-size-component-x-small)",
      },
      {
        name: "Component Small",
        value: "var(--font-size-component-small)",
      },
      {
        name: "Component Medium",
        value: "var(--font-size-component-medium)",
      },
      {
        name: "Component Large",
        value: "var(--font-size-component-large)",
      },
      {
        name: "Component XL",
        value: "var(--font-size-component-x-large)",
      },

      // Input Text
      { name: "Input Label", value: "var(--font-size-input-label)" },
      { name: "Input Text", value: "var(--font-size-input-text)" },
    ],

    fontWeight: [
      { name: "Body Regular", value: "var(--font-weight-body)" },
      { name: "Body Semibold", value: "var(--font-weight-body-semibold)" },
      { name: "Body Bold", value: "var(--font-weight-body-bold)" },
      { name: "Heading Regular", value: "var(--font-weight-heading)" },
      { name: "Heading Bold", value: "var(--font-weight-heading-bold)" },
      { name: "Display Regular", value: "var(--font-weight-display)" },
      { name: "Display Bold", value: "var(--font-weight-display-bold)" },
      { name: "Component Regular", value: "var(--font-weight-component)" },
      {
        name: "Component Semibold",
        value: "var(--font-weight-component-semibold)",
      },
      {
        name: "Component Bold",
        value: "var(--font-weight-component-bold)",
      },
    ],

    lineHeight: [
      { name: "Body", value: "var(--line-height-body)" },
      { name: "Heading", value: "var(--line-height-heading)" },
      { name: "Display", value: "var(--line-height-display)" },
      { name: "Component", value: "var(--line-height-component)" },
    ],

    borderRadius: [
      { name: "None", value: "var(--radius-none)" },
      { name: "XS", value: "var(--radius-x-small)" },
      { name: "Small", value: "var(--radius-small)" },
      { name: "Medium", value: "var(--radius-medium)" },
      { name: "Large", value: "var(--radius-large)" },
      { name: "XL", value: "var(--radius-x-large)" },
      { name: "Action", value: "var(--radius-action)" },
      { name: "Full", value: "var(--radius-full)" },
    ],

    boxShadow: [
      { name: "None", value: "var(--elevation-level-0)" },
      {
        name: "Level 1",
        value: "var(--elevation-level-1)",
      },
      {
        name: "Level 2",
        value: "var(--elevation-level-2)",
      },
      {
        name: "Level 3",
        value: "var(--elevation-level-3)",
      },
      {
        name: "Level 4",
        value: "var(--elevation-level-4)",
      },
    ],
  },
});
