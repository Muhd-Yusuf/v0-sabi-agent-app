"use client"

import { useState } from "react"
import ContentForm from "@/components/dashboard/generator/content-form"
import GeneratedContentPreview from "@/components/dashboard/generator/content-preview"

export default function ContentGenerator() {
  const [generatedContent, setGeneratedContent] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleGenerateContent = async (formData: any) => {
    setLoading(true)
    try {
      // Simulate API call - in production, call /api/generate-content
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate delay
      const mockContent = {
        caption: `Introducing our stunning ${formData.productName}! 🌟\n\nPerfect for ${formData.targetAudience}, this ${formData.productType} is crafted with excellence in mind.\n\nDon't miss out - Shop now and transform your experience!\n\n#SupportLocal #QualityProducts #${formData.productName.replace(/\s+/g, "")}`,
        hashtags: [
          "#SupportLocal",
          "#QualityProducts",
          `#${formData.productName.replace(/\s+/g, "")}`,
          "#MadeInAfrica",
          "#ShopLocal",
        ],
        thumbnail: "/product-thumbnail.png",
      }
      setGeneratedContent(mockContent)
    } catch (error) {
      console.error("Error generating content:", error)
    } finally {
      setLoading(false)
    }
  }

  const handlePostNow = async () => {
    console.log("Posting content now...")
    // Implementation for posting immediately
  }

  const handleSchedule = async () => {
    console.log("Opening schedule modal...")
    // Implementation for scheduling
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-lg shadow-primary/25">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Content Generator</h1>
              <p className="text-sm text-muted-foreground">Create AI-powered content for your products in seconds</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-baby-green/50 border border-primary/10">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-foreground">87 credits remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        {/* Form Section */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-border/50 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Product Details</h2>
              <p className="text-xs text-muted-foreground">Fill in the details to generate content</p>
            </div>
          </div>
          <ContentForm onSubmit={handleGenerateContent} isLoading={loading} />
        </div>

        {/* Preview Section */}
        <div>
          {generatedContent ? (
            <div className="space-y-4">
              <GeneratedContentPreview content={generatedContent} />
              <div className="flex gap-3">
                <button
                  onClick={handlePostNow}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Post Now
                </button>
                <button
                  onClick={handleSchedule}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-border text-foreground font-bold text-base hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-dashed border-border flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-baby-green to-primary/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No content generated yet</h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                Fill in the product details on the left and click <strong>"Generate Content"</strong> to see your AI-powered post
              </p>

              {/* Tips */}
              <div className="mt-8 p-4 rounded-xl bg-baby-green/30 border border-primary/10 max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-foreground">Pro Tip</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  The more details you provide, the better your AI-generated content will be!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recent Generations */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/50 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Recent Generations</h3>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-4 rounded-xl bg-gray-50 border border-border/50 hover:shadow-soft transition-all duration-300 cursor-pointer group">
              <div className="w-full h-20 rounded-lg bg-gradient-to-br from-baby-green to-primary/10 mb-3" />
              <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                Product Post #{i}
              </p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
