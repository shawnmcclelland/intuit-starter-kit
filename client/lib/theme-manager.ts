/**
 * Theme Manager for Intuit Design System
 * Handles theme switching and Builder.io integration
 */

export type ThemeId =
  | "intuit-light"
  | "intuit-dark"
  | "quickbooks-light"
  | "quickbooks-dark"
  | "turbotax-light"
  | "turbotax-dark"
  | "mailchimp-light"
  | "mailchimp-dark"
  | "creditkarma-light"
  | "creditkarma-dark";

export interface Theme {
  id: ThemeId;
  name: string;
  brand: string;
  mode: "light" | "dark";
  dataTheme: string;
  dataColorScheme?: string;
}

export const themes: Theme[] = [
  {
    id: "intuit-light",
    name: "Intuit Light",
    brand: "Intuit",
    mode: "light",
    dataTheme: "intuit",
  },
  {
    id: "intuit-dark",
    name: "Intuit Dark",
    brand: "Intuit",
    mode: "dark",
    dataTheme: "intuit",
    dataColorScheme: "dark",
  },
  {
    id: "quickbooks-light",
    name: "QuickBooks Light",
    brand: "QuickBooks",
    mode: "light",
    dataTheme: "quickbooks",
  },
  {
    id: "quickbooks-dark",
    name: "QuickBooks Dark",
    brand: "QuickBooks",
    mode: "dark",
    dataTheme: "quickbooks",
    dataColorScheme: "dark",
  },
  {
    id: "turbotax-light",
    name: "TurboTax Light",
    brand: "TurboTax",
    mode: "light",
    dataTheme: "turbotax",
  },
  {
    id: "turbotax-dark",
    name: "TurboTax Dark",
    brand: "TurboTax",
    mode: "dark",
    dataTheme: "turbotax",
    dataColorScheme: "dark",
  },
  {
    id: "mailchimp-light",
    name: "Mailchimp Light",
    brand: "Mailchimp",
    mode: "light",
    dataTheme: "mailchimp",
  },
  {
    id: "mailchimp-dark",
    name: "Mailchimp Dark",
    brand: "Mailchimp",
    mode: "dark",
    dataTheme: "mailchimp",
    dataColorScheme: "dark",
  },
  {
    id: "creditkarma-light",
    name: "Credit Karma Light",
    brand: "Credit Karma",
    mode: "light",
    dataTheme: "creditkarma",
  },
  {
    id: "creditkarma-dark",
    name: "Credit Karma Dark",
    brand: "Credit Karma",
    mode: "dark",
    dataTheme: "creditkarma",
    dataColorScheme: "dark",
  },
];

export class ThemeManager {
  private currentTheme: Theme;
  private storageKey = "intuit-design-system-theme";

  constructor() {
    // Default to Intuit light theme
    this.currentTheme =
      themes.find((t) => t.id === "intuit-light") || themes[0];

    if (typeof window !== "undefined") {
      this.loadFromStorage();
      this.applyTheme();
    }
  }

  /**
   * Get the current active theme
   */
  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Get all available themes
   */
  getThemes(): Theme[] {
    return themes;
  }

  /**
   * Get themes grouped by brand
   */
  getThemesByBrand(): Record<string, Theme[]> {
    return themes.reduce(
      (acc, theme) => {
        if (!acc[theme.brand]) {
          acc[theme.brand] = [];
        }
        acc[theme.brand].push(theme);
        return acc;
      },
      {} as Record<string, Theme[]>,
    );
  }

  /**
   * Switch to a specific theme
   */
  setTheme(themeId: ThemeId): void {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) {
      console.warn(`Theme ${themeId} not found`);
      return;
    }

    this.currentTheme = theme;
    this.applyTheme();
    this.saveToStorage();
    this.dispatchThemeChangeEvent();
  }

  /**
   * Toggle between light and dark mode for current brand
   */
  toggleMode(): void {
    const currentBrand = this.currentTheme.brand.toLowerCase();
    const targetMode = this.currentTheme.mode === "light" ? "dark" : "light";
    const targetId = `${currentBrand}-${targetMode}` as ThemeId;

    this.setTheme(targetId);
  }

  /**
   * Switch to a different brand while maintaining current mode
   */
  setBrand(brand: string): void {
    const currentMode = this.currentTheme.mode;

    // Map brand names to their theme ID prefixes
    const brandToIdMap: Record<string, string> = {
      Intuit: "intuit",
      QuickBooks: "quickbooks",
      TurboTax: "turbotax",
      Mailchimp: "mailchimp",
      "Credit Karma": "creditkarma",
    };

    const brandId =
      brandToIdMap[brand] || brand.toLowerCase().replace(/\s+/g, "");
    const targetId = `${brandId}-${currentMode}` as ThemeId;

    this.setTheme(targetId);
  }

  /**
   * Apply the current theme to the document
   */
  private applyTheme(): void {
    const html = document.documentElement;

    // Remove existing theme attributes
    html.removeAttribute("data-theme");
    html.removeAttribute("data-colorscheme");

    // Remove existing theme classes
    html.className = html.className.replace(/theme-\w+/g, "");

    // Apply new theme attributes
    html.setAttribute("data-theme", this.currentTheme.dataTheme);
    if (this.currentTheme.dataColorScheme) {
      html.setAttribute("data-colorscheme", this.currentTheme.dataColorScheme);
    }

    // Update class for CSS-in-JS libraries and dark mode detection
    html.classList.add(`theme-${this.currentTheme.id}`);

    // Add/remove dark class for compatibility
    if (this.currentTheme.mode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Set Builder.io theme context
    if (typeof window !== "undefined" && (window as any).builderContext) {
      (window as any).builderContext.theme = this.currentTheme.id;
    }

    // Debug logging
    console.log(`Applied theme: ${this.currentTheme.name}`, {
      dataTheme: this.currentTheme.dataTheme,
      dataColorScheme: this.currentTheme.dataColorScheme,
      mode: this.currentTheme.mode,
      classes: html.className,
      htmlDataTheme: html.getAttribute("data-theme"),
      htmlDataColorScheme: html.getAttribute("data-colorscheme"),
    });

    // Log computed primary color to verify changes
    const primaryColor = getComputedStyle(html)
      .getPropertyValue("--primary")
      .trim();
    console.log(`Primary color after theme change: rgb(${primaryColor})`);
  }

  /**
   * Load theme from localStorage
   */
  private loadFromStorage(): void {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const theme = themes.find((t) => t.id === stored);
        if (theme) {
          this.currentTheme = theme;
        }
      }
    } catch (error) {
      console.warn("Failed to load theme from storage:", error);
    }
  }

  /**
   * Save theme to localStorage
   */
  private saveToStorage(): void {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(this.storageKey, this.currentTheme.id);
    } catch (error) {
      console.warn("Failed to save theme to storage:", error);
    }
  }

  /**
   * Dispatch theme change event for components to listen to
   */
  private dispatchThemeChangeEvent(): void {
    if (typeof window === "undefined") return;

    const event = new CustomEvent("themeChange", {
      detail: { theme: this.currentTheme },
    });
    window.dispatchEvent(event);
  }

  /**
   * Get CSS custom property value for current theme
   */
  getTokenValue(tokenName: string): string {
    if (typeof window === "undefined") return "";

    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${tokenName}`)
      .trim();
  }

  /**
   * Get all available token names for current theme
   */
  getAvailableTokens(): string[] {
    const tokens: string[] = [];

    // Color tokens
    const colorCategories = [
      "action",
      "container",
      "data",
      "divider",
      "icon",
      "input",
      "link",
      "message",
      "page",
      "text",
      "ui",
    ];

    colorCategories.forEach((category) => {
      tokens.push(`color-${category}-primary`);
      tokens.push(`color-${category}-secondary`);
      tokens.push(`color-${category}-tertiary`);
    });

    // Spacing tokens
    const spacingCategories = [
      "component-gap",
      "container-padding",
      "component-inline-padding",
      "component-stack-padding",
      "row-gap",
      "column-gap",
    ];

    spacingCategories.forEach((category) => {
      ["x-small", "small", "medium", "large", "x-large"].forEach((size) => {
        tokens.push(`space-${category}-${size}`);
      });
    });

    // Typography tokens
    const typographyElements = [
      "body",
      "heading",
      "display",
      "component",
      "action",
      "input",
    ];

    typographyElements.forEach((element) => {
      tokens.push(`font-size-${element}-1`);
      tokens.push(`font-weight-${element}`);
      tokens.push(`font-family-${element}`);
      tokens.push(`line-height-${element}`);
    });

    // Other tokens
    tokens.push(
      ...[
        "radius-small",
        "radius-medium",
        "radius-large",
        "elevation-level-1",
        "elevation-level-2",
        "elevation-level-3",
        "duration-fast",
        "duration-moderate",
        "duration-slow",
      ],
    );

    return tokens;
  }
}

// Export singleton instance
export const themeManager = new ThemeManager();

// Export utility functions
export const getCurrentTheme = () => themeManager.getCurrentTheme();
export const setTheme = (themeId: ThemeId) => themeManager.setTheme(themeId);
export const toggleThemeMode = () => themeManager.toggleMode();
export const getTokenValue = (tokenName: string) =>
  themeManager.getTokenValue(tokenName);
