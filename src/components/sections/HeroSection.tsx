'use client'

export default function HeroSection() {
    return (
        <section className="relative bg-white overflow-hidden mt-10">
            <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="space-y-6">
                        <div className="bg-[#e9f1f7] inline-block px-4 py-2 rounded-full text-[#3498db] font-medium text-sm">
                            Next-Gen Conversion Platform
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] leading-tight">
                            Effortless File Conversion
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Transform your digital workflow with our intelligent file conversion tools. Seamless, secure, and lightning-fast processing for all your document needs.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="#get-started"
                                className="inline-block px-8 py-3 bg-[#3498db] text-white font-semibold rounded-lg shadow-md hover:bg-[#2980b9] transition-colors duration-300"
                            >
                                Get Started
                            </a>
                            <a
                                href="#learn-more"
                                className="inline-block px-8 py-3 border-2 border-[#3498db] text-[#3498db] font-semibold rounded-lg hover:bg-[#3498db] hover:text-white transition-colors duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Illustration Section */}
                    <div className="hidden md:flex justify-center items-center">
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-4 bg-[#e9f1f7] rounded-2xl blur-2xl opacity-50"></div>
                            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg p-6">
                                <div className="grid grid-cols-3 gap-4">
                                    {['PDF', 'DOCX', 'JPG', 'PNG', 'XLSX', 'MP4'].map((format, index) => (
                                        <div
                                            key={format}
                                            className="bg-[#f4f7f6] rounded-lg p-4 text-center hover:bg-[#e9f1f7] transition-colors"
                                        >
                                            <div className="text-lg font-bold text-[#3498db]">{format}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <div className="inline-block bg-[#3498db] text-white px-6 py-2 rounded-full">
                                        Convert
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}