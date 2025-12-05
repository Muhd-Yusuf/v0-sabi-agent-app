"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import OverviewStats from "@/components/dashboard/overview-stats"
import ContentChart from "@/components/dashboard/content-chart"
import EngagementChart from "@/components/dashboard/engagement-chart"
import QuickActions from "@/components/dashboard/quick-actions"
import RecentActivity from "@/components/dashboard/recent-activity"

export default function DashboardOverview() {
  const { data: session } = useSession()
  const [stats] = useState({
    totalCredits: 150,
    remainingCredits: 87,
    postsGenerated: 24,
    scheduledPosts: 5,
  })

  const [contentData] = useState([
    { month: "Jan", posts: 8 },
    { month: "Feb", posts: 12 },
    { month: "Mar", posts: 15 },
    { month: "Apr", posts: 10 },
    { month: "May", posts: 18 },
    { month: "Jun", posts: 22 },
  ])

  const [engagementData] = useState([
    { month: "Jan", engagement: 240 },
    { month: "Feb", engagement: 380 },
    { month: "Mar", engagement: 250 },
    { month: "Apr", engagement: 430 },
    { month: "May", engagement: 490 },
    { month: "Jun", engagement: 521 },
  ])

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 17) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">👋</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {getGreeting()}, {session?.user?.name?.split(' ')[0] || 'there'}!
            </h1>
          </div>
          <p className="text-muted-foreground">Here's your content performance overview</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-baby-green/50 border border-primary/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <OverviewStats stats={stats} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ContentChart data={contentData} />
        <EngagementChart data={engagementData} />
      </div>

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  )
}
