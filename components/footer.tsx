export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#d4af37]/20 mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0 motion-safe:animate-pulse [animation-duration:2.5s]">
                <span className="text-black font-bold text-sm">
                  <img src="/assets/coding.png" alt="logo" width={40} height={40} className="w-full h-full object-contain motion-safe:animate-bounce animation-duration-[2s]" />
                </span>
              </div>
              <span className="text-white font-bold text-sm sm:text-base">Ravi Azzura Putra</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">Backend | Express.js | Node.js | Laravel | Golang</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-base">Menu</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#d4af37] transition-colors">
                  Project
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#d4af37] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#leetcode" className="hover:text-[#d4af37] transition-colors">
                  LeetCode
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-base">Social</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/ravi-azzura-putra-92059227b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RaviAzzuraPutra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ravi.azzura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Stats */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-base">Stats</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                Experience: <span className="text-[#d4af37] font-semibold">3 Months</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs sm:text-sm">
            <p>&copy; {currentYear} Ravi Azzura Putra. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-6 sm:mt-8 text-center">
          <a
            href="#"
            className="inline-block px-3 sm:px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] rounded-lg hover:bg-[#d4af37]/20 transition-all duration-300 text-xs sm:text-sm motion-safe:animate-bounce [animation-duration:2.5s]"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}
