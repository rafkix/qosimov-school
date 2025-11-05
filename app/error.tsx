"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    console.error(error)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background text-foreground animate-fade-in">
        
        <div className="relative">
            <h1 className="text-[120px] font-bold leading-none text-red-600 dark:text-red-500 drop-shadow-lg">
            500
            </h1>

            <span className="absolute inset-0 blur-3xl opacity-40 bg-red-500 dark:bg-red-400 rounded-full scale-150" />
        </div>

        <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Serverda kutilmagan xatolik yuz berdi. Ehtimol, vaqtinchalik nosozlik.
        </p>

        <button
            onClick={() => reset()}
            className="mt-8 px-6 py-2 rounded-lg font-medium border border-red-500 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200"
        >
            Qayta urinib ko‘rish
        </button>
        </div>
    )
}
