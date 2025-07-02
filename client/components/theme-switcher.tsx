import { useState } from "react";
import { useTheme } from "./theme-provider";
import { themes, type ThemeId } from "@/lib/theme-manager";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Palette, Sun, Moon, Monitor } from "lucide-react";

interface ThemeSwitcherProps {
  className?: string;
  variant?: "default" | "compact" | "minimal";
}

export function ThemeSwitcher({
  className,
  variant = "default",
}: ThemeSwitcherProps) {
  const { theme, setTheme, toggleMode, setBrand } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themesByBrand = themes.reduce(
    (acc, t) => {
      if (!acc[t.brand]) {
        acc[t.brand] = [];
      }
      acc[t.brand].push(t);
      return acc;
    },
    {} as Record<string, typeof themes>,
  );

  const handleThemeSelect = (themeId: ThemeId) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  if (variant === "minimal") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMode}
        className={className}
        title={`Switch to ${theme.mode === "light" ? "dark" : "light"} mode`}
      >
        {theme.mode === "light" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
        <span className="sr-only">Toggle theme mode</span>
      </Button>
    );
  }

  if (variant === "compact") {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className={className}>
            <Palette className="h-4 w-4 mr-2" />
            {theme.brand}
            <Badge variant="secondary" className="ml-2 text-xs">
              {theme.mode}
            </Badge>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(themesByBrand).map(([brand, brandThemes]) => (
            <div key={brand}>
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground px-2 py-1">
                {brand}
              </DropdownMenuLabel>
              {brandThemes.map((t) => (
                <DropdownMenuItem
                  key={t.id}
                  onClick={() => handleThemeSelect(t.id)}
                  className={`flex items-center justify-between ${
                    t.id === theme.id ? "bg-accent" : ""
                  }`}
                >
                  <span className="flex items-center">
                    {t.mode === "light" ? (
                      <Sun className="h-3 w-3 mr-2" />
                    ) : (
                      <Moon className="h-3 w-3 mr-2" />
                    )}
                    {t.mode === "light" ? "Light" : "Dark"}
                  </span>
                  {t.id === theme.id && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          <Palette className="h-4 w-4 mr-2" />
          <span className="flex items-center gap-2">
            {theme.name}
            <Badge variant="secondary" className="text-xs">
              {theme.mode === "light" ? (
                <Sun className="h-3 w-3 mr-1" />
              ) : (
                <Moon className="h-3 w-3 mr-1" />
              )}
              {theme.mode}
            </Badge>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex items-center">
          <Palette className="h-4 w-4 mr-2" />
          Design System Themes
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {Object.entries(themesByBrand).map(([brand, brandThemes]) => (
          <div key={brand}>
            <DropdownMenuLabel className="text-sm font-semibold text-foreground px-2 py-2 bg-muted/50">
              {brand}
            </DropdownMenuLabel>
            {brandThemes.map((t) => (
              <DropdownMenuItem
                key={t.id}
                onClick={() => handleThemeSelect(t.id)}
                className={`flex items-center justify-between py-2 ${
                  t.id === theme.id ? "bg-accent" : ""
                }`}
              >
                <span className="flex items-center">
                  {t.mode === "light" ? (
                    <Sun className="h-4 w-4 mr-2 text-amber-500" />
                  ) : (
                    <Moon className="h-4 w-4 mr-2 text-slate-400" />
                  )}
                  <span className="font-medium">
                    {t.mode === "light" ? "Light" : "Dark"}
                  </span>
                </span>
                {t.id === theme.id && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    <span className="text-xs text-muted-foreground">
                      Current
                    </span>
                  </div>
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </div>
        ))}

        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Quick Actions
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={toggleMode}>
          <Monitor className="h-4 w-4 mr-2" />
          Toggle {theme.mode === "light" ? "Dark" : "Light"} Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Design token preview component for development
export function DesignTokenPreview() {
  const { theme, getTokenValue } = useTheme();

  const sampleTokens = [
    "color-action-standard",
    "color-text-primary",
    "color-container-background-primary",
    "font-size-heading-1",
    "space-container-padding-large",
    "radius-medium",
  ];

  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="font-semibold mb-4">Current Theme Tokens</h3>
      <div className="space-y-2">
        <div className="text-sm font-medium">Theme: {theme.name}</div>
        <div className="grid grid-cols-1 gap-2 text-xs">
          {sampleTokens.map((token) => (
            <div key={token} className="flex justify-between">
              <span className="font-mono text-muted-foreground">
                --{token}:
              </span>
              <span className="font-mono">{getTokenValue(token)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
