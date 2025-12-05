import type React from "react"
import Image from "next/image"
import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen bg-white">
        {/* Top Navigation */}
        <div className="p-6 sm:p-8">
          <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/sabi-20agent-20-284-29.png"
                alt="Sabi Agent Logo"
                width={36}
                height={36}
                className="relative w-8 h-8 sm:w-9 sm:h-9"
              />
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">
              Sabi<span className="text-primary">Agent</span>
            </span>
          </Link>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 py-8 sm:py-12">
          <div className="w-full max-w-md">{children}</div>
        </div>

        {/* Bottom */}
        <div className="p-6 sm:p-8 text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sabi Agent. Built for African SMEs 🇳🇬
        </div>
      </div>

      {/* Right Side - Hero/Promo (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-slow" />

        {/* Content */}
        <div className="relative flex flex-col justify-center p-12 xl:p-16 z-10">
          {/* Quote/Testimonial */}
          <div className="mb-12">
            <svg className="w-12 h-12 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl xl:text-3xl font-medium text-white leading-relaxed mb-8">
              "Sabi Agent transformed how we manage social media. We save 2+ hours daily and our engagement has
              <span className="text-white/90 font-bold"> increased by 85%</span>."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-white font-bold text-lg">
                CO
              </div>
              <div>
                <p className="font-semibold text-white">Chioma Okafor</p>
                <p className="text-white/70 text-sm">Fashion Boutique Owner, Lagos</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "150+", label: "SMEs Onboard" },
              { value: "3,500+", label: "Posts Created" },
              { value: "₦12M", label: "Raised" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <p className="text-2xl xl:text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-xs xl:text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features list */}
          <div className="mt-12 space-y-4">
            {[
              "AI-powered content creation in seconds",
              "Smart scheduling for optimal engagement",
              "WhatsApp integration for on-the-go posts",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm xl:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  )
}
