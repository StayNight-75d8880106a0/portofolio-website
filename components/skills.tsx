export default function Skills() {
  const hardSkills = [
    { category: "Languages", skills: ["JavaScript", "Go", "PHP"] },
    { category: "Backend Frameworks", skills: ["Node.js/Express", "Gin", "Fiber", "Laravel", "Next.js"] },
    { category: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
    { category: "Cloud & DevOps", skills: ["Docker", "CI/CD (GitHub Actions)"] },
    { category: "Messaging & Streaming", skills: ["Kafka"] },
    { category: "Concepts", skills: ["RESTful API", "Containerization", "Authentication", "JWT", "Monolithic Architecture", "MVC", "Microservices", "Database Cluster Master Slave Architecture"] },
    { category: "Tools & Platforms", skills: ["Git", "Postman", "Visual Studio Code", "GitHub", "Swagger"] },
  ]

  const softSkills = [
    "System Design",
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Documentation Writing",
    "Easily Adaptable",
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        <span className="text-[#d4af37]">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Hard Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Hard Skills</h3>
          <div className="grid gap-4 sm:gap-5">
            {hardSkills.map((item) => (
              <div
                key={item.category}
                className="rounded-xl border border-[#d4af37]/25 bg-[#151515] p-4 sm:p-5 hover:border-[#d4af37]/45 hover:bg-[#1a1a1a] transition-all duration-300"
              >
                <h4 className="text-[#d4af37] font-semibold mb-3 text-sm sm:text-base tracking-wide">{item.category}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-3.5 py-1.5 bg-[#d4af37]/10 text-[#f3d982] rounded-md border border-[#d4af37]/30 text-xs sm:text-sm font-medium leading-none hover:bg-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="p-3 sm:p-4 bg-[#1a1a1a] border border-[#d4af37]/30 rounded-lg text-center hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300"
              >
                <p className="text-white font-semibold text-xs sm:text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
