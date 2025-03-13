// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="font-medium text-lg">
              Dirac&apos;s Antimatter
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/docs" className="text-gray-700 hover:text-gray-900">
              Documentation
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Examples
            </Link>
            <Link href="https://github.com" className="text-gray-700 hover:text-gray-900">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}