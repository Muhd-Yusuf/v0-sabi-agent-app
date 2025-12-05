"use client"

import type React from "react"
import { useState } from "react"

interface ContentFormProps {
  onSubmit: (data: any) => void
  isLoading: boolean
}

export default function ContentForm({ onSubmit, isLoading }: ContentFormProps) {
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    targetAudience: "",
    platform: "instagram",
    tone: "professional",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const productTypes = [
    { value: "fashion", label: "Fashion & Clothing", icon: "👗" },
    { value: "food", label: "Food & Beverage", icon: "🍽️" },
    { value: "electronics", label: "Electronics", icon: "📱" },
    { value: "home", label: "Home & Garden", icon: "🏠" },
    { value: "beauty", label: "Beauty & Wellness", icon: "💄" },
    { value: "sports", label: "Sports & Fitness", icon: "⚽" },
    { value: "books", label: "Books & Media", icon: "📚" },
    { value: "services", label: "Services", icon: "🛠️" },
    { value: "other", label: "Other", icon: "📦" },
  ]

  const platforms = [
    { value: "instagram", label: "Instagram", icon: "📸" },
    { value: "twitter", label: "Twitter/X", icon: "🐦" },
    { value: "facebook", label: "Facebook", icon: "📘" },
    { value: "whatsapp", label: "WhatsApp Status", icon: "💬" },
  ]

  const tones = [
    { value: "professional", label: "Professional" },
    { value: "casual", label: "Casual & Friendly" },
    { value: "playful", label: "Playful & Fun" },
    { value: "urgent", label: "Urgent & Exciting" },
    { value: "luxury", label: "Luxury & Premium" },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Product Name */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Product Name
        </label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="e.g., Handmade Leather Bag"
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
          required
        />
      </div>

      {/* Product Type */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          Product Category
        </label>
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 cursor-pointer"
          required
        >
          <option value="">Select a category</option>
          {productTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.icon} {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Target Audience */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Target Audience
        </label>
        <input
          type="text"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          placeholder="e.g., Young professionals, Fashion enthusiasts"
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
          required
        />
      </div>

      {/* Platform & Tone Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Platform */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Platform
          </label>
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 cursor-pointer"
          >
            {platforms.map((platform) => (
              <option key={platform.value} value={platform.value}>
                {platform.icon} {platform.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tone */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Tone
          </label>
          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 cursor-pointer"
          >
            {tones.map((tone) => (
              <option key={tone.value} value={tone.value}>
                {tone.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Credit Info */}
      <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-blue-800">
              This will use <span className="font-bold">1 credit</span>
            </p>
            <p className="text-xs text-blue-600">You have 87 credits remaining</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 group overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating magic...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Generate Content
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </button>

      {/* Tips */}
      <div className="p-4 rounded-xl bg-baby-green/30 border border-primary/10">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-sm font-semibold text-foreground">Pro Tips</span>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1.5">
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Be specific about your product for better results
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Include your target audience for personalized content
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Different platforms get tailored content automatically
          </li>
        </ul>
      </div>
    </form>
  )
}
