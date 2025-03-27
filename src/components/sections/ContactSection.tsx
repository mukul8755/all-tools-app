import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    return (
        <section className="container mx-auto my-12 px-6">
            {/* ✅ Page Heading */}
            <h2 className="text-4xl font-bold text-[#3498db] mb-6 text-center">
                Get in Touch
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                Have any questions or need support? Fill out the form below, and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* ✅ Contact Info Section */}
                <div className="space-y-6">
                    <div className="flex items-center">
                        <FaPhoneAlt className="text-[#3498db] text-2xl mr-4" />
                        <p className="text-gray-700">+1 (555) 123-4567</p>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-[#3498db] text-2xl mr-4" />
                        <p className="text-gray-700">support@example.com</p>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-[#3498db] text-2xl mr-4" />
                        <p className="text-gray-700">123 Main Street, City, Country</p>
                    </div>
                </div>

                {/* ✅ Contact Form */}
                <form className="space-y-6 bg-white shadow-lg p-6 rounded-lg border border-gray-300">
                    <div>
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-[#3498db]" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Email Address</label>
                        <input type="email" placeholder="example@email.com" className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-[#3498db]" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Message</label>
                        <textarea rows={4} placeholder="Write your message here..." className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-[#3498db]"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#3498db] text-white p-3 rounded-lg font-semibold hover:bg-[#217dbb] transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
