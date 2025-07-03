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
import { Palette, Sun, Moon, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  className?: string;
  variant?: "default" | "compact" | "minimal";
}

// Modern toggle switch component for light/dark mode
interface ModeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ModeToggle({ className, size = "md" }: ModeToggleProps) {
  const { theme, toggleMode } = useTheme();
  const isDark = theme.mode === "dark";

  const sizeClasses = {
    sm: "w-12 h-6",
    md: "w-14 h-7",
    lg: "w-16 h-8",
  };

  const knobSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const knobOffset = {
    sm: isDark ? "translate-x-6" : "translate-x-1",
    md: isDark ? "translate-x-7" : "translate-x-1",
    lg: isDark ? "translate-x-8" : "translate-x-1",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Sun icon */}
      <Sun
        className={cn(
          "transition-all duration-300 ease-in-out",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
          !isDark
            ? "text-warning scale-110 drop-shadow-md"
            : "text-muted-foreground scale-90 opacity-60",
        )}
      />

      {/* Toggle switch */}
      <button
        onClick={toggleMode}
        className={cn(
          "relative rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background group",
          sizeClasses[size],
          isDark
            ? "bg-muted border border-border shadow-inner"
            : "bg-accent border border-border shadow-sm",
          "hover:shadow-md active:scale-95",
        )}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Background gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-full transition-opacity duration-300",
            isDark ? "bg-primary/20 opacity-100" : "bg-warning/30 opacity-100",
          )}
        />

        {/* Switch knob */}
        <div
          className={cn(
            "absolute top-0.5 rounded-full transition-all duration-300 ease-in-out shadow-lg ring-1 ring-border/20",
            knobSizeClasses[size],
            knobOffset[size],
            isDark
              ? "bg-card shadow-primary/20"
              : "bg-background shadow-warning/20",
            "group-hover:shadow-xl group-active:scale-95",
          )}
        >
          {/* Inner highlight */}
          <div
            className={cn(
              "absolute inset-0.5 rounded-full transition-opacity duration-300",
              isDark
                ? "bg-gradient-to-br from-foreground/20 to-transparent opacity-60"
                : "bg-gradient-to-br from-background/80 to-transparent opacity-90",
            )}
          />
        </div>
      </button>

      {/* Moon icon */}
      <Moon
        className={cn(
          "transition-all duration-300 ease-in-out",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
          isDark
            ? "text-info scale-110 drop-shadow-md"
            : "text-muted-foreground scale-90 opacity-60",
        )}
      />
    </div>
  );
}

// Brand/theme selector component
interface BrandSelectorProps {
  className?: string;
  variant?: "dropdown" | "compact";
}

export function BrandSelector({
  className,
  variant = "dropdown",
}: BrandSelectorProps) {
  const { theme, setBrand } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Get unique brands
  const brands = Array.from(new Set(themes.map((t) => t.brand)));

  const handleBrandSelect = (brand: string) => {
    console.log("Brand selected:", brand, "current theme:", theme);
    setBrand(brand);
    setIsOpen(false);
  };

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="text-sm text-muted-foreground">Theme:</span>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            className="w-32 min-w-32 max-w-32 h-8 px-3 text-sm font-medium justify-center inline-flex items-center rounded-md text-primary hover:bg-primary/10 transition-colors"
            style={{
              border: "2px solid rgb(var(--primary))",
              background: "transparent",
              outline: "none",
              boxShadow: "none",
            }}
          >
            {theme.brand}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {brands.map((brand) => (
              <DropdownMenuItem
                key={brand}
                onClick={() => handleBrandSelect(brand)}
                className="flex items-center justify-between"
              >
                <span>{brand}</span>
                {theme.brand === brand && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={className}>
          <Palette className="h-4 w-4 mr-2" />
          {theme.brand}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Choose Brand Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {brands.map((brand) => (
          <DropdownMenuItem
            key={brand}
            onClick={() => handleBrandSelect(brand)}
            className="flex items-center justify-between"
          >
            <span>{brand}</span>
            {theme.brand === brand && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Main theme switcher component with separated controls
export function ThemeSwitcher({
  className,
  variant = "default",
}: ThemeSwitcherProps) {
  const { theme } = useTheme();

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <ModeToggle size="sm" />
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-4 p-2 rounded-lg bg-card",
          className,
        )}
      >
        <BrandSelector variant="compact" />
        <div className="w-px h-6 bg-border" />
        <ModeToggle size="sm" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-3 rounded-lg border bg-card",
        className,
      )}
    >
      {/* Current theme display */}
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">{theme.brand}</span>
        <Badge variant="outline" className="text-xs">
          {theme.mode}
        </Badge>
      </div>

      {/* Separator */}
      <div className="w-px h-6 bg-border" />

      {/* Brand selector */}
      <BrandSelector />

      {/* Separator */}
      <div className="w-px h-6 bg-border" />

      {/* Mode toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Mode:</span>
        <ModeToggle />
      </div>
    </div>
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
