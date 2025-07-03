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
  const isCreditKarma = theme.brand === "Credit Karma";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            {isCreditKarma ? (
              <svg
                width="162"
                height="27"
                viewBox="-50 -10 700 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M163.553 52.8959C159.776 48.2239 152.519 45.4409 145.561 45.4409C131.545 45.4409 120.014 55.1819 120.014 70.6899C120.014 86.5939 131.743 95.9389 145.859 95.9389C152.917 95.9389 159.478 93.5529 163.454 89.2779L155.998 81.7239C153.712 84.5069 149.636 85.9979 145.958 85.9979C136.913 85.9979 132.439 78.1449 132.439 70.6899C132.439 63.2339 136.813 55.3809 145.561 55.3809C149.438 55.3809 153.513 57.3689 155.402 60.0529L163.553 52.8959Z"
                  fill="currentColor"
                />
                <path
                  d="M170.122 94.5469H182.051V68.9999C182.051 65.5209 184.139 56.1759 194.874 56.1759C195.968 56.1759 196.962 56.2759 198.552 56.6729V45.7389C197.757 45.5399 196.564 45.4409 195.67 45.4409C189.407 45.4409 184.337 49.3169 181.753 54.7849H181.554V46.8319H170.122V94.5469Z"
                  fill="currentColor"
                />
                <path
                  d="M212.517 65.9179C213.014 59.2579 218.68 54.3869 225.738 54.3869C233.492 54.3869 236.971 59.7549 236.971 65.9179H212.517ZM248.9 71.2859C248.9 54.0889 239.158 45.4409 225.838 45.4409C211.424 45.4409 200.589 55.5799 200.589 70.9879C200.589 86.4949 211.523 95.9389 226.235 95.9389C235.281 95.9389 242.041 92.7579 246.713 86.3959L238.76 80.0339C236.076 83.8109 232.1 86.1969 226.136 86.1969C219.177 86.1969 213.014 81.2269 212.517 74.4669H248.8C248.9 73.3739 248.9 72.3789 248.9 71.2859Z"
                  fill="currentColor"
                />
                <path
                  d="M306.538 19.396H294.609V52.896H294.311C291.826 49.814 287.054 45.441 278.306 45.441C264.688 45.441 255.145 56.375 255.145 70.491C255.145 84.408 264.092 95.939 278.605 95.939C285.265 95.939 291.726 92.857 295.007 87.39H295.205V94.547H306.538V19.396ZM267.272 70.491C267.272 63.035 271.746 55.182 280.99 55.182C289.738 55.182 295.007 63.234 295.007 70.69C295.007 78.145 289.738 85.998 280.99 85.998C271.746 85.998 267.272 77.946 267.272 70.491Z"
                  fill="currentColor"
                />
                <path
                  d="M318.804 94.5467H330.733V46.8317H318.804V94.5467ZM317.114 30.6287C317.114 34.4067 320.295 37.7857 324.669 37.7857C329.043 37.7857 332.423 34.7047 332.423 30.6287C332.423 26.5537 329.043 23.4717 324.669 23.4717C320.295 23.4717 317.114 26.8517 317.114 30.6287Z"
                  fill="currentColor"
                />
                <path
                  d="M347.907 56.3751V78.6422C347.907 87.7872 350.79 95.5411 363.414 95.5411C366.098 95.5411 369.279 95.0441 371.367 94.2491L370.969 84.9052C369.578 85.6002 367.49 85.8991 365.9 85.8991C360.631 85.8991 359.637 82.8172 359.637 78.5432V56.3751H371.566V46.8321H359.637V33.0151H347.907V46.8321H339.557V56.3751H347.907Z"
                  fill="currentColor"
                />
                <path
                  d="M380.397 94.547H392.326V70.093H392.624L411.511 94.547H427.316L405.348 68.403L426.024 46.832H410.716L392.624 66.912H392.326V19.396H380.397V94.547Z"
                  fill="currentColor"
                />
                <path
                  d="M462 94.5469H473.134V65.5209C473.134 55.9779 468.959 45.4409 451.861 45.4409C444.604 45.4409 437.05 48.0249 431.682 52.9949L437.845 60.2519C440.926 57.1699 445.797 54.7849 450.867 54.7849C456.831 54.7849 461.802 57.6669 461.802 63.5319V64.7249C446.891 64.7249 428.998 66.7129 428.998 80.9279C428.998 92.0619 439.237 95.7399 446.891 95.7399C453.65 95.7399 459.316 92.6579 461.702 88.4829H462V94.5469ZM461.802 74.4669C461.802 82.0219 457.428 86.6939 449.276 86.6939C445.201 86.6939 440.926 85.3019 440.926 80.7299C440.926 73.6719 451.563 72.7769 459.118 72.7769H461.802V74.4669Z"
                  fill="currentColor"
                />
                <path
                  d="M483.394 94.5469H495.323V68.9999C495.323 65.5209 497.41 56.1759 508.146 56.1759C509.24 56.1759 510.234 56.2759 511.824 56.6729V45.7389C511.029 45.5399 509.836 45.4409 508.941 45.4409C502.679 45.4409 497.609 49.3169 495.025 54.7849H494.826V46.8319H483.394V94.5469Z"
                  fill="currentColor"
                />
                <path
                  d="M577.775 45.4409C570.618 45.4409 565.25 48.7209 562.069 54.4869C559.385 49.1189 554.514 45.4409 547.158 45.4409C539.504 45.4409 534.434 49.8139 532.347 54.4869H532.148V46.8319H520.816V94.5469H532.744V68.3039C532.744 61.9419 536.025 55.3809 543.182 55.3809C549.246 55.3809 552.029 59.8539 552.029 65.7189V94.5469H563.958V68.5029C563.958 62.3399 567.039 55.3809 574.494 55.3809C582.149 55.3809 583.441 62.4389 583.441 68.1049V94.5469H595.37V64.7249C595.37 54.9839 590.201 45.4409 577.775 45.4409Z"
                  fill="currentColor"
                />
                <path
                  d="M635.237 94.5469H646.371V65.5209C646.371 55.9779 642.196 45.4409 625.098 45.4409C617.841 45.4409 610.287 48.0249 604.919 52.9949L611.082 60.2519C614.163 57.1699 619.034 54.7849 624.104 54.7849C630.068 54.7849 635.039 57.6669 635.039 63.5319V64.7249C620.128 64.7249 602.235 66.7129 602.235 80.9279C602.235 92.0619 612.474 95.7399 620.128 95.7399C626.887 95.7399 632.553 92.6579 634.939 88.4829H635.237V94.5469ZM635.039 74.4669C635.039 82.0219 630.665 86.6939 622.513 86.6939C618.438 86.6939 614.163 85.3019 614.163 80.7299C614.163 73.6719 624.8 72.7769 632.355 72.7769H635.039V74.4669Z"
                  fill="currentColor"
                />
                <path
                  d="M53.4 106.8C82.892 106.8 106.8 82.892 106.8 53.4C106.8 23.908 82.892 0 53.4 0C23.908 0 0 53.4C0 82.892 23.908 106.8 53.4 106.8Z"
                  fill="#008600"
                />
                <path
                  d="M26.4685 58.7527C26.4685 49.5647 30.8939 44.8447 38.0167 44.8447C43.3272 44.8447 46.6146 46.9097 47.7947 47.4997C48.6798 46.6147 49.2699 45.1397 49.2699 43.6647C49.2699 41.0097 46.3196 38.3537 37.7217 38.3537C27.6486 38.3537 19.0928 45.4347 19.0928 58.7527C19.0928 72.0717 26.8057 79.1517 36.8366 79.1517C43.0322 79.1517 47.7948 77.0867 49.2699 76.4967V69.1217C47.7948 70.3017 42.7793 72.6617 38.0167 72.6617C31.5261 72.6617 26.4685 67.9407 26.4685 58.7527ZM75.5695 58.4577C79.9949 53.1477 84.1674 46.9097 87.1177 38.9437L80.6271 36.5837C76.4968 47.8367 70.259 55.5077 62.8833 61.7457V22.9707H55.8027V78.3087H62.8833V70.0067C65.5386 67.9407 67.8988 65.8757 70.5962 63.5157L77.0868 74.7687C78.5619 77.4237 80.9222 78.8997 84.1675 78.8997C85.9376 78.8997 87.1178 78.3097 87.4128 78.0137L75.5695 58.4997V58.4577Z"
                  fill="white"
                />
              </svg>
            ) : isTurboTax ? (
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
