"use client"

import { useState } from "react"

interface ContentPreviewProps {
  content: {
    caption: string
    hashtags: string[]
    thumbnail: string
  }
}

export default function GeneratedContentPreview({ content }: ContentPreviewProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Success Banner */}
      <div className="p-4 rounded-xl bg-green-50 border border-green-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-green-800">Content generated successfully!</p>
          <p className="text-xs text-green-600">1 credit used • Ready to publish</p>
        </div>
      </div>

      {/* Preview Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-border/50 shadow-soft overflow-hidden">
        {/* Mock Phone/Device Frame */}
        <div className="bg-gray-100 p-4 sm:p-6">
          <div className="max-w-sm mx-auto">
            {/* Instagram-style post preview */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="flex items-center gap-3 p-3 border-b border-border/50">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80" />
                <div>
                  <p className="text-xs font-semibold text-foreground">your_business</p>
                  <p className="text-[10px] text-muted-foreground">Sponsored</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>

              {/* Image placeholder */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-baby-green via-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">Your product image here</p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-3 flex items-center gap-4">
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <svg className="w-6 h-6 text-foreground ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>

              {/* Caption Preview */}
              <div className="px-3 pb-3">
                <p className="text-xs text-foreground line-clamp-2">
                  <span className="font-semibold">your_business</span>{" "}
                  {content.caption.split('\n')[0]}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/50 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-foreground">Caption</span>
          </div>
          <button
            onClick={() => copyToClipboard(content.caption, 'caption')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${copied === 'caption'
                ? 'bg-green-100 text-green-600'
                : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
          >
            {copied === 'caption' ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-sm text-foreground whitespace-pre-line max-h-48 overflow-y-auto border border-border/50">
          {content.caption}
        </div>
      </div>

      {/* Hashtags */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/50 shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">#</span>
            </div>
            <span className="text-sm font-semibold text-foreground">Hashtags</span>
          </div>
          <button
            onClick={() => copyToClipboard(content.hashtags.join(" "), 'hashtags')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${copied === 'hashtags'
                ? 'bg-green-100 text-green-600'
                : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
              }`}
          >
            {copied === 'hashtags' ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy All
              </>
            )}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.hashtags.map((tag, index) => (
            <button
              key={index}
              onClick={() => copyToClipboard(tag, `tag-${index}`)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${copied === `tag-${index}`
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-border/50 shadow-soft text-center">
          <p className="text-2xl font-bold text-foreground">{content.caption.split(" ").length}</p>
          <p className="text-xs text-muted-foreground">Words</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-border/50 shadow-soft text-center">
          <p className="text-2xl font-bold text-primary">{content.hashtags.length}</p>
          <p className="text-xs text-muted-foreground">Hashtags</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-border/50 shadow-soft text-center">
          <p className="text-2xl font-bold text-foreground">{content.caption.length}</p>
          <p className="text-xs text-muted-foreground">Characters</p>
        </div>
      </div>
    </div>
  )
}
