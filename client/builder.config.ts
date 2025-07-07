import type { BuilderConfig } from "@builder.io/react";
import { Builder } from "@builder.io/react";

// Intuit Design System Tokens Configuration for Builder.io
export const builderConfig: BuilderConfig = {
  designTokens: {
    colors: [
      // Primary Action Colors
      {
        name: "Action Standard",
        value: "#0077C5",
      },
      {
        name: "Action Standard Hover",
        value: "#0066A9",
      },
      {
        name: "Action Standard Active",
        value: "#055393",
      },
      {
        name: "Action Standard Focus",
        value: "#0077C5",
      },

      // Negative/Error Colors
      {
        name: "Action Negative",
        value: "#D52B1E",
      },
      {
        name: "Action Negative Hover",
        value: "#C6160F",
      },
      {
        name: "Action Negative Active",
        value: "#B80000",
      },

      // Special Use Colors
      {
        name: "Action Special Use",
        value: "#FF6A00",
      },
      {
        name: "Action Special Use Hover",
        value: "#FC6000",
      },

      // Passive/Secondary Actions
      {
        name: "Action Passive",
        value: "#E3E5E8",
      },
      {
        name: "Action Passive Hover",
        value: "#D4D7DC",
      },
      {
        name: "Action Complementary",
        value: "#6B6C72",
      },

      // Text Colors
      {
        name: "Text Primary",
        value: "#393A3D",
      },
      {
        name: "Text Secondary",
        value: "#6B6C72",
      },
      {
        name: "Text Tertiary",
        value: "#8D9096",
      },
      {
        name: "Text Quaternary",
        value: "#BABEC5",
      },
      {
        name: "Text Accent",
        value: "#0077C5",
      },
      {
        name: "Text Complementary",
        value: "#6B6C72",
      },
      {
        name: "Text Inverse",
        value: "#FFFFFF",
      },
      {
        name: "Text Disabled",
        value: "#BABEC5",
      },
      {
        name: "Text Highlight",
        value: "#0077C5",
      },

      // Background Colors
      {
        name: "Page Background Primary",
        value: "#FFFFFF",
      },
      {
        name: "Page Background Secondary",
        value: "#F4F5F8",
      },
      {
        name: "Page Background Tertiary",
        value: "#ECEEF1",
      },
      {
        name: "Page Background Accent",
        value: "#F5FCFF",
      },

      // Container Colors
      {
        name: "Container Background Primary",
        value: "#FFFFFF",
      },
      {
        name: "Container Background Secondary",
        value: "#F4F5F8",
      },
      {
        name: "Container Background Tertiary",
        value: "#E3E5E8",
      },
      {
        name: "Container Background Accent",
        value: "#F5FCFF",
      },
      {
        name: "Container Background Positive",
        value: "#E5F4D9",
      },
      {
        name: "Container Background Negative",
        value: "#FAD7D6",
      },
      {
        name: "Container Background Attention",
        value: "#FFECD9",
      },
      {
        name: "Container Background Info",
        value: "#D9EFFB",
      },
      {
        name: "Container Background Neutral",
        value: "#EEEEEF",
      },

      // Border Colors
      {
        name: "Container Border Primary",
        value: "#D4D7DC",
      },
      {
        name: "Container Border Secondary",
        value: "#8D9096",
      },
      {
        name: "Container Border Tertiary",
        value: "#BABEC5",
      },
      {
        name: "Container Border Accent",
        value: "#0097E6",
      },
      {
        name: "Container Border Positive",
        value: "#53B700",
      },
      {
        name: "Container Border Negative",
        value: "#E43834",
      },

      // Icon Colors
      {
        name: "Icon Primary",
        value: "#393A3D",
      },
      {
        name: "Icon Secondary",
        value: "#6B6C72",
      },
      {
        name: "Icon Accent",
        value: "#0077C5",
      },
      {
        name: "Icon Complementary",
        value: "#FFFFFF",
      },
      {
        name: "Icon Inverse",
        value: "#FFFFFF",
      },
      {
        name: "Icon Disabled",
        value: "#8D9096",
      },

      // Data Visualization Colors
      {
        name: "Data Primary",
        value: "#0097E6",
      },
      {
        name: "Data Secondary",
        value: "#00A6A4",
      },
      {
        name: "Data Tertiary",
        value: "#7A3DD8",
      },
      {
        name: "Data Positive",
        value: "#2CA01C",
      },
      {
        name: "Data Negative",
        value: "#E43834",
      },
      {
        name: "Data Neutral",
        value: "#BABEC5",
      },
      {
        name: "Data Attention",
        value: "#FF8000",
      },

      // UI State Colors
      {
        name: "UI Primary",
        value: "#0077C5",
      },
      {
        name: "UI Primary Hover",
        value: "#1067AA",
      },
      {
        name: "UI Primary Active",
        value: "#055393",
      },
      {
        name: "UI Secondary",
        value: "#393A3D",
      },
      {
        name: "UI Tertiary",
        value: "#393A3D",
      },
      {
        name: "UI Positive",
        value: "#108000",
      },
      {
        name: "UI Negative",
        value: "#D52B1E",
      },
      {
        name: "UI Attention",
        value: "#FF6A00",
      },
      {
        name: "UI Info",
        value: "#0077C5",
      },
      {
        name: "UI Neutral",
        value: "#6B6C72",
      },
    ],

    spacing: [
      // Component Spacing
      {
        name: "Component Gap XS",
        value: "2px",
      },
      {
        name: "Component Gap Small",
        value: "4px",
      },
      {
        name: "Component Gap Medium",
        value: "8px",
      },
      {
        name: "Component Gap Large",
        value: "12px",
      },

      // Container Padding
      {
        name: "Container Padding XXS",
        value: "8px",
      },
      {
        name: "Container Padding XS",
        value: "12px",
      },
      {
        name: "Container Padding Small",
        value: "16px",
      },
      {
        name: "Container Padding Medium",
        value: "20px",
      },
      {
        name: "Container Padding Large",
        value: "24px",
      },
      {
        name: "Container Padding XL",
        value: "32px",
      },
      {
        name: "Container Padding XXL",
        value: "40px",
      },
      {
        name: "Container Padding XXXL",
        value: "60px",
      },

      // Component Inline Padding
      {
        name: "Component Inline Padding XS",
        value: "4px",
      },
      {
        name: "Component Inline Padding Small",
        value: "6px",
      },
      {
        name: "Component Inline Padding Medium",
        value: "8px",
      },
      {
        name: "Component Inline Padding Large",
        value: "10px",
      },
      {
        name: "Component Inline Padding XL",
        value: "12px",
      },

      // Row and Column Gaps
      {
        name: "Row Gap Small",
        value: "12px",
      },
      {
        name: "Row Gap Medium",
        value: "20px",
      },
      {
        name: "Row Gap Large",
        value: "40px",
      },
      {
        name: "Row Gap XL",
        value: "60px",
      },

      {
        name: "Column Gap Small",
        value: "16px",
      },
      {
        name: "Column Gap Medium",
        value: "20px",
      },
      {
        name: "Column Gap Large",
        value: "24px",
      },
      {
        name: "Column Gap XL",
        value: "40px",
      },

      // General Spacing
      {
        name: "Space XS",
        value: "8px",
      },
      {
        name: "Space Small",
        value: "12px",
      },
      {
        name: "Space Medium",
        value: "16px",
      },
      {
        name: "Space Large",
        value: "24px",
      },
      {
        name: "Space XL",
        value: "40px",
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
        value: "0px",
      },
      {
        name: "XS",
        value: "2px",
      },
      {
        name: "Small",
        value: "4px",
      },
      {
        name: "Medium",
        value: "6px",
      },
      {
        name: "Large",
        value: "8px",
      },
      {
        name: "XL",
        value: "12px",
      },
      {
        name: "Action",
        value: "4px",
      },
      {
        name: "Full",
        value: "9999px",
      },
    ],

    shadows: [
      {
        name: "None",
        value: "none",
      },
      {
        name: "Level 1",
        value: "0 1px 4px 0 rgba(0, 0, 0, 0.2)",
      },
      {
        name: "Level 2",
        value: "0 2px 8px 0 rgba(0, 0, 0, 0.2)",
      },
      {
        name: "Level 3",
        value: "0 4px 16px 0 rgba(0, 0, 0, 0.2)",
      },
      {
        name: "Level 4",
        value: "0 6px 24px 0 rgba(0, 0, 0, 0.2)",
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
