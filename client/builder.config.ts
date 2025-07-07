import type { BuilderConfig } from "@builder.io/react";
import { Builder } from "@builder.io/react";

// Intuit Design System Tokens Configuration for Builder.io
export const builderConfig: BuilderConfig = {
  designTokens: {
    colors: [
      // Primary Action Colors
      {
        name: "Action Standard",
        value: "var(--color-action-standard, #0077C5)",
      },
      {
        name: "Action Standard Hover",
        value: "var(--color-action-standard-hover, #0066A9)",
      },
      {
        name: "Action Standard Active",
        value: "var(--color-action-standard-active, #055393)",
      },
      {
        name: "Action Standard Focus",
        value: "var(--color-action-standard-focus, #0077C5)",
      },

      // Negative/Error Colors
      {
        name: "Action Negative",
        value: "var(--color-action-negative, #D52B1E)",
      },
      {
        name: "Action Negative Hover",
        value: "var(--color-action-negative-hover, #C6160F)",
      },
      {
        name: "Action Negative Active",
        value: "var(--color-action-negative-active, #B80000)",
      },

      // Special Use Colors
      {
        name: "Action Special Use",
        value: "var(--color-action-special-use, #0077C5)",
      },
      {
        name: "Action Special Use Hover",
        value: "var(--color-action-special-use-hover, #0066A9)",
      },

      // Passive/Secondary Actions
      {
        name: "Action Passive",
        value: "var(--color-action-passive, #E3E5E8)",
      },
      {
        name: "Action Passive Hover",
        value: "var(--color-action-passive-hover, #D4D7DC)",
      },
      {
        name: "Action Complementary",
        value: "var(--color-action-complementary, #6B6C72)",
      },

      // Text Colors
      {
        name: "Text Primary",
        value: "var(--color-text-primary, #393A3D)",
      },
      {
        name: "Text Secondary",
        value: "var(--color-text-secondary, #6B6C72)",
      },
      {
        name: "Text Tertiary",
        value: "var(--color-text-tertiary, #8D9096)",
      },
      {
        name: "Text Quaternary",
        value: "var(--color-text-quaternary, #BABEC5)",
      },
      {
        name: "Text Accent",
        value: "var(--color-text-accent, #0077C5)",
      },
      {
        name: "Text Complementary",
        value: "var(--color-text-complementary, #6B6C72)",
      },
      {
        name: "Text Inverse",
        value: "var(--color-text-inverse, #FFFFFF)",
      },
      {
        name: "Text Disabled",
        value: "var(--color-text-disabled, #BABEC5)",
      },
      {
        name: "Text Highlight",
        value: "var(--color-text-highlight, #0077C5)",
      },

      // Background Colors
      {
        name: "Page Background Primary",
        value: "var(--color-page-background-primary, #FFFFFF)",
      },
      {
        name: "Page Background Secondary",
        value: "var(--color-page-background-secondary, #F4F5F8)",
      },
      {
        name: "Page Background Tertiary",
        value: "var(--color-page-background-tertiary, #ECEEF1)",
      },
      {
        name: "Page Background Accent",
        value: "var(--color-page-background-accent, #F5FCFF)",
      },

      // Container Colors
      {
        name: "Container Background Primary",
        value: "var(--color-container-background-primary, #FFFFFF)",
      },
      {
        name: "Container Background Secondary",
        value: "var(--color-container-background-secondary, #F4F5F8)",
      },
      {
        name: "Container Background Tertiary",
        value: "var(--color-container-background-tertiary, #E3E5E8)",
      },
      {
        name: "Container Background Accent",
        value: "var(--color-container-background-accent, #F5FCFF)",
      },
      {
        name: "Container Background Positive",
        value: "var(--color-container-background-positive, #D8FFDB)",
      },
      {
        name: "Container Background Negative",
        value: "var(--color-container-background-negative, #FFD4D8)",
      },
      {
        name: "Container Background Attention",
        value: "var(--color-container-background-attention, #FFEAC7)",
      },
      {
        name: "Container Background Info",
        value: "var(--color-container-background-info, #E0EDFF)",
      },
      {
        name: "Container Background Neutral",
        value: "var(--color-container-background-neutral, #E2E9ED)",
      },

      // Border Colors
      {
        name: "Container Border Primary",
        value: "var(--color-container-border-primary, #8D9096)",
      },
      {
        name: "Container Border Secondary",
        value: "var(--color-container-border-secondary, #BABEC5)",
      },
      {
        name: "Container Border Tertiary",
        value: "var(--color-container-border-tertiary, #D4D7DC)",
      },
      {
        name: "Container Border Accent",
        value: "var(--color-container-border-accent, #108000)",
      },
      {
        name: "Container Border Positive",
        value: "var(--color-container-border-positive, #53B700)",
      },
      {
        name: "Container Border Negative",
        value: "var(--color-container-border-negative, #E43834)",
      },

      // Icon Colors
      {
        name: "Icon Primary",
        value: "var(--color-icon-primary, #393A3D)",
      },
      {
        name: "Icon Secondary",
        value: "var(--color-icon-secondary, #6B6C72)",
      },
      {
        name: "Icon Accent",
        value: "var(--color-icon-accent, #0077C5)",
      },
      {
        name: "Icon Complementary",
        value: "var(--color-icon-complementary, #6B6C72)",
      },
      {
        name: "Icon Inverse",
        value: "var(--color-icon-inverse, #FFFFFF)",
      },
      {
        name: "Icon Disabled",
        value: "var(--color-icon-disabled, #BABEC5)",
      },

      // Data Visualization Colors
      {
        name: "Data Primary",
        value: "var(--color-data-primary, #0077C5)",
      },
      {
        name: "Data Secondary",
        value: "var(--color-data-secondary, #00A6A4)",
      },
      {
        name: "Data Tertiary",
        value: "var(--color-data-tertiary, #FF8000)",
      },
      {
        name: "Data Positive",
        value: "var(--color-data-positive, #53B700)",
      },
      {
        name: "Data Negative",
        value: "var(--color-data-negative, #E43834)",
      },
      {
        name: "Data Neutral",
        value: "var(--color-data-neutral, #8D9096)",
      },
      {
        name: "Data Attention",
        value: "var(--color-data-attention, #FF8000)",
      },

      // UI State Colors
      {
        name: "UI Primary",
        value: "var(--color-ui-primary, #0077C5)",
      },
      {
        name: "UI Primary Hover",
        value: "var(--color-ui-primary-hover, #0066A9)",
      },
      {
        name: "UI Primary Active",
        value: "var(--color-ui-primary-active, #055393)",
      },
      {
        name: "UI Secondary",
        value: "var(--color-ui-secondary, #6B6C72)",
      },
      {
        name: "UI Tertiary",
        value: "var(--color-ui-tertiary, #8D9096)",
      },
      {
        name: "UI Positive",
        value: "var(--color-ui-positive, #53B700)",
      },
      {
        name: "UI Negative",
        value: "var(--color-ui-negative, #E43834)",
      },
      {
        name: "UI Attention",
        value: "var(--color-ui-attention, #FF8000)",
      },
      {
        name: "UI Info",
        value: "var(--color-ui-info, #0097E6)",
      },
      {
        name: "UI Neutral",
        value: "var(--color-ui-neutral, #8D9096)",
      },
    ],

    spacing: [
      // Component Spacing
      {
        name: "Component Gap XS",
        value: "var(--space-component-gap-x-small, 4px)",
      },
      {
        name: "Component Gap Small",
        value: "var(--space-component-gap-small, 8px)",
      },
      {
        name: "Component Gap Medium",
        value: "var(--space-component-gap-medium, 12px)",
      },
      {
        name: "Component Gap Large",
        value: "var(--space-component-gap-large, 16px)",
      },

      // Container Padding
      {
        name: "Container Padding XXS",
        value: "var(--space-container-padding-xx-small, 4px)",
      },
      {
        name: "Container Padding XS",
        value: "var(--space-container-padding-x-small, 8px)",
      },
      {
        name: "Container Padding Small",
        value: "var(--space-container-padding-small, 12px)",
      },
      {
        name: "Container Padding Medium",
        value: "var(--space-container-padding-medium, 16px)",
      },
      {
        name: "Container Padding Large",
        value: "var(--space-container-padding-large, 24px)",
      },
      {
        name: "Container Padding XL",
        value: "var(--space-container-padding-x-large, 32px)",
      },
      {
        name: "Container Padding XXL",
        value: "var(--space-container-padding-xx-large, 48px)",
      },
      {
        name: "Container Padding XXXL",
        value: "var(--space-container-padding-xxx-large, 64px)",
      },

      // Component Inline Padding
      {
        name: "Component Inline Padding XS",
        value: "var(--space-component-inline-padding-x-small, 8px)",
      },
      {
        name: "Component Inline Padding Small",
        value: "var(--space-component-inline-padding-small, 12px)",
      },
      {
        name: "Component Inline Padding Medium",
        value: "var(--space-component-inline-padding-medium, 16px)",
      },
      {
        name: "Component Inline Padding Large",
        value: "var(--space-component-inline-padding-large, 20px)",
      },
      {
        name: "Component Inline Padding XL",
        value: "var(--space-component-inline-padding-x-large, 24px)",
      },

      // Row and Column Gaps
      {
        name: "Row Gap Small",
        value: "var(--space-row-gap-small, 8px)",
      },
      {
        name: "Row Gap Medium",
        value: "var(--space-row-gap-medium, 16px)",
      },
      {
        name: "Row Gap Large",
        value: "var(--space-row-gap-large, 24px)",
      },
      {
        name: "Row Gap XL",
        value: "var(--space-row-gap-x-large, 32px)",
      },

      {
        name: "Column Gap Small",
        value: "var(--space-column-gap-small, 8px)",
      },
      {
        name: "Column Gap Medium",
        value: "var(--space-column-gap-medium, 16px)",
      },
      {
        name: "Column Gap Large",
        value: "var(--space-column-gap-large, 24px)",
      },
      {
        name: "Column Gap XL",
        value: "var(--space-column-gap-x-large, 32px)",
      },

      // General Spacing
      {
        name: "Space XS",
        value: "var(--space-x-small, 4px)",
      },
      {
        name: "Space Small",
        value: "var(--space-small, 8px)",
      },
      {
        name: "Space Medium",
        value: "var(--space-medium, 16px)",
      },
      {
        name: "Space Large",
        value: "var(--space-large, 24px)",
      },
      {
        name: "Space XL",
        value: "var(--space-x-large, 32px)",
      },
    ],

    fontSizes: [
      // Action/Button Text
      {
        name: "Action XS",
        value: "12px",
      },
      {
        name: "Action Small",
        value: "14px",
      },
      {
        name: "Action Medium",
        value: "16px",
      },
      {
        name: "Action Large",
        value: "20px",
      },

      // Body Text
      {
        name: "Body 1",
        value: "20px",
      },
      {
        name: "Body 2",
        value: "16px",
      },
      {
        name: "Body 3",
        value: "14px",
      },
      {
        name: "Body 4",
        value: "12px",
      },

      // Headings
      {
        name: "Heading 1",
        value: "48px",
      },
      {
        name: "Heading 2",
        value: "40px",
      },
      {
        name: "Heading 3",
        value: "34px",
      },
      {
        name: "Heading 4",
        value: "28px",
      },
      {
        name: "Heading 5",
        value: "24px",
      },
      {
        name: "Heading 6",
        value: "20px",
      },

      // Display Text
      {
        name: "Display 1",
        value: "84px",
      },
      {
        name: "Display 2",
        value: "72px",
      },
      {
        name: "Display 3",
        value: "60px",
      },
      {
        name: "Display 4",
        value: "48px",
      },

      // Component Text
      {
        name: "Component XS",
        value: "12px",
      },
      {
        name: "Component Small",
        value: "14px",
      },
      {
        name: "Component Medium",
        value: "16px",
      },
      {
        name: "Component Large",
        value: "20px",
      },
      {
        name: "Component XL",
        value: "24px",
      },

      // Input Text
      {
        name: "Input Label",
        value: "14px",
      },
      {
        name: "Input Text",
        value: "16px",
      },
    ],

    fontWeights: [
      {
        name: "Body Regular",
        value: "400",
      },
      {
        name: "Body Semibold",
        value: "500",
      },
      {
        name: "Body Bold",
        value: "600",
      },
      {
        name: "Heading Regular",
        value: "600",
      },
      {
        name: "Heading Bold",
        value: "800",
      },
      {
        name: "Display Regular",
        value: "700",
      },
      {
        name: "Display Bold",
        value: "900",
      },
      {
        name: "Component Regular",
        value: "400",
      },
      {
        name: "Component Semibold",
        value: "500",
      },
      {
        name: "Component Bold",
        value: "600",
      },
    ],

    fontFamilies: [
      {
        name: "Body",
        value: "'Avenir Next forINTUIT', Avenir, Helvetica, Arial, sans-serif",
      },
      {
        name: "Heading",
        value: "'Avenir Next forINTUIT', Avenir, Helvetica, Arial, sans-serif",
      },
      {
        name: "Display",
        value: "'Avenir Next forINTUIT', Avenir, Helvetica, Arial, sans-serif",
      },
      {
        name: "Component",
        value: "'Avenir Next forINTUIT', Avenir, Helvetica, Arial, sans-serif",
      },
      {
        name: "Graphik Web (Mailchimp)",
        value: "'Graphik Web', Avenir, Helvetica, Arial, sans-serif",
      },
      {
        name: "Means Web (Mailchimp Headings)",
        value:
          "'Means Web', 'Graphik Web', Avenir, Helvetica, Arial, sans-serif",
      },
      {
        name: "National2 (Credit Karma)",
        value: "'National2', Avenir, Helvetica, Arial, sans-serif",
      },
    ],

    lineHeights: [
      {
        name: "Body",
        value: "1.5",
      },
      {
        name: "Heading",
        value: "1.3",
      },
      {
        name: "Display",
        value: "1.3",
      },
      {
        name: "Component",
        value: "1.3",
      },
    ],

    borderRadius: [
      {
        name: "None",
        value: "var(--radius-none, 0px)",
      },
      {
        name: "XS",
        value: "var(--radius-x-small, 2px)",
      },
      {
        name: "Small",
        value: "var(--radius-small, 4px)",
      },
      {
        name: "Medium",
        value: "var(--radius-medium, 6px)",
      },
      {
        name: "Large",
        value: "var(--radius-large, 8px)",
      },
      {
        name: "XL",
        value: "var(--radius-x-large, 12px)",
      },
      {
        name: "Action",
        value: "var(--radius-action, 6px)",
      },
      {
        name: "Full",
        value: "var(--radius-full, 9999px)",
      },
    ],

    shadows: [
      {
        name: "None",
        value: "var(--elevation-level-0, none)",
      },
      {
        name: "Level 1",
        value:
          "var(--elevation-level-1, 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1))",
      },
      {
        name: "Level 2",
        value:
          "var(--elevation-level-2, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1))",
      },
      {
        name: "Level 3",
        value:
          "var(--elevation-level-3, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1))",
      },
      {
        name: "Level 4",
        value:
          "var(--elevation-level-4, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1))",
      },
    ],
  },

  // Theme configurations
  themes: [
    {
      id: "intuit-light",
      name: "Intuit Light",
      isDefault: true,
    },
    {
      id: "intuit-dark",
      name: "Intuit Dark",
    },
    {
      id: "quickbooks-light",
      name: "QuickBooks Light",
    },
    {
      id: "quickbooks-dark",
      name: "QuickBooks Dark",
    },
    {
      id: "turbotax-light",
      name: "TurboTax Light",
    },
    {
      id: "turbotax-dark",
      name: "TurboTax Dark",
    },
    {
      id: "mailchimp-light",
      name: "Mailchimp Light",
    },
    {
      id: "mailchimp-dark",
      name: "Mailchimp Dark",
    },
    {
      id: "creditkarma-light",
      name: "Credit Karma Light",
    },
    {
      id: "creditkarma-dark",
      name: "Credit Karma Dark",
    },
  ],
};

Builder.register("editor.settings", builderConfig);

export default builderConfig;
