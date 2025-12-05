"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface EngagementChartProps {
  data: { month: string; engagement: number }[]
}

export default function EngagementChart({ data }: EngagementChartProps) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/50 shadow-soft">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">Engagement Growth</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">Social media engagement trend</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
          <span className="text-xs font-semibold text-green-600">+18.3%</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-3 rounded-xl bg-purple-50">
          <p className="text-xs text-muted-foreground">Total Reach</p>
          <p className="text-xl sm:text-2xl font-bold text-purple-600">2.3K</p>
        </div>
        <div className="p-3 rounded-xl bg-blue-50">
          <p className="text-xs text-muted-foreground">Interactions</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">521</p>
        </div>
        <div className="p-3 rounded-xl bg-pink-50">
          <p className="text-xs text-muted-foreground">Avg Rate</p>
          <p className="text-xl sm:text-2xl font-bold text-pink-600">8.4%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="var(--color-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--color-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                padding: "12px",
              }}
              labelStyle={{ color: "var(--color-foreground)", fontWeight: "bold", marginBottom: "4px" }}
              itemStyle={{ color: "#8B5CF6" }}
            />
            <Area
              type="monotone"
              dataKey="engagement"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#engagementGradient)"
              dot={{ fill: "#8B5CF6", strokeWidth: 2, stroke: "white", r: 4 }}
              activeDot={{ r: 6, fill: "#8B5CF6", stroke: "white", strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
