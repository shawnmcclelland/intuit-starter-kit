import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function DesignTokenShowcase() {
  const { theme } = useTheme();

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Design Token Showcase</h2>
        <Badge variant="outline" className="mb-4">
          Current Theme: {theme.name}
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Color Tokens */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="text-sm font-medium">Backgrounds</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-8 bg-background border rounded flex items-center justify-center text-xs">
                  background
                </div>
                <div className="h-8 bg-card border rounded flex items-center justify-center text-xs">
                  card
                </div>
                <div className="h-8 bg-muted rounded flex items-center justify-center text-xs">
                  muted
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Brand Colors</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs">
                  primary
                </div>
                <div className="h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground text-xs">
                  secondary
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Status Colors</div>
              <div className="grid grid-cols-1 gap-2">
                <div className="h-8 bg-destructive rounded flex items-center justify-center text-destructive-foreground text-xs">
                  destructive
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Typography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h1 className="text-foreground">Heading 1</h1>
              <h2 className="text-foreground">Heading 2</h2>
              <h3 className="text-foreground">Heading 3</h3>
              <p className="text-foreground">Body text primary</p>
              <p className="text-muted-foreground">Body text muted</p>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Interactive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Button size="sm" className="w-full">
                Primary Button
              </Button>
              <Button variant="secondary" size="sm" className="w-full">
                Secondary Button
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Outline Button
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                Ghost Button
              </Button>
              <Button variant="destructive" size="sm" className="w-full">
                Destructive Button
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Borders and Focus */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Borders & Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-3">
              <div className="p-3 border border-border rounded-md">
                Default border
              </div>
              <input
                type="text"
                placeholder="Focus me to see ring"
                className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <div className="p-3 bg-accent rounded-md text-accent-foreground">
                Accent background
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges and Labels */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Badges & Labels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Theme Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Theme Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 text-sm">
              <div>
                <strong>Brand:</strong> {theme.brand}
              </div>
              <div>
                <strong>Mode:</strong> {theme.mode}
              </div>
              <div>
                <strong>Data Theme:</strong> {theme.dataTheme}
              </div>
              {theme.dataColorScheme && (
                <div>
                  <strong>Color Scheme:</strong> {theme.dataColorScheme}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
