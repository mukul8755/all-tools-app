'use client'
import { useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')

    return (
        <div className="bg-[#f7f7f7] text-gray-800 py-10 px-16 md:px-0">
            <div className="max-w-5xl mx-auto text-center">
                {/* Header */}
                <h2 className="text-2xl font-bold text-[#3498db] text-center">
                    Stay in the Loop with Our Newsletter
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
                    Receive the latest updates and offers directly to your inbox. No spam, just quality content.
                </p>

                {/* Input and Button Container */}
                <div className="flex justify-center items-center gap-4">
                    {/* Email Input */}
                    <input
                        type="email"
                        className="p-3 w-96 rounded-lg border-2 border-gray-300 focus:border-[#3498db] focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 transition-all duration-300"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Subscribe Button */}
                    <button
                        className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 
                            ${email ? 'bg-[#3498db] text-white hover:bg-[#2980b9]' : 'bg-gray-400 cursor-not-allowed'}`}
                        disabled={!email}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
