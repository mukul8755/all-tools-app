
import { FaUserCheck, FaArrowRight } from "react-icons/fa";

export default function GetStarted() {
   

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-10">
            {/* ✅ Hero Section */}
            <h1 className="text-5xl font-bold text-[#3498db] mb-4 text-center">
                Start Your Journey 🚀
            </h1>
            <p className="text-gray-600 text-lg mb-6 text-center max-w-xl">
                Join thousands of users leveraging our powerful online tools. Sign in to unlock all features and streamline your workflow.
            </p>

            {/* ✅ Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 max-w-3xl mb-8">
                <div className="flex items-center space-x-3">
                    <FaUserCheck className="text-[#3498db] text-2xl" />
                    <p className="text-lg font-medium">Secure & Fast Access</p>
                </div>
                <div className="flex items-center space-x-3">
                    <FaUserCheck className="text-[#3498db] text-2xl" />
                    <p className="text-lg font-medium">No Installation Required</p>
                </div>
                <div className="flex items-center space-x-3">
                    <FaUserCheck className="text-[#3498db] text-2xl" />
                    <p className="text-lg font-medium">100% Free & User-Friendly</p>
                </div>
                <div className="flex items-center space-x-3">
                    <FaUserCheck className="text-[#3498db] text-2xl" />
                    <p className="text-lg font-medium">Works on Any Device</p>
                </div>
            </div>

            {/* ✅ Login Button */}
            <button
                
                className="flex items-center bg-[#3498db] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#217dbb] transition-all shadow-md hover:shadow-lg"
            >
                Login to Continue <FaArrowRight className="ml-2" />
            </button>

            {/* ✅ Signup Link */}
            <p className="mt-6 text-gray-500 text-sm">
                Don&apos;t have an account?
                <a href="/signup" className="text-[#3498db] font-semibold hover:underline ml-1">Sign up here</a>.
            </p>
        </section>
    );
}
