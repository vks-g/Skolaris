"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-10 border-b border-black">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          Skolaris
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 bg-black rounded-[30px] px-20 py-6">
          <Link href="/" className="font-medium text-white hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/courses" className="font-medium text-white hover:text-blue-400 transition">
            Courses
          </Link>
          <Link href="/my-learning" className="font-medium text-white hover:text-blue-400 transition">
            My Learning
          </Link>
        </nav>

        {/* Profile Picture (always visible) */}
        <div className="flex items-center">
          <Link href="/profile" className="ml-4">
            <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border-2 border-black flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover bg-white"
                />
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="ml-4 md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="font-medium text-black text-center border-b border-black hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="font-medium text-black text-center border-b border-black hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              All Courses
            </Link>
            <Link 
              href="/my-learning" 
              className="font-medium text-black text-center border-b border-black hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              My Learning
            </Link>
            <Link 
              href="/profile" 
              className="font-medium text-black text-center border-b border-black hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

