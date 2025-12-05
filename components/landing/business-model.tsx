"use client"

import Link from "next/link"

export default function BusinessModel() {
  return (
    <section id="pricing" className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-gradient-radial from-baby-green/40 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-baby-green/50 border border-primary/10 mb-4 sm:mb-6">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight">
            Pricing That <span className="text-gradient">Grows With You</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Start free, scale up whenever you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Pay Per Post Card */}
          <div className="relative group">
            {/* Popular badge */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary to-primary/90 text-white text-xs sm:text-sm font-bold shadow-lg shadow-primary/25">
                Most Popular
              </div>
            </div>

            <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-primary shadow-soft-lg hover:shadow-glow transition-all duration-500 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-baby-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">Content Credits</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Pay per post</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">₦20</span>
                    <span className="text-base sm:text-lg text-muted-foreground font-medium">/credit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">1 credit = 1 AI-generated post</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Flexible pay-as-you-go",
                    "No subscription needed",
                    "Buy in bulk for discounts",
                    "Credits never expire",
                    "Priority support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/auth/signup" className="block">
                  <button className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 group">
                    <span className="flex items-center justify-center gap-2">
                      Buy Credits
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Free Credits Card */}
          <div className="relative group">
            <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-border shadow-soft hover:shadow-soft-lg transition-all duration-500 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-baby-green/20 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-baby-green to-baby-green/80 flex items-center justify-center">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">Free Credits</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Earn by engaging</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">100+</span>
                    <span className="text-base sm:text-lg text-muted-foreground font-medium">/month</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">By watching ads & referrals</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    "Get free credits daily",
                    "Refer friends for bonuses",
                    "Complete challenges to earn",
                    "Watch short ads for credits",
                    "No credit card required",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-baby-green flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-primary/30 text-primary font-bold text-sm sm:text-base lg:text-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group">
                  <span className="flex items-center justify-center gap-2">
                    Start Earning
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credit packages */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">Bulk Credit Packages</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Save more when you buy in bulk</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { credits: 50, price: "₦1,000", save: null },
              { credits: 150, price: "₦2,500", save: "Save 17%" },
              { credits: 500, price: "₦7,500", save: "Save 25%" },
              { credits: 1000, price: "₦12,000", save: "Save 40%" },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer ${pkg.save ? 'bg-baby-green/30 border-primary/20 hover:shadow-glow' : 'bg-white border-border hover:shadow-soft'
                  }`}
              >
                {pkg.save && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold whitespace-nowrap">
                    {pkg.save}
                  </div>
                )}
                <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{pkg.credits}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">credits</p>
                <p className="text-base sm:text-lg font-bold text-primary">{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust elements */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
