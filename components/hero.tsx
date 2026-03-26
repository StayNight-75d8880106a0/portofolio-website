export default function Hero() {
  return (
    <section className="pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Ravi <span className="text-[#d4af37] motion-safe:animate-pulse">Azzura</span> Putra
            </h1>
            <p className="text-xl sm:text-2xl text-[#d4af37] font-light">Backend | Express.js | Node.js | Laravel | Golang</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#e8c547] transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300 text-center text-sm sm:text-base"
            >
              See Projects
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#d4af37]/20">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#d4af37] motion-safe:animate-pulse">3 Month</p>
              <p className="text-gray-400 text-xs sm:text-sm">Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-8 md:mt-0">
          <div className="aspect-square bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-lg border-2 border-[#d4af37]/30 flex items-center justify-center overflow-hidden relative">
            <div className="w-full h-full bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <img
                  src="/assets/diri-sendiri.jpg"
                  alt="Ravi Azzura Putra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#d4af37] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg text-sm sm:text-base motion-safe:animate-bounce [animation-duration:2s]">
            Available Now
          </div>
        </div>
      </div>
    </section>
  )
}
