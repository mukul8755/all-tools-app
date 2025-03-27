"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import domtoimage from "dom-to-image";
import { useRouter } from "next/navigation";

interface ResultData {
    [section: string]: {
        correct: number;
        wrong: number;
        notAttempted: number;
        total: number;
    };
}

export default function ExamResults() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const sscUrl = searchParams.get("sscUrl") || "";
    const [resultData, setResultData] = useState<ResultData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch Exam Results when component mounts
    useEffect(() => {
        if (!sscUrl) return;
        fetchExamResults(sscUrl);
    }, [sscUrl]);

    // Function to fetch and process exam results
    const fetchExamResults = async (url: string) => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`/api/fetch-html?url=${encodeURIComponent(url)}`);
            if (!response.ok) throw new Error("Failed to fetch HTML content");

            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            processExamResults(doc);
        } catch (err) {
            setError("Error fetching exam results. Please check your URL.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Process HTML and extract results
    const processExamResults = (doc: Document) => {
        const sections = doc.querySelectorAll(".section-lbl");
        const results: ResultData = {};

        sections.forEach((section) => {
            const sectionNameElem = section.querySelector(".bold");
            if (!sectionNameElem) return;

            const sectionName = sectionNameElem.textContent?.trim() || "Unknown Section";
            results[sectionName] = { correct: 0, wrong: 0, notAttempted: 0, total: 0 };

            const questions = section.parentElement?.querySelectorAll(".question-pnl") || [];

            questions.forEach((question) => {
                let chosenOption: string | null = null;
                const chosenOptionRow = [...question.querySelectorAll(".menu-tbl td")].find((td) =>
                    td.textContent?.includes("Chosen Option")
                );

                if (chosenOptionRow && chosenOptionRow.nextElementSibling) {
                    chosenOption = chosenOptionRow.nextElementSibling.textContent?.trim() || "";
                }

                let correctAnswer: string | null = null;
                const correctOptionElement = question.querySelector(".rightAns");
                if (correctOptionElement) {
                    const match = correctOptionElement.textContent?.match(/\d+/);
                    correctAnswer = match ? match[0] : null;
                }

                results[sectionName].total++;

                if (!chosenOption || chosenOption === "--") {
                    results[sectionName].notAttempted++;
                } else if (chosenOption === correctAnswer) {
                    results[sectionName].correct++;
                } else {
                    results[sectionName].wrong++;
                }
            });
        });

        setResultData(results);
    };

    const downloadResults = () => {
        const element = document.getElementById("results-container");
        if (!element) {
            alert("No results available to download.");
            return;
        }

        // ✅ Apply Grayscale (Black & White Mode)
        element.style.filter = "grayscale(100%)";

        domtoimage.toPng(element)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "SSC_Exam_Results.png";
                link.click();

                // ✅ Remove Grayscale After Capturing
                element.style.filter = "none";
            })
            .catch((error) => {
                console.error("Image Download Error:", error);
                alert("Failed to download the results as an image.");
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8 mt-20">
            <h2 className="text-3xl font-bold text-[#3498db] mb-4 text-center">Your Exam Results</h2>

            {loading && (
                <div className="text-lg text-gray-600 flex items-center space-x-1">
                    <div className="animate-spin rounded-full h-6 w-6 border-4 border-blue-500 border-t-transparent"></div>
                    <span>Fetching results...</span>
                </div>
            )}

            {error && <p className="text-red-500">{error}</p>}

            {resultData && (
                <div id="results-container" className="w-full max-w-2xl bg-white p-6 shadow-lg rounded-lg mt-6">
                    {/* ✅ Overall Summary */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Overall Summary</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <StatCard title="Total" value={getTotal("total")} color="gray" />
                            <StatCard title="✅ Correct" value={getTotal("correct")} color="green" />
                            <StatCard title="❌ Wrong" value={getTotal("wrong")} color="red" />
                            <StatCard title="⚠️ Not Attempted" value={getTotal("notAttempted")} color="yellow" />
                        </div>
                    </div>

                    {/* ✅ Section-wise Results */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.keys(resultData).map((section) => (
                            <div key={section} className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                                <h4 className="text-md font-semibold text-green-700">{section}</h4>
                                <p className="text-gray-600 text-xs mt-2">Total: <b>{resultData[section].total}</b></p>

                                <StatCard title="✅ Correct" value={resultData[section].correct} color="green" />
                                <StatCard title="❌ Wrong" value={resultData[section].wrong} color="red" />
                                <StatCard title="⚠️ Not Attempted" value={resultData[section].notAttempted} color="yellow" />
                            </div>
                        ))}
                    </div>

                    {/* ✅ Download & Refresh Buttons */}
                    <div className="flex justify-center space-x-4 mt-6">
                        <button
                            onClick={downloadResults}
                            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
                        >
                            Download Results
                        </button>
                        <button
                            onClick={() => router.push("/ssc-answer-key")}
                            className="px-4 py-2 text-sm bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all"
                        >
                            Upload Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    function getTotal(type: "correct" | "wrong" | "notAttempted" | "total") {
        return resultData ? Object.values(resultData).reduce((sum, section) => sum + section[type], 0) : 0;
    }
}

// ✅ Reusable Stats Card Component
function StatCard({ title, value, color }: { title: string; value: number; color: string }) {
    return (
        <div className={`p-3 bg-${color}-100 shadow-md rounded-md text-center`}>
            <p className={`text-xs font-medium text-${color}-600`}>{title}</p>
            <p className={`text-lg font-bold text-${color}-700`}>{value}</p>
        </div>
    );
}
