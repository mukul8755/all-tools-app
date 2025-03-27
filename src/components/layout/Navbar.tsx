'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Card className="fixed top-2 left-1 right-1 z-50 bg-white/30 backdrop-blur-md py-4 px-8 border-0 flex items-center justify-between gap-6 rounded-2xl shadow-lg transition-all duration-300">
            {/* Centering navbar content */}
            <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary">WebToolsPro</Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-6 text-gray-800">
                    <li className="relative text-sm font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300">
                        <a href="#home" className="block py-1 px-3">
                            Home
                        </a>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative text-sm font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300">
                        <a href="#features" className="block py-1 px-3">
                            Features
                        </a>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative text-sm font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300">
                        <a href="#pricing" className="block py-1 px-3">
                            Pricing
                        </a>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </li>

                    <li className="relative text-sm font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <span className="block py-1 px-3 cursor-pointer">
                                    Pages
                                </span>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="start" className="w-44 rounded-lg shadow-lg">
                                {landings.map((page) => (
                                    <DropdownMenuItem key={page.id} className="hover:bg-gray-100 transition-all duration-200">
                                        <Link href={page.route} className="w-full py-2 px-4">{page.title}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </ul>

                {/* Actions and Theme Toggle */}
                <div className="flex items-center gap-6">

                    <Button variant="primary" className="w-full text-sm py-2">Login</Button>


                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button
                            variant="outline"
                            className="p-2 rounded-md hover:bg-green-600 hover:text-white transition-all duration-300"
                            onClick={toggleMobileMenu}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bottom-5 bg-white/80 backdrop-blur-md py-4 px-6 shadow-lg rounded-b-lg z-50 transition-all duration-300">
                    <ul className="space-y-4 text-center text-gray-800">
                        <li>
                            <a href="#home" className="block py-2 text-sm">Home</a>
                        </li>
                        <li>
                            <a href="#features" className="block py-2 text-sm">Features</a>
                        </li>
                        <li>
                            <a href="#pricing" className="block py-2 text-sm">Pricing</a>
                        </li>
                        <li>
                            <Link href="/project-management" className="block py-2 text-sm">Landing 01</Link>
                        </li>
                        <li>
                            <Link href="/crm-landing" className="block py-2 text-sm">Landing 02</Link>
                        </li>
                    </ul>
                </div>
            )}
        </Card>
    );
};

const landings = [
    { id: nanoid(), title: "Landing 01", route: "/project-management" },
    { id: nanoid(), title: "Landing 02", route: "/crm-landing" },
];

export default Navbar;
