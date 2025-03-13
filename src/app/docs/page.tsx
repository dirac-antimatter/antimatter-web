// app/docs/page.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch, FaGithub, FaCaretDown, FaCaretRight, FaInfoCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function Documentation() {
  const [tutorialsExpanded, setTutorialsExpanded] = useState(true);
  const [howTosExpanded, setHowTosExpanded] = useState(false);
  const [apiReferenceExpanded, setApiReferenceExpanded] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col">
        {/* Logo and Version */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center mb-2">
            <span className="text-lg font-medium">Dirac&apos;s</span>
            <span className="ml-2 text-gray-700">| Antimatter</span>
          </div>
          <div className="text-sm">Version 0.1.0</div>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-gray-200">
          <div className="flex items-center px-2 py-1 bg-gray-100 rounded">
            <FaSearch className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent focus:outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            <li>
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
                Getting Started
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
                Installation Guide
              </Link>
            </li>
            <li>
              <div 
                className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => setTutorialsExpanded(!tutorialsExpanded)}
              >
                <span>Tutorials</span>
                {tutorialsExpanded ? <FaCaretDown /> : <FaCaretRight />}
              </div>
              {tutorialsExpanded && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    <Link href="#" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                      Particle Simulation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                      Antimatter Simulation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                      Quantum State Solvers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                      Excited States
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                      Transforming Problems
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div 
                className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => setHowTosExpanded(!howTosExpanded)}
              >
                <span>How-Tos</span>
                {howTosExpanded ? <FaCaretDown /> : <FaCaretRight />}
              </div>
            </li>
            <li>
              <div 
                className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => setApiReferenceExpanded(!apiReferenceExpanded)}
              >
                <span>API Reference</span>
                {apiReferenceExpanded ? <FaCaretDown /> : <FaCaretRight />}
              </div>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
                Release Notes
              </Link>
            </li>
          </ul>
        </nav>

        {/* GitHub and Language */}
        <div className="border-t border-gray-200 p-3">
          <Link href="https://github.com" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded">
            <FaGithub className="mr-2" />
            <span>GitHub</span>
            <FaExternalLinkAlt className="ml-1 text-xs" />
          </Link>
          <div className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer">
            <span>English</span>
            <FaCaretDown />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-medium mb-6">Dirac Antimatter Tutorials</h1>
        
        {/* Info Box */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-6">
          <div className="flex">
            <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
            <div>
              <p className="mb-2">
                On this page you find a number of tutorials covering various topics of Dirac Antimatter. 
                These are good references if you are just getting started with Dirac Antimatter.
              </p>
              <p className="mb-2">
                However, the code base provides a significant amount of functionality and advanced capability, 
                and these tutorials below do <span className="font-medium">not</span> cover usage of 
                <span className="font-medium"> all</span> of the features, at the different levels, that are available 
                in Dirac Antimatter. In fact, Dirac Antimatter is a very modular and flexible code, so if you really 
                want to learn more, we suggest that you explore the API reference and code directly.
              </p>
              <p>
                That said, if you learn about a feature which you think deserves its own tutorial, 
                feel free to add it to this list by <Link href="#" className="text-blue-600 hover:underline">opening a pull request</Link>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Second Info Box */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-8">
          <div className="flex">
            <FaInfoCircle className="text-blue-500 mt-1 mr-3" />
            <div>
              <p>
                If you are looking for more concise advice, check out the <Link href="#" className="text-blue-600 hover:underline">How-Tos</Link>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tutorial Card 1 */}
          <Link href="#" className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <Image 
                src="/particle-sim.png" 
                alt="Particle Simulation" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center text-blue-600">
              Particle Simulation
            </div>
          </Link>
          
          {/* Tutorial Card 2 */}
          <Link href="#" className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <Image 
                src="/antimatter-sim.png" 
                alt="Antimatter Simulation" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center text-blue-600">
              Antimatter Simulation
            </div>
          </Link>
          
          {/* Tutorial Card 3 */}
          <Link href="#" className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <Image 
                src="/quantum-solvers.png" 
                alt="Quantum State Solvers" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center text-blue-600">
              Quantum State Solvers
            </div>
          </Link>
          
          {/* Tutorial Card 4 */}
          <Link href="#" className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <Image 
                src="/excited-states.png" 
                alt="Excited States" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center text-blue-600">
              Excited States
            </div>
          </Link>
          
          {/* Tutorial Card 5 */}
          <Link href="#" className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <Image 
                src="/transform-problems.png" 
                alt="Transforming Problems" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center text-blue-600">
              Transforming Problems
            </div>
          </Link>
          
          {/* Tutorial Card 6 */}
          <Link href="#" className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <Image 
                src="/mapping.png" 
                alt="Mapping to Qubits" 
                width={150} 
                height={150}
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center text-blue-600">
              Mapping to Qubits
            </div>
          </Link>
          
          {/* Add more tutorial cards as needed */}
        </div>
      </div>
    </div>
  );
}