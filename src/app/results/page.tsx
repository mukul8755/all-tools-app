"use client";  // ✅ Forces Client-Side Rendering (CSR)

import { Suspense,} from "react";
import ExamResults from "./ExamResults";

export default function ResultsPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <ExamResults />
        </Suspense>
    );
}

// ✅ Loading Spinner Component
function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
    );
}