"use client"

import { useState } from "react"

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI Content Creation",
      description: "Smart AI generates compelling product descriptions and captions tailored to your audience in seconds.",
      gradient: "from-violet-500 to-purple-600",
      lightGradient: "from-violet-500/10 to-purple-600/10",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Smart Scheduling",
      description: "AI picks the optimal posting times for maximum engagement. Set it and forget it.",
      gradient: "from-primary to-green-400",
      lightGradient: "from-primary/10 to-green-400/10",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp Integration",
      description: "Request content directly via WhatsApp chat. Get instant AI-generated posts on demand.",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Flexible Credits",
      description: "₦20 per credit. Pay only for what you use. No hidden fees, no subscriptions required.",
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Product Catalog",
      description: "Upload products once. AI learns and creates contextual content automatically.",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: "Multi-Platform",
      description: "Post to Instagram, Twitter, Facebook, and more from one powerful dashboard.",
      gradient: "from-pink-500 to-rose-500",
      lightGradient: "from-pink-500/10 to-rose-500/10",
    },
  ]

  return (
    <section id="features" className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-baby-green/30 via-white to-white" />
      <div className="hidden sm:block absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-baby-green/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-primary/10 shadow-soft mb-4 sm:mb-6">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4">
            Everything You Need to
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-gradient">Succeed on Social</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            From AI-powered content creation to smart scheduling, we've got all the tools to make your social media management effortless.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                    {feature.description}
                  </p>

                  {/* Learn more link - hidden on mobile */}
                  <div className="hidden sm:flex mt-6 items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom feature highlight */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-baby-green/30 to-primary/5 rounded-2xl sm:rounded-3xl" />
          <div className="relative glass-card p-6 sm:p-8 lg:p-12 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">10x Faster</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Content creation</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">90% Cheaper</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Than hiring a team</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">24/7 Active</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Never miss a post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
