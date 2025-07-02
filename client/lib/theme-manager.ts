/**
 * Simplified Theme Manager for Intuit Design System
 * Handles theme switching by applying data attributes only
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
    this.currentTheme =
      themes.find((t) => t.id === "intuit-light") || themes[0];

    if (typeof window !== "undefined") {
      this.loadFromStorage();
      this.applyTheme();
    }
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  getThemes(): Theme[] {
    return themes;
  }

  setTheme(themeId: ThemeId): void {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    this.currentTheme = theme;
    this.applyTheme();
    this.saveToStorage();
    this.dispatchThemeChangeEvent();
  }

  toggleMode(): void {
    const currentBrand = this.currentTheme.brand.toLowerCase();
    const targetMode = this.currentTheme.mode === "light" ? "dark" : "light";
    const targetId = `${currentBrand}-${targetMode}` as ThemeId;
    this.setTheme(targetId);
  }

  setBrand(brand: string): void {
    const currentMode = this.currentTheme.mode;
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

  private applyTheme(): void {
    const html = document.documentElement;

    // Clear existing theme attributes
    html.removeAttribute("data-theme");
    html.removeAttribute("data-colorscheme");
    html.classList.remove("dark");

    // Apply new theme
    html.setAttribute("data-theme", this.currentTheme.dataTheme);
    if (this.currentTheme.dataColorScheme) {
      html.setAttribute("data-colorscheme", this.currentTheme.dataColorScheme);
    }
    if (this.currentTheme.mode === "dark") {
      html.classList.add("dark");
    }

    console.log(`Applied theme: ${this.currentTheme.name}`);
  }

  private loadFromStorage(): void {
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

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, this.currentTheme.id);
    } catch (error) {
      console.warn("Failed to save theme to storage:", error);
    }
  }

  private dispatchThemeChangeEvent(): void {
    const event = new CustomEvent("themeChange", {
      detail: { theme: this.currentTheme },
    });
    window.dispatchEvent(event);
  }
}

export const themeManager = new ThemeManager();
export const getCurrentTheme = () => themeManager.getCurrentTheme();
export const setTheme = (themeId: ThemeId) => themeManager.setTheme(themeId);
export const toggleThemeMode = () => themeManager.toggleMode();
