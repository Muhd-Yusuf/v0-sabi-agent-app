"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ContentChartProps {
  data: { month: string; posts: number }[]
}

export default function ContentChart({ data }: ContentChartProps) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/50 shadow-soft">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">Content Generation</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">Posts created over the last 6 months</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Posts</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-3 rounded-xl bg-baby-green/30">
          <p className="text-xs text-muted-foreground">Total</p>
          <p className="text-xl sm:text-2xl font-bold text-foreground">85</p>
        </div>
        <div className="p-3 rounded-xl bg-primary/5">
          <p className="text-xs text-muted-foreground">This Month</p>
          <p className="text-xl sm:text-2xl font-bold text-primary">22</p>
        </div>
        <div className="p-3 rounded-xl bg-green-50">
          <p className="text-xs text-muted-foreground">Avg/Month</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">14</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={1} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.6} />
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
              itemStyle={{ color: "var(--color-primary)" }}
              cursor={{ fill: 'var(--color-baby-green)', opacity: 0.3 }}
            />
            <Bar
              dataKey="posts"
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
