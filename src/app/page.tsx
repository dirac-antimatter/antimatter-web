'use client'
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaCopy, FaCheck } from 'react-icons/fa';               


  
  
  


export default function Welcome() {
  const [copied, setCopied] = useState(false);
  const copyCommand = () => {
    navigator.clipboard.writeText('pip install dirac-antimatter');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <main className="flex flex-col md:flex-row h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet"></link>
      <div style={{position: "relative", fontFamily: "EB Garamond"}} className="flex flex-col w-full md:w-1/2 h-full ">
  <div className="p-16 h-74">
  <div className="mb-6 text-black">
            <h1 className="text-5xl md:text-6xl font-light leading-tight m-0">Dirac&apos;s</h1>
            <h1 className="text-6xl md:text-8xl font-normal leading-tight m-0">Antimatter</h1>
          </div>
          <p className="text-xl text-gray-500 md:text-3xl leading-relaxed mb-8">
            py module for studying<br />
            anti-matter using quantum<br />
            computing.
          </p>
          <div className="mb-10">
            <div className="inline-block  px-4 py-3 font-mono text-base relative bg-black">
              pip install dirac-antimatter
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                onClick={copyCommand}
                aria-label="Copy pip install command"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
          </div>
          <div className="flex gap-4 mb-8">
            <a 
              href="#learn" 
              className="flex items-center justify-center px-6 py-3 text-base transition-colors bg-black"
            >
              Learn more
            </a>
            <a 
              href="https://github.com" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-base transition-colors"
            >
              <FaGithub className="text-lg" />
              Github
            </a>
          </div>
          <div className="bg-white text-black">
          <div className="bg-gray-50 rounded p-4 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="whitespace-pre mb-1">
              <span className="text-blue-600">from</span> antimatter_qchem <span className="text-blue-600">import</span> *
            </div>
            <div className="whitespace-pre mb-1">
              <span className="text-blue-600">def</span> hamiltonian_to_qiskit_operator():
            </div>
            <div className="whitespace-pre mb-1">
              <span className="text-green-600"># Create a simple system: hydrogen atom</span>
            </div>
            <div className="whitespace-pre mb-1">
              nuclei = [(<span className="text-red-600">&apos;H&apos;</span>, 1.0, np.array([0.0, 0.0, 0.0]))]
            </div>
            <div className="whitespace-pre mb-1">
              n_electrons = 1
            </div>
            <div className="whitespace-pre mb-1">
              n_positrons = 0
            </div>
            <div className="whitespace-pre mb-1">
            </div>
            <div className="whitespace-pre mb-1">
              <span className="text-green-600"># Create a Hamiltonian object</span>
            </div>
          </div>
          </div>
  </div>
  <div className="flex flex-col absolute top-1 left-2">
  <div className="mb-4">
            <p className="text-sm sm:text-sm md:text-md italic text-gray-500">Inspired by qiskit | Powered by qiskit</p>
          </div>
  </div>
</div>

      <div className="flex w-full md:w-1/2 h-1/2 md:h-full bg-white items-center justify-end">
        <Image
          className=" relative"
          src="/dirac.jpg"
          alt="Descriptive Alt Text"
          width={700}
          height={1000}
        />
      </div>
    </main>
  );
}