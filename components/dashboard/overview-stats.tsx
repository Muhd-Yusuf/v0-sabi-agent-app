"use client"

interface StatsProps {
  stats: {
    totalCredits: number
    remainingCredits: number
    postsGenerated: number
    scheduledPosts: number
  }
}

export default function OverviewStats({ stats }: StatsProps) {
  const statCards = [
    {
      label: "Total Credits",
      value: stats.totalCredits,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      gradient: "from-violet-500 to-purple-600",
      lightGradient: "from-violet-500/10 to-purple-600/10",
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      label: "Remaining Credits",
      value: stats.remainingCredits,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-primary to-green-400",
      lightGradient: "from-primary/10 to-green-400/10",
      change: "58%",
      changeType: "neutral" as const,
    },
    {
      label: "Posts Generated",
      value: stats.postsGenerated,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-500/10 to-cyan-500/10",
      change: "+8",
      changeType: "positive" as const,
    },
    {
      label: "Scheduled Posts",
      value: stats.scheduledPosts,
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-500/10 to-orange-500/10",
      change: "This week",
      changeType: "neutral" as const,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {statCards.map((card, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden"
        >
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${card.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

          {/* Top gradient line */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

          <div className="relative flex items-start justify-between">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">{card.label}</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground">{card.value}</p>
              <div className="flex items-center gap-1.5">
                {card.changeType === 'positive' ? (
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                ) : card.changeType === 'negative' ? (
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : null}
                <span className={`text-xs font-medium ${card.changeType === 'positive' ? 'text-green-500' :
                    card.changeType === 'negative' ? 'text-red-500' :
                      'text-muted-foreground'
                  }`}>
                  {card.change}
                </span>
              </div>
            </div>
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>
          </div>

          {/* Decorative corner */}
          <div className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br ${card.gradient} opacity-5 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-all duration-500`} />
        </div>
      ))}
    </div>
  )
}
