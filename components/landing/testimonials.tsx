"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Chioma Okafor",
      role: "Fashion Boutique Owner",
      location: "Lagos, Nigeria",
      avatar: "CO",
      avatarGradient: "from-pink-500 to-rose-500",
      content: "Sabi Agent saves me 2 hours daily. I just upload my products and the AI handles everything. My sales increased by 40% in just 2 months!",
      rating: 5,
      metric: "+40% Sales",
    },
    {
      name: "Emeka Adeyemi",
      role: "Food & Beverage Entrepreneur",
      location: "Abuja, Nigeria",
      avatar: "EA",
      avatarGradient: "from-blue-500 to-cyan-500",
      content: "Finally, a tool built for African SMEs. The WhatsApp integration is genius. I can request posts while on the go, even when I'm busy with customers.",
      rating: 5,
      metric: "2hrs Saved Daily",
    },
    {
      name: "Adeola Bello",
      role: "E-commerce Store Manager",
      location: "Ibadan, Nigeria",
      avatar: "AB",
      avatarGradient: "from-primary to-green-400",
      content: "The credit system is so flexible. I started free with ads, now I buy credits when I need bulk posting. Perfect for our growth stage!",
      rating: 5,
      metric: "3x More Posts",
    },
    {
      name: "Olumide Taiwo",
      role: "Tech Gadgets Retailer",
      location: "Port Harcourt, Nigeria",
      avatar: "OT",
      avatarGradient: "from-purple-500 to-indigo-500",
      content: "The AI understands our products perfectly. It creates content that sounds exactly like our brand voice. Our engagement has never been higher!",
      rating: 5,
      metric: "+85% Engagement",
    },
    {
      name: "Amara Nwachukwu",
      role: "Beauty & Skincare Brand",
      location: "Enugu, Nigeria",
      avatar: "AN",
      avatarGradient: "from-amber-500 to-orange-500",
      content: "As a small business owner, I couldn't afford a social media manager. Sabi Agent is my 24/7 marketing assistant at a fraction of the cost!",
      rating: 5,
      metric: "90% Cost Savings",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-baby-green/20 via-white to-white" />
      <div className="hidden sm:block absolute top-1/2 left-0 w-72 lg:w-96 h-72 lg:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="hidden sm:block absolute top-1/4 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-baby-green/30 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-primary/10 shadow-soft mb-4 sm:mb-6">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Loved by SME Founders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Join hundreds of African SMEs who have transformed their social media presence with Sabi Agent.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-10 sm:mb-16">
          <div className="relative glass-card p-6 sm:p-8 lg:p-12 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-primary/10">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${testimonials[activeIndex].avatarGradient} flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-bold shadow-lg`}>
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-white shadow-soft flex items-center justify-center">
                    <span className="text-sm sm:text-base lg:text-xl">✓</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground font-medium leading-relaxed mb-4 sm:mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <div>
                      <p className="text-base sm:text-lg font-bold text-foreground">{testimonials[activeIndex].name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[activeIndex].role} • {testimonials[activeIndex].location}</p>
                    </div>
                    <div className="sm:ml-auto">
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm">
                        {testimonials[activeIndex].metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'bg-primary w-6 sm:w-8'
                  : 'bg-border hover:bg-primary/30 w-2 sm:w-3'
                }`}
            />
          ))}
        </div>

        {/* Testimonial Cards Grid - Hidden on mobile, show on tablet+ */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer ${index === activeIndex ? 'ring-2 ring-primary/20' : ''
                }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-sm`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-primary">{testimonial.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Ready to join them?</p>
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-sm sm:text-base shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 group">
            Start Your Journey
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
