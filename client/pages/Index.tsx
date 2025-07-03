import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useTheme } from "@/components/theme-provider";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function Index() {
  const { theme } = useTheme();
  const isTurboTax = theme.brand === "TurboTax";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            {isTurboTax ? (
              <svg
                width="126"
                height="27"
                viewBox="0 0 506 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M120.094 55.707V46.044H128.559V32.064H140.444V46.044H152.543V55.707H140.444V78.152C140.444 82.513 141.47 85.591 146.772 85.591C148.396 85.591 150.491 85.249 151.902 84.565L152.33 94.014C150.192 94.783 146.986 95.296 144.292 95.296C131.509 95.296 128.602 87.43 128.602 78.195V55.664H120.137L120.094 55.707Z"
                  fill="currentColor"
                />
                <path
                  d="M203.164 94.3152H191.706V86.5762H191.535C189.397 91.4082 183.668 95.7262 176.528 95.7262C163.959 95.7262 158.7 86.0632 158.7 76.1872V46.0042H170.757V72.7672C170.757 78.4962 172.039 85.6362 179.82 85.6362C187.601 85.6362 191.107 78.9662 191.107 72.5532V46.0042H203.206V94.3152H203.164Z"
                  fill="currentColor"
                />
                <path
                  d="M226.977 46.0441V54.0821H227.148C229.799 48.5241 234.887 44.6331 241.214 44.6331C242.155 44.6331 243.352 44.7191 244.121 44.9751V56.0491C242.497 55.6211 241.471 55.5361 240.402 55.5361C229.543 55.5361 227.405 64.9841 227.405 68.4901V94.3561H215.306V46.0441H226.935H226.977Z"
                  fill="currentColor"
                />
                <path
                  d="M262.291 18.2991V52.2031H262.633C265.113 49.0821 269.987 44.6781 278.837 44.6781C292.604 44.6781 302.309 55.7511 302.309 70.0311C302.309 84.3111 293.245 95.8111 278.58 95.8111C271.825 95.8111 265.284 92.6901 261.992 87.1751H261.821V94.4431H250.363V18.3421H262.334L262.291 18.2991ZM276.101 54.5121C267.251 54.5121 261.907 62.6771 261.907 70.2021C261.907 77.7261 267.251 85.7211 276.101 85.7211C285.464 85.7211 289.996 77.5981 289.996 70.0311C289.996 62.4641 285.464 54.5121 276.101 54.5121Z"
                  fill="currentColor"
                />
                <path
                  d="M335.272 44.6331C349.851 44.6331 361.565 54.8091 361.565 69.9861C361.565 85.1641 349.893 95.7661 335.272 95.7661C320.65 95.7661 308.979 85.2061 308.979 69.9861C308.979 54.7661 320.65 44.6331 335.272 44.6331ZM335.272 85.6771C344.849 85.6771 349.252 77.5531 349.252 69.9861C349.252 62.4191 344.806 54.4671 335.272 54.4671C325.738 54.4671 321.291 62.4191 321.291 69.9861C321.291 77.5531 325.738 85.6771 335.272 85.6771Z"
                  fill="currentColor"
                />
                <path
                  d="M364.386 55.707V46.044H372.851V32.064H384.736V46.044H396.835V55.707H384.736V78.152C384.736 82.513 385.762 85.591 391.064 85.591C392.688 85.591 394.826 85.249 396.194 84.565L396.622 94.014C394.484 94.783 391.278 95.296 388.584 95.296C375.801 95.296 372.894 87.43 372.894 78.195V55.664H364.429L364.386 55.707Z"
                  fill="currentColor"
                />
                <path
                  d="M434.501 88.2H434.159C431.765 92.433 426.036 95.554 419.153 95.554C411.415 95.554 401.068 91.834 401.068 80.547C401.068 66.14 419.153 64.173 434.288 64.173V62.976C434.288 57.033 429.243 54.126 423.215 54.126C418.084 54.126 413.168 56.52 410.047 59.684L403.805 52.33C409.277 47.285 416.887 44.677 424.198 44.677C441.513 44.677 445.703 55.323 445.703 64.985V94.357H434.416V88.2H434.459H434.501ZM434.33 72.382H431.594C423.941 72.382 413.168 73.322 413.168 80.419C413.168 85.037 417.486 86.447 421.633 86.447C429.884 86.447 434.33 81.745 434.33 74.092V72.382Z"
                  fill="currentColor"
                />
                <path
                  d="M470.885 68.7061L453.484 46.0901H467.977L478.452 61.0961L489.226 46.0901H503.121L485.806 68.7061L505.515 94.3581H490.85L478.281 76.7861L465.583 94.3581H451.304L470.927 68.7061H470.885Z"
                  fill="currentColor"
                />
                <path
                  d="M53.3989 106.797C82.8902 106.797 106.798 82.89 106.798 53.398C106.798 23.907 82.8902 0 53.3989 0C23.9075 0 0 23.907 0 53.398C0 82.89 23.9075 106.797 53.3989 106.797Z"
                  fill="#D52B1E"
                />
                <path
                  d="M41.5992 72.8521C35.3999 68.4481 29.5 63.7031 23.8565 58.6581C21.8044 63.0611 20.0515 67.807 18.2559 72.553C27.1485 80.248 39.2477 88.799 47.5419 93.844C58.1874 66.353 74.7757 48.311 90.6799 35.614C88.6278 31.21 85.9343 27.319 82.3858 24.113C65.541 37.11 51.6462 53.6561 41.5992 72.8521Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="138"
                height="28"
                viewBox="0 0 691 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M354.425 80.3334C354.425 114.109 382.428 138.82 418.042 138.82C453.655 138.82 481.701 114.109 481.701 80.3334V2.69348H447.242V76.3146C447.242 94.5703 434.63 106.84 417.956 106.84C401.282 106.84 388.67 94.613 388.67 76.3146V2.69348H354.211L354.425 80.3334ZM573.749 33.7751H614.878V136.255H649.337V33.7751H690.465V2.65068H573.749V33.7751ZM551.474 2.65068H517.015V136.255H551.474V2.65068ZM215.22 33.7751H256.349V136.255H290.808V33.7751H331.894V2.65068H215.22V33.7751ZM34.4164 2.65068H0V136.255H34.4591V2.65068H34.4164ZM197.05 58.4865C197.05 24.7114 169.046 0 133.433 0C97.8195 0 69.7733 24.6686 69.7733 58.4865V136.297H104.232V62.6763C104.232 44.4634 116.845 32.1504 133.518 32.1504C150.192 32.1504 162.804 44.3779 162.804 62.6763V136.297H197.264L197.05 58.4865Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeSwitcher variant="compact" />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Zap className="w-3 h-3 mr-1" />
                New Platform Release
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Financial Management
                <span className="block text-primary">Made Simple</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Streamline your business finances with our comprehensive suite
                of tools. From accounting to payroll, we've got everything you
                need to succeed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50M+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <Card className="relative border-2 shadow-elevation-4">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Dashboard Overview</CardTitle>
                  <Badge variant="outline">Live</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Revenue</div>
                    <div className="text-2xl font-bold text-success">
                      $284,892
                    </div>
                    <div className="flex items-center text-sm text-success">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12.5%
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Expenses
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      $89,432
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +3.2%
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Cash Flow
                    </span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Profit Margin
                    </span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-[68%]"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Everything you need to manage your finances
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and insights you
              need to make informed financial decisions and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-elevation-3 transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary to-primary text-primary-foreground border-none">
            <CardContent className="py-16 px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust our platform to manage
                their finances and drive growth. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8"
                  style={{
                    backgroundColor:
                      "var(--color-container-background-primary)",
                  }}
                >
                  <span className="text-[var(--color-action-standard)]">
                    Start Free Trial
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[var(--color-action-standard)]" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sidebar-primary rounded-md flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-sidebar-primary-foreground" />
                </div>
                <span className="text-xl font-bold">IntuitPro</span>
              </div>
              <p className="text-sidebar-foreground/80">
                Empowering businesses with intelligent financial management
                solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sidebar-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sidebar-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sidebar-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sidebar-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sidebar-foreground/60">
              © 2024 IntuitPro. Made by Shawn McClelland.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your financial performance with real-time analytics and reporting.",
    benefits: [
      "Real-time financial dashboards",
      "Custom report generation",
      "Predictive analytics",
      "Performance benchmarking",
    ],
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your data is protected with enterprise-grade security and compliance standards.",
    benefits: [
      "256-bit SSL encryption",
      "SOC 2 Type II certified",
      "Multi-factor authentication",
      "Regular security audits",
    ],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team with advanced permission controls and workflows.",
    benefits: [
      "Role-based permissions",
      "Approval workflows",
      "Team activity tracking",
      "Collaborative budgeting",
    ],
  },
  {
    icon: Zap,
    title: "Automation Tools",
    description:
      "Automate repetitive tasks and streamline your financial processes for efficiency.",
    benefits: [
      "Automated invoicing",
      "Expense categorization",
      "Recurring transactions",
      "Smart reconciliation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Insights",
    description:
      "Make data-driven decisions with AI-powered insights and growth recommendations.",
    benefits: [
      "Cash flow forecasting",
      "Growth opportunity alerts",
      "Market trend analysis",
      "Performance recommendations",
    ],
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description:
      "Stay compliant with automated tax calculations and regulatory reporting features.",
    benefits: [
      "Automated tax calculations",
      "Regulatory reporting",
      "Audit trail maintenance",
      "Compliance monitoring",
    ],
  },
];
