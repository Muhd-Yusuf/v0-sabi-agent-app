"use client"

import { useEffect, useRef, useState } from "react"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setActiveStep((prev) => (prev < 2 ? prev + 1 : prev))
            }, 1000)
            setTimeout(() => clearInterval(interval), 3500)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      title: "Connect Your Socials",
      description: "Link your WhatsApp or Instagram in seconds. Upload your products and let Sabi Agent learn your brand.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      title: "AI Creates Magic",
      description: "Our AI generates stunning, on-brand content tailored to your products and audience instantly.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-primary to-green-400",
    },
    {
      number: 3,
      title: "Sit Back & Relax",
      description: "Content posts automatically. Or chat on WhatsApp anytime to request custom posts on-the-go.",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section ref={sectionRef} id="how-it-works" className="relative w-full py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[600px] lg:w-[800px] h-[300px] lg:h-[400px] bg-gradient-to-b from-baby-green/50 to-transparent rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-baby-green/50 border border-primary/10 mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Get started in under 5 minutes. Let AI handle your content while you focus on growing your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <div className="relative h-full mx-20">
              <div className="absolute inset-0 bg-gradient-to-r from-border via-primary/30 to-border rounded-full" />
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                style={{ width: `${(activeStep + 1) * 33.33}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Card */}
                <div className="relative glass-card p-6 sm:p-8 h-full group hover:shadow-soft-lg transition-all duration-500">
                  {/* Step number */}
                  <div className={`absolute -top-4 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg ${index <= activeStep ? 'scale-100' : 'scale-90'} transition-transform duration-500`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center mt-4 sm:mt-6 mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-br ${step.gradient} p-2 sm:p-3 rounded-lg sm:rounded-xl`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Decorative corner */}
                  <div className={`absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br ${step.gradient} opacity-5 rounded-tl-[2rem] sm:rounded-tl-[3rem]`} />
                </div>

                {/* Mobile connector */}
                {index < 2 && (
                  <div className="md:hidden flex justify-center py-3 sm:py-4">
                    <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Ready to automate your content?</p>
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-sm sm:text-base shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 group">
            Start Creating Now
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
