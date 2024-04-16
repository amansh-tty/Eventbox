// components/Header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div>
          <Link href="/" className="text-white text-lg font-bold">
          EventBox
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/events">
          Events
          </Link>
          <Link href="/categories">
          Categories
          </Link>
          <input
            type="text"
            placeholder="Search events"
            className="px-2 py-1 rounded border border-gray-600 focus:outline-none"
          />
        </nav>
        
        {/* Auth Links */}
        <div className="space-x-4">
          <Link href="/signup">
          Sign Up
          </Link>
          <Link href="/login">
          Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
