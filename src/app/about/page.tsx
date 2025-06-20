import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { MapPin, Phone, Mail, Award, Users, BookOpen } from "lucide-react"

const professionalRoles = [
  {
    title: "Head, Technical Infrastructure & Internet Services",
    organization: "Kenneth Dike Library, University of Ibadan",
    period: "Current",
    description:
      "Leading technical infrastructure development, managing library automation systems, and overseeing digital library initiatives.",
  },
  {
    title: "Library Webmaster & Digital Library Developer",
    organization: "Kenneth Dike Library, University of Ibadan",
    period: "Current",
    description:
      "Developing integrated library management systems, institutional repositories, and digital library platforms.",
  },
  {
    title: "Principal Consultant",
    organization: "MP3 MULTI-SYSTEMS KONCEPT",
    period: "Current",
    description:
      "Providing specialized consulting services in library automation, digital systems, and IT infrastructure.",
  },
]

const technicalSkills = [
  "Archives and Record Management",
  "Computer Engineering & Network Services",
  "Linux GUI Administration",
  "Linux Server Administration (CLI)",
  "Oracle Database Administration",
  "Web Development & Administration",
  "SUN SOLARIS Administration",
  "L.A.M.P. Stack Administration",
  "Application & Content Development",
  "Library Automation Systems",
  "Digital Repository Management",
  "Network Infrastructure Design",
]

const professionalMemberships = [
  {
    role: "Vice-President",
    organization: "Library Officers Association of Nigeria (LOAN)",
    icon: <Users className="h-5 w-5" />,
  },
  {
    role: "Member",
    organization: "Nigerian Network Operators Group (ngNog)",
    icon: <Users className="h-5 w-5" />,
  },
  {
    role: "National General Secretary",
    organization: "Information Technology Section, Nigerian Library Association",
    icon: <Award className="h-5 w-5" />,
  },
  {
    role: "Former P.R.O.",
    organization: "Nigerian Library Association (NLA) Oyo State Chapter",
    icon: <Users className="h-5 w-5" />,
  },
]

const contactInfo = [
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Phone",
    value: "08129492662, 08133972622",
    href: "tel:+2348129492662",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "uzo123ng@gmail.com",
    href: "mailto:uzo123ng@gmail.com",
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: "University Email",
    value: "pu.agwu@mail.ui.edu.ng",
    href: "mailto:pu.agwu@mail.ui.edu.ng",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Location",
    value: "University of Ibadan, Nigeria",
  },
]

export default function AboutPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Professional Profile</h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
                Patrick Uzodimma AGWU is a seasoned Library Technology Specialist and Infrastructure Manager with
                extensive experience in digital library development, system administration, and library automation.
              </p>
              <div className="mt-4 sm:mt-6 space-y-2">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <div className="text-muted-foreground">{item.icon}</div>
                    <span className="font-medium">{item.label}:</span>
                    {item.href ? (
                      <a href={item.href} className="text-primary hover:underline break-all">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/pic8.jpg"
                  alt="Patrick Uzodimma AGWU"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader title="Professional Experience" className="mb-8 sm:mb-12" />
          <div className="space-y-4 sm:space-y-6">
            {professionalRoles.map((role, index) => (
              <Card key={index}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-semibold text-sm sm:text-base">{role.title}</h3>
                      <p className="text-sm text-primary font-medium">{role.organization}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 py-1 rounded self-start">
                      {role.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader title="Technical Competencies & Skills" className="mb-8 sm:mb-12" />
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((skill) => (
              <Card key={skill}>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-xs sm:text-sm font-medium">{skill}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Professional Associations & Leadership"
            subtitle="Active participation and leadership in professional organizations"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {professionalMemberships.map((membership, index) => (
              <Card key={index}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">{membership.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base mb-1">{membership.role}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{membership.organization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader title="Professional Biography" className="mb-8 sm:mb-12" />
          <Card>
            <CardContent className="p-6 sm:p-8">
              <div className="prose prose-sm sm:prose max-w-none">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  Patrick Agwu is currently the Library Webmaster and the Head, Technical, Infrastructure and Internet
                  Services Unit, Kenneth Dike Library, University of Ibadan. He is working with a dedicated team to
                  develop a home-built Integrated Library Management System, deploy an Institutional Repository using
                  DSpace, and create a comprehensive Digital Library Platform that operates on Local Area Network
                  infrastructure.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  He has attended numerous trainings, workshops, and conferences at both national and international
                  levels in Library and Information Studies, with special focus on Library Automation, Digitization,
                  Electronic Documents and Records Management, E-library Management, and Content Management Systems. His
                  expertise has been recognized through invitations to serve as a Resource Person at local and
                  international conferences and workshops.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As the Principal Consultant of MP3 MULTI-SYSTEMS KONCEPT, he provides specialized consulting services
                  in library technology, digital systems implementation, and IT infrastructure development for libraries
                  and educational institutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
