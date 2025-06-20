import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { ArrowRight, Server, Database, Globe, Shield, BookOpen } from "lucide-react"

const coreCompetencies = [
  "Library Systems Administration",
  "Digital Library Development",
  "Network Infrastructure",
  "Database Administration",
  "Linux Server Management",
  "Web Development",
]

const featuredProjects = [
  {
    title: "Integrated Library Management System",
    description: "Home-built ILMS for Kenneth Dike Library with advanced cataloging and circulation features.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Custom Development", "Library Systems", "Database"],
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Institutional Repository (DSpace)",
    description: "Deployment and customization of DSpace for University of Ibadan's digital collections.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["DSpace", "Digital Repository", "Metadata"],
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Digital Library Platform",
    description: "Local Area Network-based digital library system for enhanced resource access.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["LAN", "Digital Collections", "Access Management"],
    icon: <Server className="h-5 w-5" />,
  },
]

const services = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infrastructure Management",
    description: "Complete IT infrastructure setup and maintenance for libraries and institutions",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database Administration",
    description: "Oracle database management, optimization, and backup solutions",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom web applications and library management systems",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "System Administration",
    description: "Linux server administration, LAMP stack deployment and management",
  },
]

export default function HomePage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Patrick Uzodimma AGWU
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Head, Technical Infrastructure & Internet Services | Library Technology Specialist | Digital Systems
              Developer
            </p>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Kenneth Dike Library, University of Ibadan
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/about">View Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Core Competencies"
            subtitle="Specialized expertise in library technology and infrastructure management"
            className="mb-8 sm:mb-12"
          />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
            {coreCompetencies.map((competency) => (
              <div
                key={competency}
                className="px-3 sm:px-4 py-2 bg-background border rounded-full text-xs sm:text-sm font-medium"
              >
                {competency}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Professional Services"
            subtitle="Comprehensive technology solutions for libraries and institutions"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{service.icon}</div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="Key technology implementations and digital library solutions"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="group hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-primary">{project.icon}</div>
                    <h3 className="font-semibold text-sm sm:text-base">{project.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Recognition */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Professional Recognition"
            subtitle="Leadership roles and contributions to the library and technology community"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="font-semibold mb-2">Vice-President</h3>
                <p className="text-sm text-muted-foreground">Library Officers Association of Nigeria (LOAN)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="font-semibold mb-2">National General Secretary</h3>
                <p className="text-sm text-muted-foreground">IT Section, Nigerian Library Association</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="font-semibold mb-2">P.R.O.</h3>
                <p className="text-sm text-muted-foreground">Nigerian Library Association, Oyo State</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Ready to Transform Your Library Technology?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              Let's discuss how I can help modernize your library systems and digital infrastructure.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Start a Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
