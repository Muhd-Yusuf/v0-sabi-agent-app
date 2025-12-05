"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      label: "Generate Content",
      href: "/dashboard/generator",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      label: "Schedule",
      href: "/dashboard/schedule",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Credits",
      href: "/dashboard/credits",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      label: "Connections",
      href: "/dashboard/connections",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ]

  return (
    <aside
      className={`${isCollapsed ? "w-20" : "w-72"} bg-white border-r border-border/50 transition-all duration-300 hidden md:flex flex-col shadow-soft-sm`}
    >
      {/* Logo */}
      <div className="h-20 border-b border-border/50 flex items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/images/sabi-20agent-20-284-29.png"
              alt="Sabi Agent Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl text-foreground">
              Sabi<span className="text-primary">Agent</span>
            </span>
          )}
        </Link>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-baby-green/50 rounded-xl transition-colors"
        >
          <svg className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:bg-baby-green/50 hover:text-foreground"
                }`}
            >
              <span className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-primary'}`}>
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="font-medium truncate">{item.label}</span>
              )}
              {isActive && !isCollapsed && (
                <div className="ml-auto w-2 h-2 rounded-full bg-white" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Card */}
      {!isCollapsed && (
        <div className="p-4 border-t border-border/50">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-baby-green/50 to-primary/5 border border-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Pro Tip</p>
                <p className="text-xs text-muted-foreground">Boost engagement</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Schedule content in advance for consistent engagement and better reach.
            </p>
          </div>
        </div>
      )}

      {/* Credits Summary */}
      {!isCollapsed && (
        <div className="p-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">Credits Remaining</span>
            <span className="text-xs font-bold text-primary">87 / 150</span>
          </div>
          <div className="h-2 bg-border/50 rounded-full overflow-hidden">
            <div className="h-full w-[58%] bg-gradient-to-r from-primary to-primary/80 rounded-full" />
          </div>
          <Link href="/dashboard/credits" className="block mt-3">
            <button className="w-full py-2 text-xs font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors">
              Buy More Credits →
            </button>
          </Link>
        </div>
      )}
    </aside>
  )
}
