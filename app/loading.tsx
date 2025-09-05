// app/loading.tsx
"use client"

import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100">
      <div className="flex flex-col items-center gap-6 animate-pulse">
        {/* Spinner */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-full border-4 border-emerald-200 animate-ping" />
          <Loader2 className="h-14 w-14 animate-spin text-emerald-600 relative z-10" />
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="text-xl font-semibold text-slate-800">Yuklanmoqda...</p>
          <p className="text-sm text-slate-500">Iltimos, biroz kutib turing</p>
        </div>
      </div>
    </div>
  )
}
