// components/Sidebar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaSearch, FaGithub, FaCaretDown, FaCaretRight, FaExternalLinkAlt } from 'react-icons/fa';

export default function Sidebar() {
  const [tutorialsExpanded, setTutorialsExpanded] = useState(true);
  const [howTosExpanded, setHowTosExpanded] = useState(false);
  const [apiReferenceExpanded, setApiReferenceExpanded] = useState(false);

  return (
    <div className="w-64 border-r border-gray-200 flex flex-col h-full">
      {/* Logo and Version */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center mb-2">
          <span className="text-lg font-medium">Dirac&apos;s</span>
          <span className="ml-2 text-gray-700">| Ecosystem</span>
        </div>
        <div className="text-sm">Dirac Antimatter 0.1.0</div>
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
            <Link href="/docs/overview" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/docs/getting-started" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
              Getting Started
            </Link>
          </li>
          <li>
            <Link href="/docs/installation" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
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
                  <Link href="/docs/tutorials/particle-simulation" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Particle Simulation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tutorials/antimatter-simulation" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Antimatter Simulation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tutorials/quantum-state-solvers" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Quantum State Solvers
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tutorials/excited-states" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Excited States
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tutorials/transforming-problems" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
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
            {howTosExpanded && (
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <Link href="/docs/how-tos/basic-simulation" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Basic Simulation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/how-tos/advanced-circuit" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Advanced Circuit Design
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div 
              className="flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
              onClick={() => setApiReferenceExpanded(!apiReferenceExpanded)}
            >
              <span>API Reference</span>
              {apiReferenceExpanded ? <FaCaretDown /> : <FaCaretRight />}
            </div>
            {apiReferenceExpanded && (
              <ul className="ml-4 mt-1 space-y-1">
                <li>
                  <Link href="/docs/api/core" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Core API
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api/simulation" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Simulation API
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api/utils" className="block px-3 py-1 text-sm hover:bg-gray-100 rounded">
                    Utilities
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/docs/release-notes" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">
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
  );
}