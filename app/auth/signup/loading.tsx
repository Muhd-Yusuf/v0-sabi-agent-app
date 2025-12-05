export default function Loading() {
    return (
        <div className="space-y-6 animate-pulse">
            {/* Header skeleton */}
            <div className="text-center space-y-4">
                <div className="flex justify-center">
                    <div className="h-8 w-28 rounded-full bg-gray-200" />
                </div>
                <div className="h-10 w-3/4 mx-auto rounded-lg bg-gray-200" />
                <div className="h-5 w-2/3 mx-auto rounded-lg bg-gray-200" />
            </div>

            {/* Form skeleton */}
            <div className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                    <div className="h-4 w-20 rounded bg-gray-200" />
                    <div className="h-14 w-full rounded-xl bg-gray-200" />
                </div>
                {/* Email Field */}
                <div className="space-y-2">
                    <div className="h-4 w-28 rounded bg-gray-200" />
                    <div className="h-14 w-full rounded-xl bg-gray-200" />
                </div>
                {/* Password Field */}
                <div className="space-y-2">
                    <div className="h-4 w-20 rounded bg-gray-200" />
                    <div className="h-14 w-full rounded-xl bg-gray-200" />
                </div>
                {/* Confirm Password Field */}
                <div className="space-y-2">
                    <div className="h-4 w-32 rounded bg-gray-200" />
                    <div className="h-14 w-full rounded-xl bg-gray-200" />
                </div>
                {/* Terms checkbox */}
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-gray-200" />
                    <div className="h-4 w-3/4 rounded bg-gray-200" />
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
