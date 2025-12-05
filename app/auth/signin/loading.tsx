export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="h-8 w-32 rounded-full bg-gray-200" />
        </div>
        <div className="h-10 w-3/4 mx-auto rounded-lg bg-gray-200" />
        <div className="h-5 w-1/2 mx-auto rounded-lg bg-gray-200" />
      </div>

      {/* Form skeleton */}
      <div className="space-y-5">
        {/* Field 1 */}
        <div className="space-y-2">
          <div className="h-4 w-24 rounded bg-gray-200" />
          <div className="h-14 w-full rounded-xl bg-gray-200" />
        </div>
        {/* Field 2 */}
        <div className="space-y-2">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-14 w-full rounded-xl bg-gray-200" />
        </div>
        {/* Button */}
        <div className="h-14 w-full rounded-xl bg-gray-200" />
      </div>

      {/* Divider skeleton */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Social button skeleton */}
      <div className="h-14 w-full rounded-xl bg-gray-200" />

      {/* Link skeleton */}
      <div className="flex justify-center">
        <div className="h-4 w-48 rounded bg-gray-200" />
      </div>
    </div>
  )
}
