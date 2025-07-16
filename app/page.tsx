'use client';

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, ListChecks, Volume2, Timer, Trophy, Check, ChevronRight, Menu, X, Moon, Sun, ArrowRight, Star, Zap, Shield, Users, BarChart, Layers } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"
import { Squares } from "@/components/ui/squares-background"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Smart Time Tracking",
      description: "Start and stop timers with one click. Track exactly what you're working on without overthinking it.",
      icon: <Brain className="size-5" />,
    },
    {
      title: "5/25 To-Do List",
      description: "Plan your day using Warren Buffett’s 5/25 rule. Focus only on your top 5 tasks that truly matter.",
      icon: <ListChecks className="size-5" />,
    },
    {
      title: "AI Time Coach",
      description: "Get daily feedback from AI based on how you spent your time. Know what slowed you down and how to fix it.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Productivity Noise",
      description: "Built-in focus sounds like brown noise, rain, and chants. Perfect for ADHD minds or lazy afternoon hours.",
      icon: <Volume2 className="size-5" />,
    },
    {
      title: "Pomodoro Sessions",
      description: "Use Pomodoro only when needed. Get into deep focus with longer sessions. No more fake work.",
      icon: <Timer className="size-5" />,
    },
    {
      title: "Gamified Streaks and Goals",
      description: "Daily goals, task streaks, and achievements that keep you motivated and consistent over time.",
      icon: <Trophy className="size-5" />,
    },
  ]
  const testimonials = [
    {
      quote:
        "The moment I started tracking my time with TapTrack, everything changed. My deep work doubled, distractions dropped, and I finally feel in control. It’s true. What gets tracked really does get improved.",
      author: "David G.",
      role: "Freelance designer",
      rating: 5,
      avatar: "/face/david g.png"
    },
    {
      quote:
        "I used to hustle 10 hours a day but had zero clue where my time went. TapTrack showed me the truth in one week. Turns out I was busy, not productive. Now, every hour is accounted for and I’m finally hitting my goals.",
      author: "John",
      role: "Indie founder",
      rating: 5,
      avatar: "/face/john.png"
    },
    {
      quote:
        "Every other tool I tried was bloated and built for corporate teams. I just wanted something clean and focused. TapTrack is like a minimalist beast. No junk, just powerful time tracking that actually works.",
      author: "Sara",
      role: "Solopreneur & agency escapee",
      rating: 5,
      avatar: "/face/sara.png"
    },
    {
      quote:
        "I used to write long to-do lists and never finish them. Subconsciously, I’d already given up before starting. TapTrack’s daily top-5 task system literally reprogrammed how I work. I now complete more with less overwhelm.",
      author: "Placeholder User 1",
      role: "Student & content creator",
      rating: 5,
      avatar: "/placeholder-user.jpg"
    },
    {
      quote:
        "I always felt ignored by big time tracking apps. They’re built for teams, agencies, and managers. TapTrack is the first tool I’ve used that’s clearly made for me, a one-man army trying to level up.",
      author: "Placeholder User 2",
      role: "Indie Hacker",
      rating: 5,
      avatar: "/placeholder-user.jpg"
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 flex items-center justify-center">
              <Image
                src="/images/brand-logo.png"
                alt="TapTrack Logo"
                width={32}
                height={32}
                className="size-8 object-contain"
              />
            </div>
            <span>TapTrack</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Launching Soon
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                Made By Simple People For <span className="relative bg-gradient-to-br from-brand-light via-brand-main to-brand-dark bg-clip-text text-transparent">Simple People<span className="absolute -inset-1 -z-10 block animate-pulse bg-gradient-to-br from-brand-light via-brand-main to-brand-dark opacity-30 blur-xl"></span></span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {
                  "Track your time. Feed it to AI. Get real answers.\nTapTrack is the world's first AI-powered time tracking software that turns your hours into insights. Built for productivity freaks, freelancers, and people who care about their time."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <span>Start Free Trial</span>
                </HoverBorderGradient>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{"Instant Support"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{"AI Time Coach"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Freelancer mode</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                  width={1280}
                  height={720}
                  alt="SaaSify dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Squares />
          </div>
          <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform."
        testimonials={[
          {
            author: {
              name: "AshuRex",
              handle: "@ashurex",
              avatar: "/face/AshuRex.png",
            },
            text: "This platform has revolutionized my workflow. The AI capabilities are unmatched!",
          },
          {
            author: {
              name: "Free Man",
              handle: "@freeman",
              avatar: "/face/Free Man.png",
            },
            text: "I've never seen such a powerful and intuitive AI tool. Highly recommended!",
          },
          {
            author: {
              name: "rosalinecopper",
              handle: "@rosalinecopper",
              avatar: "/face/rosalinecopper.jpg",
            },
            text: "The best AI platform for developers, hands down. It's a game-changer!",
          },
          {
            author: {
              name: "rykhan316",
              handle: "@rykhan316",
              avatar: "/face/rykhan316.png",
            },
            text: "Absolutely incredible! This platform has boosted my productivity significantly.",
          },
          {
            author: {
              name: "sara",
              handle: "@sara",
              avatar: "/face/sara.png",
            },
            text: "A must-have for any developer looking to leverage AI. Fantastic features!",
          },
        ]}
      />
        </section>

        {/* What TapTrack Is Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                What TapTrack Is
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Not another timer. A time coach in your pocket.
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                TapTrack does more than start and stop. It watches how you spend your hours, then gives you real,
                personalized insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-6 text-center">
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        Are you more focused at 10am or 4pm?
                      </h3>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        Do Mondays drain you or supercharge you?
                      </h3>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        Which tasks suck your time with zero payoff?
                      </h3>
                    </div>
                    <div className="pt-6 border-t border-border/40">
                      <p className="text-lg md:text-xl font-medium text-primary">
                        It tells you. Like a coach. But smarter.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Why Time Tracking Matters Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Why Time Tracking Matters
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What gets measured, gets better.</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      You want to be productive. Or get paid accurately. But unless you know where your time is going,
                      you're guessing.
                    </p>
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                        TapTrack turns your time into visible patterns. And once you see the patterns, you start fixing
                        them.
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-xl md:text-2xl font-semibold text-primary">It's that simple.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* What You're Really Paying For Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                What You're Really Paying For
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Not Just a Timer. This Is ROI for Your Brain.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8">
                    {/* Benefits Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {[
                        "Save 4–8 hours every week",
                        "Bill more accurately (if freelancing)",
                        "Work less and still get more done",
                        "Feel in control, calm, and confident",
                      ].map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0">
                            <Check className="size-5 text-primary" />
                          </div>
                          <p className="text-lg font-medium text-foreground">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pricing Section */}
                    <div className="pt-8 border-t border-border/40 text-center space-y-4">
                      <div className="flex items-center justify-center gap-6 flex-wrap">
                        <div className="text-center">
                          <p className="text-3xl md:text-4xl font-bold text-primary">$12</p>
                          <p className="text-sm text-muted-foreground">/month</p>
                        </div>
                        <div className="text-muted-foreground text-2xl">or</div>
                        <div className="text-center">
                          <p className="text-3xl md:text-4xl font-bold text-primary">$100</p>
                          <p className="text-sm text-muted-foreground">/year</p>
                        </div>
                      </div>
                      <p className="text-lg font-medium text-foreground">No weird pricing tricks. Just real value.</p>
                      <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        We don't believe in shady pricing psychology. That's why we don't do $11.99 or $99.00. You're
                        smarter than that.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Succeed</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Our comprehensive platform provides all the tools you need to streamline your workflow, boost
                productivity, and achieve your goals.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TapTrack Is NOT Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Anti-Objection
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">TapTrack is NOT:</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8">
                    {/* Anti-Features Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {[
                        "A bloated project manager",
                        "A corporate spy tool with creepy screenshots",
                        "A glorified Pomodoro clone",
                        "A noisy, complex mess",
                      ].map((antiFeature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-center space-x-4"
                        >
                          <div className="flex-shrink-0">
                            <div className="size-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                              <X className="size-5 text-red-600 dark:text-red-400" />
                            </div>
                          </div>
                          <p className="text-lg font-medium text-foreground">{antiFeature}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="pt-8 border-t border-border/40 text-center">
                      <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed">
                        It's clean, focused, and built for people who just want to get things done.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Stop Guessing. Start Knowing.</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Unlock your productivity potential. TapTrack gives you the clarity to focus on what truly matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Plan Your Day",
                  description: "Start by creating your to-do list and blocking out time for your most important tasks. Get focused before you even begin.",
                },
                {
                  step: "02",
                  title: "Track Your Time",
                  description: "As you work, track your time with a single click. No complicated setup, just pure focus on the task at hand.",
                },
                {
                  step: "03",
                  title: "Analyze & Improve",
                  description: "See exactly where your time goes. Our AI-powered insights help you identify distractions and optimize your workflow.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Teams Worldwide</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Don't just take our word for it. See what our customers have to say about their experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "The moment I started tracking my time with TapTrack, everything changed. My deep work doubled, distractions dropped, and I finally feel in control. It’s true. What gets tracked really does get improved.",
                  author: "Anya Sharma",
                  role: "Freelance designer",
                  rating: 5,
                  avatar: "/placeholder-user.jpg"
                },
                {
                  quote:
                    "I used to hustle 10 hours a day but had zero clue where my time went. TapTrack showed me the truth in one week. Turns out I was busy, not productive. Now, every hour is accounted for and I’m finally hitting my goals.",
                  author: "Ethan Vance",
                  role: "Indie founder",
                  rating: 5,
                  avatar: "/face/john.png"
                },
                {
                  quote:
                    "Every other tool I tried was bloated and built for corporate teams. I just wanted something clean and focused. TapTrack is like a minimalist beast. No junk, just powerful time tracking that actually works.",
                  author: "Liam O'Connell",
                  role: "Solopreneur & agency escapee",
                  rating: 5,
                  avatar: "/placeholder-user.jpg"
                },
                {
                  quote:
                    "I used to write long to-do lists and never finish them. Subconsciously, I’d already given up before starting. TapTrack’s daily top-5 task system literally reprogrammed how I work. I now complete more with less overwhelm.",
                  author: "Noah Fischer",
                  role: "Student & content creator",
                  rating: 5,
                  avatar: "/face/david g.png"
                },
                {
                  quote:
                    "I always felt ignored by big time tracking apps. They’re built for teams, agencies, and managers. TapTrack is the first tool I’ve used that’s clearly made for me, a one-man army trying to level up.",
                  author: "Chloe Dubois",
                  role: "Indie Hacker",
                  rating: 5,
                  avatar: "/face/sara.png"
                },
                {
                  quote:
                    "Time tracking used to feel like a chore. Too many buttons, too many steps. TapTrack made it so simple. One click, I’m tracking. No clutter, no load. Exactly how it should be.",
                  author: "Isabella Rossi",
                  role: "Side-hustler",
                  rating: 5,
                  avatar: "/placeholder-user.jpg"
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          <Image
                            src={testimonial.avatar || "/placeholder-user.jpg"}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="size-10 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, Honest Pricing</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Choose the plan that's right for your business. All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="monthly" className="rounded-full px-6">
                      We don’t do fake discounts or tricky 99’s. We respect your brain.
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {[
                      {
                        name: "Monthly",
                        price: "$12",
                        description: "Perfect for individuals and small teams.",
                        features: ["Time tracking", "AI insights", "Basic reports", "Email support"],
                        cta: "Start Free Trial",
                      },
                      {
                        name: "Yearly",
                        price: "$100",
                        description: "Best value for committed users.",
                        features: [
                          "Everything in Monthly",
                          "Advanced analytics",
                          "Priority support",
                          "Export features",
                        ],
                        cta: "Start Free Trial",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button className={`w-full mt-auto rounded-full`} variant="outline">
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {[
                      {
                        name: "Monthly",
                        price: "$12",
                        description: "Perfect for individuals and small teams.",
                        features: ["Time tracking", "AI insights", "Basic reports", "Email support"],
                        cta: "Start Free Trial",
                      },
                      {
                        name: "Yearly",
                        price: "$100",
                        description: "Best value for committed users.",
                        features: [
                          "Everything in Monthly",
                          "Advanced analytics",
                          "Priority support",
                          "Export features",
                        ],
                        cta: "Start Free Trial",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground ml-1">/month</span>
                            </div>
                            <p className="text-muted-foreground mt-2">{plan.description}</p>
                            <ul className="space-y-3 my-6 flex-grow">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <Check className="mr-2 size-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button className={`w-full mt-auto rounded-full`} variant="outline">
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our platform.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How does the 14-day free trial work?",
                    answer:
                      "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
                  },
                  {
                    question: "Can I change plans later?",
                    answer:
                      "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
                  },
                  {
                    question: "Is there a limit to how many users I can add?",
                    answer:
                      "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
                  },
                  {
                    question: "Do you offer discounts for nonprofits or educational institutions?",
                    answer:
                      "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
                  },
                  {
                    question: "How secure is my data?",
                    answer:
                      "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
                  },
                  {
                    question: "What kind of support do you offer?",
                    answer:
                      "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Squares />
          </div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Your hours are limited. <span className="relative bg-gradient-to-br from-brand-light via-brand-main to-brand-dark bg-clip-text text-transparent">Make every one count.<span className="absolute -inset-1 -z-10 block animate-pulse bg-gradient-to-br from-brand-light via-brand-main to-brand-dark opacity-30 blur-xl"></span></span>
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Know where you're spending time. Spot your lazy hours. Listen to productivity sounds. Do Pomodoros based
                on activity blocks and let AI guide you to stack wins daily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <span>Free Trial</span>
                </HoverBorderGradient>
              </div>
              <p className="text-sm text-white/80 mt-4">
                No credit card required. 3-day free trial. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 flex items-center justify-center">
                  <Image
                    src="/images/brand-logo.png"
                    alt="TapTrack Logo"
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                  />
                </div>
                <span>TapTrack</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Track your time with AI-powered insights. Built for productivity freaks, freelancers, and people who
                care about their time.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TapTrack. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
