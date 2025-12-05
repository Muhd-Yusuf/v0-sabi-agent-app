"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-animated min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Floating orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      <div className="hidden sm:block absolute top-1/2 left-1/3 w-64 h-64 bg-baby-green/30 rounded-full blur-3xl animate-float-slow" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Centered on mobile */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000`}>
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-soft ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-200`}
                >
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-foreground tracking-wide">AI Content Created Just for You</p>
                </div>
              </div>

              {/* Main Headline - Centered on mobile */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-300`}>
                Create, Schedule
                <br />
                <span className="relative inline-block">
                  <span className="text-gradient">& Post Content</span>
                  <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
                <br />
                <span className="text-foreground">Automatically</span>
              </h1>

              {/* Subheading */}
              <p className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-400`}>
                AI-powered content creation and social media management for African SMEs —
                <span className="text-foreground font-medium"> no stress, no extra cost.</span>
              </p>
            </div>

            {/* CTA Buttons - Centered and stacked on mobile */}
            <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-500`}>
              <Link href="/auth/signup" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 text-white font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1 rounded-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Free
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base border-2 border-foreground/10 hover:border-primary/30 hover:bg-primary/5 rounded-2xl transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </Button>
            </div>

            {/* Trust Metrics - Responsive grid */}
            <div className={`grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-600`}>
              {[
                { value: "150+", label: "SMEs Onboarded" },
                { value: "3,500+", label: "AI Posts Created" },
                { value: "₦12M", label: "Pre-seed Raised" },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-2 sm:p-4">
                    <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-gradient">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview - Hidden on small mobile, shown on tablet+ */}
          <div className={`relative hidden sm:block ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-300`}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-baby-green/20 to-primary/10 rounded-[2rem] lg:rounded-[2.5rem] blur-3xl opacity-60 animate-pulse-glow" />

            {/* Main card */}
            <div className="relative glass-card p-6 sm:p-8 lg:p-10 animate-float-slow">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold text-foreground">Dashboard Preview</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Real-time analytics</p>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { value: "24", label: "Posts Today", trend: "+12%" },
                  { value: "4.2K", label: "Total Reach", trend: "+28%" },
                  { value: "8.4%", label: "Engagement", trend: "+5%" },
                ].map((stat, index) => (
                  <div key={index} className="relative p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-baby-green/20 border border-border/50 group hover:shadow-soft transition-all duration-300">
                    <p className="text-lg sm:text-2xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</p>
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[10px] sm:text-xs font-semibold text-primary">{stat.trend}</span>
                  </div>
                ))}
              </div>

              {/* Mini chart visualization */}
              <div className="h-24 sm:h-32 bg-gradient-to-br from-baby-green/30 to-transparent rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-end gap-1 sm:gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-md sm:rounded-t-lg transition-all duration-300 hover:from-primary/90 hover:to-primary/80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              {/* Quick actions */}
              <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
                <button className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Create Post
                </button>
                <button className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-baby-green text-primary font-semibold text-xs sm:text-sm hover:bg-baby-green/80 transition-colors">
                  View Analytics
                </button>
              </div>
            </div>

            {/* Floating elements - Hidden on tablet, shown on desktop */}
            <div className="hidden lg:block absolute -top-6 -right-6 glass-card p-4 rounded-2xl animate-float shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Post Published!</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl animate-float-delayed shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">AI Generated</p>
                  <p className="text-xs text-muted-foreground">3 new posts ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60">
        <p className="text-xs font-medium text-muted-foreground">Scroll to explore</p>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
