"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <a href="/" className="text-white text-3xl font-extrabold tracking-wide drop-shadow-md">Jorawar's Portfolio</a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">Home</Link>
                    <Link href="/Projects" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">Projects</Link>
                    <Link href="/Skills" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">Skills</Link>
                    <Link href="/Details" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">Details</Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center mt-4 space-y-6 bg-white p-6 rounded-lg shadow-xl">
                    <Link href="/" className="text-indigo-600 text-lg font-semibold hover:text-indigo-800 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/Projects" className="text-indigo-600 text-lg font-semibold hover:text-indigo-800 transition duration-300" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/Skills" className="text-indigo-600 text-lg font-semibold hover:text-indigo-800 transition duration-300" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link href="/Details" className="text-indigo-600 text-lg font-semibold hover:text-indigo-800 transition duration-300" onClick={() => setIsOpen(false)}>Details</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;