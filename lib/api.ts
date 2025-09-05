// src/lib/api.ts
const BASE_URL = "https://qosimov-school-backend.onrender.com/api"

// GET helper
async function apiGet<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: { Accept: "application/json" },
    })
    if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.status}`)
    return res.json()
}

// POST helper
async function apiPost<T>(endpoint: string, data: Record<string, any>): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!res.ok) {
        const text = await res.text()
        throw new Error(`POST ${endpoint} failed: ${res.status} - ${text}`)
    }
    return res.json()
}

export const api = {
    getTeachers: () => apiGet("/teachers/"),
    getCourses: () => apiGet("/courses/"),
    getCategories: () => apiGet("/categories/"),
    getTestimonials: () => apiGet("/testimonials/"),
    getCertificates: () => apiGet("/certificates/"),
    getActivities: () => apiGet("/activities/"),
    getContacts: () => apiGet("/contacts/"),
    createAdmission: (data: {
        first_name: string
        last_name: string
        email: string
        phone: string
        course: number
    }) => apiPost("/admissions/", data),
}
// src/components/sections/courses-section.tsx