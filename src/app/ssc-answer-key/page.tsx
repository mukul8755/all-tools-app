"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFileUpload, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

export default function AnswerKeyPage() {
    const router = useRouter();

    // Form state
    // const [sscUrl, setSscUrl] = useState("https://ssc.digialm.com//per/g27/pub/2207/touchstone/AssessmentQPHTMLMode1//2207O2418/2207O2418S6D189117/17098949028814825/3001013400_2207O2418S6D189117E1.html");
    const [sscUrl, setSscUrl] = useState("");
    const [category, setCategory] = useState("");
    const [gender, setGender] = useState("");
    const [horizontalCategory, setHorizontalCategory] = useState("none");
    const [password, setPassword] = useState("");

    // Handle form submission
    const fetchExamResults = () => {
        if (!sscUrl) {
            alert("⚠️ Please enter an Answer Key URL.");
            return;
        }
        router.push(`/results?sscUrl=${encodeURIComponent(sscUrl)}&category=${category}&gender=${gender}&horizontalCategory=${horizontalCategory}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6 py-12 mt-20">
            {/* ✅ Content Section */}
            <div className="text-center max-w-3xl mb-10">
                <FaFileUpload className="text-[#3498db] text-5xl mx-auto mb-3" />
                <h2 className="text-3xl font-bold text-[#3498db]">Upload Your Answer Key</h2>
                <p className="text-gray-600 text-lg">
                    Securely verify your <strong>exam results</strong> with our **trusted** answer key tool.
                </p>

                {/* ✅ Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mt-6">
                    <div className="flex items-center space-x-3">
                        <FaShieldAlt className="text-[#3498db] text-xl" />
                        <p>100% Secure & Private</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaCheckCircle className="text-[#3498db] text-xl" />
                        <p>Fast & Accurate Results</p>
                    </div>
                </div>
            </div>

            {/* ✅ Form Section */}
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
                <div className="space-y-4">
                    {/* 🔗 Answer Key URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Answer Key URL <span className="text-red-500">*</span></label>
                        <input
                            type="url"
                            value={sscUrl}
                            onChange={(e) => setSscUrl(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                            placeholder="Enter Answer Key URL"
                        />
                    </div>

                    {/* 📌 Category & Gender Selection */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                            >
                                <option value="">Choose</option>
                                <option value="UR">UR</option>
                                <option value="OBC">OBC</option>
                                <option value="EWS">EWS</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                            >
                                <option value="">Choose</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    {/* ♿ Horizontal Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Horizontal Category</label>
                        <select
                            value={horizontalCategory}
                            onChange={(e) => setHorizontalCategory(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                        >
                            <option value="none">None</option>
                            <option value="exsm">EX SM</option>
                            <option value="oh">OH</option>
                            <option value="vh">VH</option>
                            <option value="hh">HH</option>
                            <option value="other-pwd">Other PWD</option>
                        </select>
                    </div>

                    {/* 🔑 Password (Optional) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password (Optional)</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                            placeholder="Enter password"
                        />
                    </div>

                    {/* ✅ Submit Button */}
                    <button
                        onClick={fetchExamResults}
                        className="w-full py-3 font-semibold text-white bg-[#3498db] hover:bg-[#217dbb] rounded-md shadow-lg transition-all"
                    >
                        Submit & Check Results
                    </button>
                </div>
            </div>
        </div>
    );
}
