import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Image
            src="/ai-logo.svg" // Replace with your logo path
            alt="AI Language Lessons Logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-xl font-bold text-gray-800">AI Language Lessons</h1>
        </div>
        {/* Navigation Links */}
        <nav className="flex gap-4">
          <a
            href="/login"
            className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-8 bg-gray-50">
        <div className="max-w-3xl">
          {/* Headline */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Learn Languages Faster with AI
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Personalized lessons, interactive exercises, and real-time feedback to help you master any language.
          </p>
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <a
              href="/dashboard"
              className="text-lg font-semibold text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Try Free Version
            </a>
            <a
              href="/learn-more"
              className="text-lg font-semibold text-gray-600 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-gray-400">
        <p>© 2024 AI Language Lessons. All rights reserved.</p>
      </footer>
    </div>
  );
}
