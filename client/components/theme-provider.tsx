import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Theme, ThemeId, themeManager } from "@/lib/theme-manager";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (themeId: ThemeId) => void;
  toggleMode: () => void;
  setBrand: (brand: string) => void;
  getTokenValue: (tokenName: string) => string;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeId;
}

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    themeManager.getCurrentTheme(),
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Debug current state
    console.log("ThemeProvider initialized", {
      currentTheme: themeManager.getCurrentTheme(),
      defaultTheme,
      themeId: theme.id,
    });

    // Ensure theme is applied immediately
    const currentTheme = themeManager.getCurrentTheme();
    setThemeState(currentTheme);

    // Set default theme if provided
    if (defaultTheme && defaultTheme !== theme.id) {
      console.log("Setting default theme:", defaultTheme);
      themeManager.setTheme(defaultTheme);
    }

    // Listen for theme changes
    const handleThemeChange = (event: CustomEvent<{ theme: Theme }>) => {
      console.log("Theme change event received:", event.detail.theme);
      setThemeState(event.detail.theme);
    };

    window.addEventListener("themeChange", handleThemeChange as EventListener);
    setIsLoading(false);

    return () => {
      window.removeEventListener(
        "themeChange",
        handleThemeChange as EventListener,
      );
    };
  }, [defaultTheme]);

  const setTheme = (themeId: ThemeId) => {
    themeManager.setTheme(themeId);
  };

  const toggleMode = () => {
    themeManager.toggleMode();
  };

  const setBrand = (brand: string) => {
    themeManager.setBrand(brand);
  };

  const getTokenValue = (tokenName: string) => {
    return themeManager.getTokenValue(tokenName);
  };

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggleMode,
    setBrand,
    getTokenValue,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Hook to get design token values with TypeScript support
export function useDesignToken(tokenName: string): string {
  const { getTokenValue } = useTheme();
  const [value, setValue] = useState("");

  useEffect(() => {
    const updateValue = () => {
      setValue(getTokenValue(tokenName));
    };

    updateValue();

    // Update on theme change
    window.addEventListener("themeChange", updateValue);

    return () => {
      window.removeEventListener("themeChange", updateValue);
    };
  }, [tokenName, getTokenValue]);

  return value;
}

// Hook to get multiple design tokens at once
export function useDesignTokens<T extends Record<string, string>>(
  tokens: T,
): Record<keyof T, string> {
  const { getTokenValue } = useTheme();
  const [values, setValues] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>,
  );

  useEffect(() => {
    const updateValues = () => {
      const newValues = {} as Record<keyof T, string>;
      Object.entries(tokens).forEach(([key, tokenName]) => {
        newValues[key as keyof T] = getTokenValue(tokenName as string);
      });
      setValues(newValues);
    };

    updateValues();

    // Update on theme change
    window.addEventListener("themeChange", updateValues);

    return () => {
      window.removeEventListener("themeChange", updateValues);
    };
  }, [tokens, getTokenValue]);

  return values;
}

// Utility component to conditionally render based on theme
interface ThemeConditionalProps {
  theme?: ThemeId | ThemeId[];
  brand?: string | string[];
  mode?: "light" | "dark";
  children: ReactNode;
  fallback?: ReactNode;
}

export function ThemeConditional({
  theme,
  brand,
  mode,
  children,
  fallback,
}: ThemeConditionalProps) {
  const { theme: currentTheme } = useTheme();

  const shouldRender = (() => {
    if (theme) {
      const themes = Array.isArray(theme) ? theme : [theme];
      if (!themes.includes(currentTheme.id)) return false;
    }

    if (brand) {
      const brands = Array.isArray(brand) ? brand : [brand];
      if (!brands.includes(currentTheme.brand)) return false;
    }

    if (mode && currentTheme.mode !== mode) {
      return false;
    }

    return true;
  })();

  return shouldRender ? <>{children}</> : <>{fallback || null}</>;
}
