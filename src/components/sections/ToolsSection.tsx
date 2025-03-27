import { tools } from '@/constants/tools';
import Link from 'next/link';
import { FaTools, FaStar } from "react-icons/fa"; // Icons

// ✅ Pick the newest tool
const newTool = tools[0]; // Assumes the first tool is the newest one

export default function ToolsSection() {
    return (
        <section className="container mx-auto my-12 px-6">
            {/* ✅ Heading */}
            <h2 className="text-4xl font-bold text-[#3498db] mb-8 text-center">
                Explore Our Powerful Tools
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                Discover a variety of <strong>fast, efficient, and easy-to-use</strong> tools designed to help you with
                <strong> file conversions, image optimization, text analysis, and more</strong>. No installations required—just use online!
            </p>

            {/* ✅ Featured New Tool */}
            <div className="bg-[#3498db] text-white p-6 rounded-lg mb-10 shadow-lg flex items-center">
                <FaStar className="text-yellow-400 text-4xl mr-4" />
                <div>
                    <h3 className="text-2xl font-bold">New Tool: {newTool.name}</h3>
                    <p className="mt-2">{newTool.description}</p>
                    <Link href={newTool.link} className="inline-block mt-3 px-5 py-2 bg-white text-[#3498db] rounded-md font-medium hover:bg-gray-200 transition">
                        Try Now →
                    </Link>
                </div>
            </div>

            {/* ✅ Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool) => (
                    <Link key={tool.name} href={tool.link} className="group">
                        <div className="border border-[#3498db] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                            {/* ✅ Tool Header with Icon */}
                            <div className="flex items-center bg-[#3498db] text-white p-4 font-semibold text-lg">
                                <FaTools className="text-xl mr-3" />
                                {tool.name}
                            </div>

                            {/* ✅ Tool Description */}
                            <div className="p-6 bg-white group-hover:bg-[#3498db] group-hover:text-white transition-all duration-300">
                                <p className="text-gray-700 group-hover:text-white">
                                    {tool.description}
                                </p>
                                {/* ✅ Learn More Button */}
                                <div className="mt-4">
                                    <span className="inline-block px-4 py-2 text-sm font-medium text-[#3498db] border border-[#3498db] rounded-md transition-all group-hover:bg-white group-hover:text-[#3498db]">
                                        Learn More →
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
