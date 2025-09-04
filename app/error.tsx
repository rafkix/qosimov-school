"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
        {/* Error code animation */}
        <h1 className="text-9xl font-extrabold text-red-600 dark:text-red-500 tracking-widest animate-pulse">
            500
        </h1>

        {/* Animated text */}
        <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mt-4 animate-bounce">
            Serverda xatolik yuz berdi
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-md">
            Kechirasiz, sahifani yuklashda muammo yuz berdi. Iltimos, birozdan so‘ng qayta urinib ko‘ring.
        </p>

        {/* Retry button */}
        <button
            onClick={() => reset()}
            className="mt-6 px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors shadow-md"
        >
            Qayta urinib ko‘rish
        </button>
        </div>
    )
}
