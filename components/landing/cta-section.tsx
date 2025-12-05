"use client"

import Link from "next/link"

export default function CTASection() {
    return (
        <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            {/* Floating orbs - hidden on mobile */}
            <div className="hidden sm:block absolute top-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">Start for free today</span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight px-2">
                    Ready to Transform Your
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    Social Media Game?
                </h2>

                {/* Subheading */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                    Join 150+ African SMEs already using Sabi Agent to create stunning content
                    and grow their business on autopilot.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
                    <Link href="/auth/signup" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto group relative overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-primary font-bold text-sm sm:text-base lg:text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get Started Free
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-baby-green/0 via-baby-green/50 to-baby-green/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </button>
                    </Link>
                    <Link href="#features" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-white/30 text-white font-bold text-sm sm:text-base lg:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/70 text-xs sm:text-sm px-4">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>No credit card required</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free credits to start</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
