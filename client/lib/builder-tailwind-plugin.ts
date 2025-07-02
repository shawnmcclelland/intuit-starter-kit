import { Builder } from "@builder.io/react";

// Plugin to map Tailwind CSS classes to design tokens for Builder.io
Builder.register("plugin", {
  name: "tailwind-design-tokens",
  setup: (Builder: any) => {
    // Extend Builder's style editor to show design token names instead of hardcoded values
    Builder.registerEditor({
      name: "DesignTokenColorPicker",
      component: (props: any) => {
        const colorTokens = [
          { name: "Action Standard", value: "var(--color-action-standard)" },
          { name: "Action Negative", value: "var(--color-action-negative)" },
          { name: "Action Passive", value: "var(--color-action-passive)" },
          {
            name: "Action Complementary",
            value: "var(--color-action-complementary)",
          },
          { name: "Text Primary", value: "var(--color-text-primary)" },
          { name: "Text Secondary", value: "var(--color-text-secondary)" },
          {
            name: "Container Background Primary",
            value: "var(--color-container-background-primary)",
          },
          {
            name: "Container Background Secondary",
            value: "var(--color-container-background-secondary)",
          },
        ];

        return Builder.createElement("select", {
          value: props.value,
          onChange: (e: any) => props.onChange(e.target.value),
          children: colorTokens.map((token) =>
            Builder.createElement("option", {
              key: token.name,
              value: token.value,
              children: token.name,
            }),
          ),
        });
      },
    });

    // Map common Tailwind classes to their design token equivalents
    const tailwindToTokenMap: Record<
      string,
      { property: string; value: string; tokenName: string }
    > = {
      // Background colors
      "bg-primary": {
        property: "backgroundColor",
        value: "var(--color-action-standard)",
        tokenName: "Action Standard",
      },
      "bg-destructive": {
        property: "backgroundColor",
        value: "var(--color-action-negative)",
        tokenName: "Action Negative",
      },
      "bg-secondary": {
        property: "backgroundColor",
        value: "var(--color-action-passive)",
        tokenName: "Action Passive",
      },
      "bg-background": {
        property: "backgroundColor",
        value: "var(--color-container-background-primary)",
        tokenName: "Container Background Primary",
      },

      // Text colors
      "text-primary": {
        property: "color",
        value: "var(--color-text-primary)",
        tokenName: "Text Primary",
      },
      "text-primary-foreground": {
        property: "color",
        value: "var(--color-text-inverse)",
        tokenName: "Text Inverse",
      },
      "text-secondary": {
        property: "color",
        value: "var(--color-text-secondary)",
        tokenName: "Text Secondary",
      },
      "text-foreground": {
        property: "color",
        value: "var(--color-text-primary)",
        tokenName: "Text Primary",
      },

      // Border colors
      "border-primary": {
        property: "borderColor",
        value: "var(--color-action-standard)",
        tokenName: "Action Standard",
      },
      "border-border": {
        property: "borderColor",
        value: "var(--color-container-border-tertiary)",
        tokenName: "Container Border Tertiary",
      },
    };

    // Override Builder's CSS class interpretation
    const originalGetStylesFromClasses = Builder.getStylesFromClasses;
    Builder.getStylesFromClasses = (classes: string) => {
      const styles: Record<string, any> = {};
      const classList = classes.split(" ");

      for (const className of classList) {
        if (tailwindToTokenMap[className]) {
          const mapping = tailwindToTokenMap[className];
          styles[mapping.property] = mapping.value;
          // Add metadata for Builder.io to show token name
          styles[`${mapping.property}TokenName`] = mapping.tokenName;
        }
      }

      // Fall back to original behavior for unmapped classes
      if (originalGetStylesFromClasses) {
        const originalStyles = originalGetStylesFromClasses(classes);
        return { ...originalStyles, ...styles };
      }

      return styles;
    };
  },
});

// Register a style transformer that converts computed styles back to design tokens
Builder.register("styleTransformer", {
  name: "design-token-transformer",
  transform: (styles: Record<string, any>) => {
    const transformed = { ...styles };

    // Map computed RGB values back to design token names
    const rgbToTokenMap: Record<string, string> = {
      "rgb(0, 119, 197)": "Action Standard (Intuit)",
      "rgb(0, 137, 46)": "Action Standard (QuickBooks)",
      "rgb(32, 94, 163)": "Action Standard (TurboTax)",
      "rgb(0, 130, 141)": "Action Standard (Mailchimp)",
      "rgb(0, 134, 0)": "Action Standard (Credit Karma)",
      "rgb(213, 43, 30)": "Action Negative",
      "rgb(227, 229, 232)": "Action Passive",
    };

    // Convert backgroundColor
    if (
      transformed.backgroundColor &&
      rgbToTokenMap[transformed.backgroundColor]
    ) {
      transformed.backgroundColorToken =
        rgbToTokenMap[transformed.backgroundColor];
    }

    // Convert color
    if (transformed.color && rgbToTokenMap[transformed.color]) {
      transformed.colorToken = rgbToTokenMap[transformed.color];
    }

    return transformed;
  },
});
