export default function Quotes() {
  const quotes = [
    {
      text: "There is only one thing more painful than learning from experience and that is not learning from experience.",
      author: "Archibald McLeish",
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
    },
    {
      text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      author: "Patrick McKenzie",
    },
    {
      text: "Programming isn’t about what you know; it’s about what you can figure out.",
      author: "Chris Pine",
    },
    {
      text: "No matter which field of work you want to go in, it is of great importance to learn at least one programming language",
      author: "Ram Ray",
    },
    {
      text: "I don't care if it works on your machine! We are not shipping your machine!",
      author: "Vidiu Platon",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
        ’Developer <span className="text-[#d4af37]">Quotes’</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-8 sm:mb-12 motion-safe:animate-pulse"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <p className="text-[#d4af37] text-2xl sm:text-3xl mb-3 sm:mb-4 motion-safe:animate-bounce [animation-duration:2s]">❝</p>
              <p className="text-white text-sm sm:text-base leading-relaxed mb-4 italic">{quote.text}</p>
            </div>
            <div className="border-t border-[#d4af37]/20 pt-4">
              <p className="text-[#d4af37] font-semibold text-xs sm:text-sm">{quote.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
