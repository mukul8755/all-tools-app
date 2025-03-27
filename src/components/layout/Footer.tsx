'use client'
export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white w-full py-8">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Company Info Section */}
                    <div className="space-y-4 flex justify-center flex-col items-center sm:items-start">
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <p className="text-sm text-gray-400 text-center sm:text-left">
                            We are a leading tech company providing cutting-edge solutions to help businesses grow.
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div className="space-y-4 flex justify-center flex-col items-center sm:items-start">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li><a href="#home" className="hover:text-blue-500 transition-all duration-300">Home</a></li>
                            <li><a href="#features" className="hover:text-blue-500 transition-all duration-300">Features</a></li>
                            <li><a href="#pricing" className="hover:text-blue-500 transition-all duration-300">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-blue-500 transition-all duration-300">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4 flex justify-center flex-col items-center sm:items-start">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li><a href="mailto:info@example.com" className="hover:text-blue-500 transition-all duration-300">info@example.com</a></li>
                            <li><a href="tel:+1234567890" className="hover:text-blue-500 transition-all duration-300">+1 (234) 567-890</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4 flex justify-center flex-col items-center sm:items-start">
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="flex gap-4 justify-center sm:justify-start">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                <i className="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
