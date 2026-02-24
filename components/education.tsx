export default function Education() {
    const items = [
        {
            year: "Sep 2021 - Nov 2025",
            title: "Bachelor of Computer Science",
            institution: "Universitas Komputer Indonesia",
        },
        {
            year: "Jul 2018 - Jun 2021",
            title: "Mathematics and Natural Sciences",
            institution: "Pasundan 1 Senior High School",
        },
    ]

    return (
        <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-[#d4af37]">02.</span> Education
                </h3>

                <div className="space-y-6 border-l-2 border-[#d4af37]/20 ml-3 pl-8 sm:pl-10 relative">
                    {items.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute w-4 h-4 bg-[#d4af37] rounded-full -left-[41px] sm:-left-[49px] top-1.5 border-4 border-[#1a1a1a]"></div>
                            <div>
                                <span className="text-[#d4af37] font-mono text-sm sm:text-base bg-[#d4af37]/10 px-2 py-1 rounded mb-2 inline-block">{item.year}</span>
                                <h4 className="text-[#d4af37] font-bold text-base sm:text-lg mb-1">{item.title}</h4>
                                <p className="text-gray-100 text-sm sm:text-base mb-3">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
