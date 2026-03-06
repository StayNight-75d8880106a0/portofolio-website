"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { projectsData } from "@/lib/projectsData"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        My <span className="text-[#d4af37]">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300"
          >
            <div className="p-4 sm:p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpandedId(expandedId === project.id ? null : project.id)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="inline-block px-2 py-0.5 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full mb-2">
                    {project.category}
                  </div>
                  <h3 className={`text-sm sm:text-lg font-bold text-white break-words ${expandedId === project.id ? "whitespace-normal" : "truncate"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-gray-400 text-xs sm:text-sm ${expandedId === project.id ? "whitespace-normal break-words" : "truncate"}`}>
                    {project.associated}
                  </p>
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className={`text-[#d4af37] transition-transform duration-500 ease-out flex-shrink-0 mt-1 ${expandedId === project.id ? "rotate-90" : ""
                    }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div
                className={`grid transition-all duration-500 ease-out ${expandedId === project.id ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 pt-3 border-t border-[#d4af37]/20">
                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Project Type</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.projectType}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Date</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.date}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Problems</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Solutions</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-xs font-medium rounded border border-[#d4af37]/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Repository</h4>
                    {project.repository && project.repository !== "-" ? (
                      <a href={project.repository} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline break-all text-xs sm:text-sm transition-colors">
                        {project.repository}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-xs sm:text-sm">Private Repository / Not Available</p>
                    )}
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
