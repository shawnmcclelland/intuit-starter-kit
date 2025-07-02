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
    if (typeof window !== "undefined") {
      themeManager.setTheme(themeManager.getCurrentTheme().id);
      const currentTheme = themeManager.getCurrentTheme();
      setThemeState(currentTheme);
    }

    if (defaultTheme && defaultTheme !== theme.id) {
      themeManager.setTheme(defaultTheme);
    }

    const handleThemeChange = (event: CustomEvent<{ theme: Theme }>) => {
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

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggleMode,
    setBrand,
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
