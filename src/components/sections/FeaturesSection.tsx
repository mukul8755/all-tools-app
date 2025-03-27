import { FaBolt, FaShieldAlt, FaGlobe, FaCloudUploadAlt, FaCheckCircle, FaUserFriends } from "react-icons/fa";

export default function FeaturesSection() {
    return (
        <section className="container mx-auto my-12 p-6">
            {/* ✅ Heading */}
            <h2 className="text-4xl font-bold text-[#3498db] mb-8 text-center">
                Why Choose Us?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                Experience <span className="font-semibold text-[#3498db]">fast, secure, and hassle-free</span> online tools.
                Whether you&apos;re converting files, optimizing images, or analyzing data, our services are **free, high-quality, and accessible**—right from your browser!
            </p>

            {/* ✅ Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">

                {/* ✅ Feature 1 */}
                <div className="flex items-center p-6 border border-[#3498db] rounded-lg shadow-md hover:shadow-xl hover:bg-[#3498db] hover:text-white transition-all">
                    <FaBolt className="text-[#3498db] text-4xl mr-4 group-hover:text-white" />
                    <div>
                        <h3 className="text-xl font-semibold">Blazing Fast</h3>
                        <p>Our tools process data instantly, saving you time.</p>
                    </div>
                </div>

                {/* ✅ Feature 2 */}
                <div className="flex items-center p-6 border border-[#3498db] rounded-lg shadow-md hover:shadow-xl hover:bg-[#3498db] hover:text-white transition-all">
                    <FaShieldAlt className="text-[#3498db] text-4xl mr-4 group-hover:text-white" />
                    <div>
                        <h3 className="text-xl font-semibold">100% Secure</h3>
                        <p>We prioritize security, ensuring your data stays private.</p>
                    </div>
                </div>

                {/* ✅ Feature 3 */}
                <div className="flex items-center p-6 border border-[#3498db] rounded-lg shadow-md hover:shadow-xl hover:bg-[#3498db] hover:text-white transition-all">
                    <FaGlobe className="text-[#3498db] text-4xl mr-4 group-hover:text-white" />
                    <div>
                        <h3 className="text-xl font-semibold">Works Anywhere</h3>
                        <p>Access our tools on any device, anytime.</p>
                    </div>
                </div>

                {/* ✅ Feature 4 */}
                <div className="flex items-center p-6 border border-[#3498db] rounded-lg shadow-md hover:shadow-xl hover:bg-[#3498db] hover:text-white transition-all">
                    <FaCloudUploadAlt className="text-[#3498db] text-4xl mr-4 group-hover:text-white" />
                    <div>
                        <h3 className="text-xl font-semibold">No Installation</h3>
                        <p>Use directly from your browser—no downloads needed.</p>
                    </div>
                </div>

                {/* ✅ Feature 5 */}
                <div className="flex items-center p-6 border border-[#3498db] rounded-lg shadow-md hover:shadow-xl hover:bg-[#3498db] hover:text-white transition-all">
                    <FaCheckCircle className="text-[#3498db] text-4xl mr-4 group-hover:text-white" />
                    <div>
                        <h3 className="text-xl font-semibold">100% Free</h3>
                        <p>Enjoy all features without any cost or hidden fees.</p>
                    </div>
                </div>

                {/* ✅ Feature 6 */}
                <div className="flex items-center p-6 border border-[#3498db] rounded-lg shadow-md hover:shadow-xl hover:bg-[#3498db] hover:text-white transition-all">
                    <FaUserFriends className="text-[#3498db] text-4xl mr-4 group-hover:text-white" />
                    <div>
                        <h3 className="text-xl font-semibold">User-Friendly</h3>
                        <p>Simple & intuitive tools, perfect for everyone.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
