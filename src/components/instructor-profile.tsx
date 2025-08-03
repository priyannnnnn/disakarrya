import type { InstructorType } from "@/lib/data"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, Award, CheckCircle, Star, Globe, Users, ExternalLink } from "lucide-react"

interface InstructorProfileProps {
  instructor: InstructorType
}

export default function InstructorProfile({ instructor }: InstructorProfileProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start space-x-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={instructor.photo || "/placeholder.svg"} alt={instructor.name} />
          <AvatarFallback className="text-xl">
            {instructor.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
          <p className="text-[#4597A7] font-semibold mb-2">{instructor.position}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {instructor.certifications.map((cert: string, idx: number) => (
              <Badge key={idx} className="bg-[#4597A7]/10 text-[#4597A7]">
                {cert}
              </Badge>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {instructor.experience}
            </span>
            <span className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              {instructor.education}
            </span>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">📚 Pengalaman Profesional</h4>
        <div className="space-y-2">
          {instructor.workHistory.map((work: string, idx: number) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4597A7] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{work}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialties */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">🛠️ Keahlian Utama</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {instructor.specialties.map((specialty: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-[#4597A7]" />
              <span className="text-gray-700">{specialty}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">🎓 Pendidikan & Sertifikasi</h4>
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <Award className="h-5 w-5 text-[#4597A7] mt-0.5" />
            <span className="text-gray-700">{instructor.education}</span>
          </div>
          {instructor.additionalCerts.map((cert: string, idx: number) => (
            <div key={idx} className="flex items-start space-x-3">
              <Award className="h-5 w-5 text-[#4597A7] mt-0.5" />
              <span className="text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">🏆 Karya & Proyek</h4>
        <div className="space-y-2">
          {instructor.projects.map((project: string, idx: number) => (
            <div key={idx} className="flex items-start space-x-3">
              <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{project}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Links */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">🔗 Portofolio</h4>
        <div className="flex flex-wrap gap-4">
          <a
            href={`https://${instructor.portfolio}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#4597A7] hover:underline"
          >
            <Globe className="h-4 w-4" />
            <span>{instructor.portfolio}</span>
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={`https://${instructor.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#4597A7] hover:underline"
          >
            <Users className="h-4 w-4" />
            <span>LinkedIn</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
