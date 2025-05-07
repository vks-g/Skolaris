'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Column 1: Logo and Description */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Skolaris</h2>
          <p className="text-gray-400">
            Empowering learners worldwide with top-notch educational resources and courses.
          </p>
        </div>

        {/* Columns 2–4 wrapped together */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-20 md:w-2/3">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition">All Courses</Link></li>
              <li><Link href="/my-learning" className="hover:text-blue-400 transition">My Learning</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition">FAQs</Link></li>
              <li><Link href="/support" className="hover:text-blue-400 transition">Support</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-white hover:bg-black hover:text-white text-black font-semibold px-4 py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Skolaris. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


  