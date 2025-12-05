"use client"

import Link from "next/link"

export default function QuickActions() {
  const actions = [
    {
      title: "Generate New Content",
      description: "Create AI-powered posts for your products",
      href: "/dashboard/generator",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-primary to-green-400",
      badge: "Popular",
    },
    {
      title: "Schedule a Post",
      description: "Plan your content calendar in advance",
      href: "/dashboard/schedule",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      badge: null,
    },
    {
      title: "Connect Social Media",
      description: "Link your WhatsApp, Instagram, and more",
      href: "/dashboard/connections",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
      badge: null,
    },
    {
      title: "Buy Credits",
      description: "Top up your account for more posts",
      href: "/dashboard/credits",
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
      badge: "Save 40%",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">Quick Actions</h2>
        <Link href="/dashboard/generator" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Link key={index} href={action.href}>
            <div className="group relative h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Badge */}
              {action.badge && (
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full bg-gradient-to-r ${action.gradient} text-white text-[10px] sm:text-xs font-bold`}>
                  {action.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {action.icon}
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                {action.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {action.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                <span className="mr-2">Get started</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Background decoration */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${action.gradient} opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
