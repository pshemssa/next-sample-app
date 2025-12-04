"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to My Next.js Project
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A comprehensive blog application showcasing CSR, SSR, SSG, and ISR rendering techniques
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 inline-block">
          <p className="text-xl text-gray-500 mb-2">Live Clock</p>
          <p className="text-3xl font-mono font-bold text-blue-600">{time}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Learn About Me
          </a>
          <a href="/blog" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Read Blog Posts
          </a>
        </div>
      </div>
    </div>
  );
}