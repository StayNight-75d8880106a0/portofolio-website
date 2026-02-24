import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        About <span className="text-[#d4af37]">Me:</span>
      </h2>
      <div className="w-16 h-1 bg-[#d4af37] mb-8"></div>

      <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base text-justify">
        <p>
          Backend Developer focused on building production-grade APIs using Golang and Node.js.
          Hands-on experience designing clean architectures, enforcing data integrity at the API level,
          and shipping systems that support real operational workflows. Experienced in SQL/NoSQL databases,
          Docker, and integrating external and AI-based services via APIs. Trained through intensive backend
          programs including MSIB Backend Developer Bootcamp Batch 6 (Gamelab.id) and
          Sanbercode Golang Bootcamp, and holds a Junior Web Developer certification (BNSP). Excited to use my skills in the tech field and committed to continuous learning.
        </p>

        <p>
          <span className="text-[#d4af37] font-semibold">Outside of coding,</span> I like reading books, watching anime, and playing Honkai Star Rail.
        </p>

        <div className="pt-3">
          <h3 className="text-[#d4af37] font-semibold mb-3">Training & Certification:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
            <li className="flex items-start gap-3 group">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <Link href="https://drive.google.com/drive/folders/1rlQJ69ivdHFHMa6nr8LjpgRd-YnZ4hIE?usp=drive_link" className="block leading-tight">
                <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Backend Developer Bootcamp</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-400">Gamelab.id (MSIB Batch 6)</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-500">Feb 2024 - Jun 2024</span>
                <span className="text-[#d4af37] ml-1.5 font-medium">(Training)</span>
              </Link>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <Link href="https://drive.google.com/drive/folders/1S8kr2D8oQ5zDHrvTMjAd9UtbqkljkEZ-?usp=drive_link" className="block leading-tight">
                <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Junior Web Developer</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-400">Badan Nasional Sertifikasi Profesi (BNSP)</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-500">Mar 2025</span>
                <span className="text-[#d4af37] ml-1.5 font-medium">(Certification)</span>
              </Link>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <Link href="https://drive.google.com/drive/folders/1qUy0i13FiyhnYlOHYbZ7w31qfVx7aqgK?usp=sharing" className="block leading-tight">
                <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">TOEFL</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-400">Indonesia Computer University (Score: 473)</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-500">Nov 2024 - Nov 2026</span>
                <span className="text-[#d4af37] ml-1.5 font-medium">(Certification)</span>
              </Link>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <Link href="https://drive.google.com/drive/folders/1CNCiGBxTOblMsfmUj0GVxGTzFNpsqmQZ?usp=sharing" className="block leading-tight">
                <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Golang Backend Development</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-400">Sanbercode</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-500">Dec 2025 - Jan 2026</span>
                <span className="text-[#d4af37] ml-1.5 font-medium">(Training)</span>
              </Link>
            </li>
            <li className="flex items-start gap-3 group">
              <span className="text-[#d4af37] mt-0.5">→</span>
              <Link href="https://drive.google.com/drive/folders/19z1JBkNuNv51aCdMfYGKaB2ZmUxSTn9t?usp=sharing" className="block leading-tight">
                <span className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Backend Developer Internship</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-400">Evermos x Rakamin Academy</span>
                <span className="text-[#d4af37] mx-1.5">–</span>
                <span className="text-gray-500">Dec 2025 - Dec 2025</span>
                <span className="text-[#d4af37] ml-1.5 font-medium">(Internship)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
