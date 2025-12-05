"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 2000
            const steps = 60
            const increment = target / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                setCount(target)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Traction() {
  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "SMEs Onboarded",
      description: "Businesses trust us",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: 3500,
      suffix: "+",
      label: "AI Posts Created",
      description: "And counting daily",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      gradient: "from-primary to-green-400",
    },
    {
      number: 12,
      suffix: "M",
      prefix: "₦",
      label: "Pre-seed Raised",
      description: "From top investors",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
    {
      number: 450,
      suffix: "K",
      label: "Pilot Ad Revenue",
      description: "Generated revenue",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-baby-green/20 to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Floating orbs - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-20 w-48 lg:w-64 h-48 lg:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-20 left-20 w-36 lg:w-48 h-36 lg:h-48 bg-baby-green/40 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-primary/10 shadow-soft mb-4 sm:mb-6">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Our Traction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight">
            Proven <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Trusted by African SMEs to scale their social media presence and grow their businesses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden text-center">
                {/* Gradient top line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-11 h-11 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground mb-1 sm:mb-2">
                  {stat.prefix || ""}
                  <AnimatedCounter target={stat.number} suffix={stat.suffix || ""} />
                </p>

                {/* Label */}
                <p className="text-xs sm:text-sm lg:text-base font-bold text-foreground mb-0.5 sm:mb-1">{stat.label}</p>
                <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">{stat.description}</p>

                {/* Decorative element */}
                <div className={`absolute -bottom-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="glass-card p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="text-center lg:text-left">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2">Backed by top accelerators & investors</p>
                <p className="text-sm sm:text-base text-muted-foreground">Join the growing community of successful SMEs</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                {/* Placeholder for investor/accelerator logos */}
                <div className="flex -space-x-3 sm:-space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-baby-green to-primary/20 border-2 border-white flex items-center justify-center text-sm sm:text-lg font-bold text-primary"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">150+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
