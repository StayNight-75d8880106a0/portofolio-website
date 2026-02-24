export default function WorkExperience() {
    const items = [
        {
            year: "Dec 2025 - Dec 2025",
            title: "Project-Based Virtual Intern: Backend Developer Evermos x Rakamin ",
            company: "Evermos x Rakamin Academy",
            desc: [
                "Developed a social commerce backend platform using Golang, Fiber, and Clean Architecture, to isolate business logic from infrastructure, reducing feature-change complexity and enabling independent scaling of authentication and transaction modules.",
                "Streamlined the reseller onboarding process by automating store creation during user registration, utilizing JWT-based authentication and secure password hashing to ensure immediate platform access and data consistency.",
                "Built complete product, category, and transaction management workflows, including backend-driven stock validation and pricing logic, which ensured transactional integrity and prevented data manipulation at the API level.",
                "Improved system maintainability and code clarity by utilizing the Repository Pattern with MySQL (GORM), successfully separating data access layers from the core business logic to facilitate easier expansion of future features.",
                "The internship emphasizes problem-driven design, independent decision-making, and critical assessment rather than routine tasks, aligning closely with applied research practices.",
            ],
        },
        {
            year: "Jul 2024 - Sep 2024",
            title: "Full Stack Developer Intern",
            company: "PT. Motiolabs Digital Indonesia",
            desc: [
                "Developed and maintained the Masj.id CMS using Laravel and MySQL within an MVC architecture, ensuring a scalable and structured codebase for religious management services.",
                "Coordinated with the development team using GitLab for efficient version management and project collaboration.",
                "Improving the time efficiency of mosque administrators in managing and disseminating information by 88% through the digitization of activity agendas and public services.",
                "Strengthening the company's digital transformation solutions portfolio in the house of worship management sector by validating product readiness for market expansion, through the development of the Masj.id Content Management System application that automates information management and integrated digital services.",
                "Through this internship, I developed a comprehensive understanding of full-stack web application development as an integrated engineering process rather than isolated technical tasks. The experience strengthened my ability to translate system requirements into structured application logic, balance backend functionality with user interface considerations, and apply version control as a collaborative governance mechanism within a development team. This internship reinforced the importance of maintainability, code structure, and teamwork as foundational principles in sustainable software development.",
            ],
        },
    ]

    return (
        <section id="work-experience" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-[#d4af37]">01.</span> Work Experience
                </h3>

                <div className="space-y-6 border-l-2 border-[#d4af37]/20 ml-3 pl-8 sm:pl-10 relative">
                    {items.map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute w-4 h-4 bg-[#d4af37] rounded-full -left-[41px] sm:-left-[49px] top-1.5 border-4 border-[#1a1a1a]"></div>
                            <div>
                                <span className="text-[#d4af37] font-mono text-sm sm:text-base bg-[#d4af37]/10 px-2 py-1 rounded mb-2 inline-block">{item.year}</span>
                                <h4 className="text-white font-bold text-base sm:text-lg mb-1">{item.title}</h4>
                                <p className="text-gray-100 text-sm sm:text-base mb-3">{item.company}</p>
                                <ul className="list-disc list-outside ml-4 text-gray-100 text-sm sm:text-base space-y-1 text-justify marker:text-[#d4af37]">
                                    {item.desc.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
