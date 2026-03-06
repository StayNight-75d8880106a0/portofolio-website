"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { leetcodeProblems } from "@/lib/leetcodeData"

export default function LeetCode() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const totalSolved = leetcodeProblems.length;
  const easyCount = leetcodeProblems.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = leetcodeProblems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = leetcodeProblems.filter((p) => p.difficulty === "Hard").length;

  const groupedByCategory: Record<string, typeof leetcodeProblems> = leetcodeProblems.reduce((acc, cur) => {
    if (!acc[cur.category]) acc[cur.category] = []
    acc[cur.category].push(cur)
    return acc
  }, {} as Record<string, typeof leetcodeProblems>)

  return (
    <section id="leetcode" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        LeetCode <span className="text-[#d4af37]">Solutions</span> ~ Problems Solved <span className="text-[#d4af37]">By Myself</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8 sm:mb-12"></div>

      <div className="space-y-6">
        {Object.keys(groupedByCategory).map((category) => (
          <div key={category} className="bg-transparent">
            <button
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
              className="group relative w-full flex items-center justify-between py-3 px-3 sm:px-4 bg-[#0f0f0f]/10 border border-[#d4af37]/20 rounded-md hover:bg-[#0f0f0f]/30 hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <span
                className={`absolute left-0 top-1/2 h-2/3 w-0.5 -translate-y-1/2 bg-[#d4af37] transition-all duration-300 ${openCategory === category
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100"
                  }`}
              />
              <div className="flex items-center gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">{category}</h3>
                <span className="text-xs text-gray-400">{groupedByCategory[category].length} problems</span>
              </div>
              <ChevronDown size={18} className={`text-[#d4af37] transition-transform ${openCategory === category ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`grid transition-all duration-500 ease-out ${openCategory === category ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
            >
              <div className="overflow-hidden">
                <div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {groupedByCategory[category].map((problem) => (
                  <div key={problem.id} className="bg-[#1a1a1a] border-2 border-[#d4af37]/20 rounded-lg overflow-hidden hover:border-[#d4af37] transition-all duration-300">
                    <button
                      onClick={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
                      aria-expanded={expandedId === problem.id}
                      className="w-full p-3 flex flex-col items-start gap-2 text-left"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <h4 className={`text-sm sm:text-base font-bold text-white flex-1 ${expandedId === problem.id ? "whitespace-normal" : "truncate"}`}>
                          {problem.title}
                        </h4>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap ${problem.difficulty === "Hard"
                            ? "bg-red-500/20 text-red-400"
                            : problem.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                            }`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>
                      <p className={`text-gray-400 text-xs sm:text-sm ${expandedId === problem.id ? "whitespace-normal break-words" : "line-clamp-3"}`}>
                        {problem.description}
                      </p>
                      <span className="text-xs px-2 py-0.5 bg-[#d4af37]/10 text-[#d4af37] rounded mt-2">{problem.category}</span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-out ${expandedId === problem.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-3 pb-3 border-t border-[#d4af37]/20 space-y-3">
                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm mt-2">Languages</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">{problem.language}</p>
                        </div>
                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Approach</h4>
                          <ul className="list-inside list-decimal text-gray-300 text-xs sm:text-sm space-y-1">
                            {problem.approach.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <h5 className="text-[#d4af37] text-xs sm:text-sm font-semibold">Time</h5>
                            <p className="text-gray-300 text-xs sm:text-sm font-mono">{problem.timeComplexity}</p>
                          </div>
                          <div>
                            <h5 className="text-[#d4af37] text-xs sm:text-sm font-semibold">Space</h5>
                            <p className="text-gray-300 text-xs sm:text-sm font-mono">{problem.spaceComplexity}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Unique Insight</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">{problem.uniqueInsight}</p>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Key Learning</h4>
                          <p className="text-gray-300 italic text-xs sm:text-sm">{problem.lesson}</p>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-1 text-xs sm:text-sm">Conclusion</h4>
                          <p className="text-gray-300 text-xs sm:text-sm">{problem.conclusion}</p>
                        </div>

                        <div>
                          <h4 className="text-[#d4af37] font-semibold mb-2 text-xs sm:text-sm">Solution Code</h4>
                          <pre className="bg-[#0f0f0f] p-2 sm:p-3 rounded overflow-x-auto text-xs sm:text-sm text-gray-300 border border-[#d4af37]/20">
                            <code>{problem.code}</code>
                          </pre>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
        <h3 className="text-[#d4af37] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">📊 ~LeetCode Stats~ 📊</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 text-center">
          {[
            { label: "Problems Solved By Myself", value: totalSolved },
            { label: "Easy", value: easyCount },
            { label: "Medium", value: mediumCount },
            { label: "Hard", value: hardCount },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl sm:text-2xl font-bold text-[#d4af37]">{stat.value}</p>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
