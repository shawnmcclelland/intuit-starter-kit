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
  const isLight = theme.mode === "light";

  const sizeClasses = {
    sm: "w-10 h-6",
    md: "w-12 h-7",
    lg: "w-14 h-8",
  };

  const knobSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Sun icon */}
      <Sun
        className={cn(
          "transition-colors duration-200",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
          isLight ? "text-amber-500" : "text-muted-foreground",
        )}
      />

      {/* Toggle switch */}
      <button
        onClick={toggleMode}
        className={cn(
          "relative rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          sizeClasses[size],
          isLight
            ? "bg-muted border-2 border-border"
            : "bg-primary border-2 border-primary",
        )}
        aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      >
        {/* Switch knob */}
        <div
          className={cn(
            "absolute top-0.5 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out",
            knobSizeClasses[size],
            isLight
              ? "translate-x-0.5"
              : size === "sm"
                ? "translate-x-4"
                : size === "lg"
                  ? "translate-x-6"
                  : "translate-x-5",
          )}
        />
      </button>

      {/* Moon icon */}
      <Moon
        className={cn(
          "transition-colors duration-200",
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
          !isLight ? "text-blue-400" : "text-muted-foreground",
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
    setBrand(brand);
    setIsOpen(false);
  };

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <span className="text-sm text-muted-foreground">Theme:</span>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {theme.brand}
            </Button>
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
          "flex items-center gap-4 p-2 rounded-lg border bg-card",
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
