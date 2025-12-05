"use client"

import Link from "next/link"

export default function RecentActivity() {
    const activities = [
        {
            id: 1,
            type: "post_created",
            title: "AI generated post for 'Summer Collection'",
            description: "Instagram post with product showcase",
            time: "2 minutes ago",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
        },
        {
            id: 2,
            type: "post_published",
            title: "Post published to Instagram",
            description: "Your scheduled post is now live",
            time: "15 minutes ago",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ),
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
        },
        {
            id: 3,
            type: "credits_used",
            title: "2 credits used",
            description: "Generated content for product promotion",
            time: "1 hour ago",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            ),
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
        },
        {
            id: 4,
            type: "schedule_created",
            title: "New post scheduled",
            description: "Set for tomorrow at 10:00 AM",
            time: "2 hours ago",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
        },
        {
            id: 5,
            type: "connection_added",
            title: "WhatsApp connected",
            description: "You can now generate posts via WhatsApp",
            time: "Yesterday",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
        },
    ]

    return (
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-border/50 shadow-soft overflow-hidden">
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-border/50 flex items-center justify-between">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">Recent Activity</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">Your latest actions and updates</p>
                </div>
                <Link href="/dashboard/activity" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    View all →
                </Link>
            </div>

            {/* Activity List */}
            <div className="divide-y divide-border/50">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className="p-4 sm:p-5 hover:bg-gray-50/50 transition-colors cursor-pointer group"
                    >
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-xl ${activity.iconBg} ${activity.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                {activity.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-foreground truncate">{activity.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{activity.description}</p>
                            </div>

                            {/* Time */}
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-gray-50/50 border-t border-border/50">
                <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                        Showing 5 of 24 activities
                    </p>
                    <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                        Load more
                    </button>
                </div>
            </div>
        </div>
    )
}
