import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import {
  Server,
  Database,
  Globe,
  Shield,
  BookOpen,
  HardDrive,
  Network,
  Settings,
  Users,
  FileText,
  Monitor,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Library Management Systems",
    description:
      "Custom-built Integrated Library Management Systems (ILMS) tailored to your institution's specific needs.",
    features: [
      "Cataloging and Classification",
      "Circulation Management",
      "Acquisition Systems",
      "Serial Control",
      "OPAC (Online Public Access Catalog)",
      "Reports and Analytics",
    ],
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Digital Repository Solutions",
    description: "Implementation and customization of institutional repositories using DSpace and other platforms.",
    features: [
      "DSpace Installation & Configuration",
      "Metadata Schema Design",
      "Digital Collection Management",
      "OAI-PMH Harvesting",
      "Search and Discovery",
      "Preservation Workflows",
    ],
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "IT Infrastructure Management",
    description: "Complete IT infrastructure setup, maintenance, and optimization for libraries and institutions.",
    features: [
      "Network Design & Implementation",
      "Server Installation & Configuration",
      "System Monitoring & Maintenance",
      "Backup & Disaster Recovery",
      "Security Implementation",
      "Performance Optimization",
    ],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Linux System Administration",
    description: "Expert Linux server administration services including GUI and command-line management.",
    features: [
      "Linux Server Setup & Configuration",
      "Command Line Interface (CLI) Management",
      "User & Permission Management",
      "System Security Hardening",
      "Service Configuration",
      "Troubleshooting & Support",
    ],
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Administration",
    description: "Professional Oracle database administration and management services.",
    features: [
      "Oracle Database Installation",
      "Performance Tuning & Optimization",
      "Backup & Recovery Solutions",
      "User Management & Security",
      "Database Monitoring",
      "Migration Services",
    ],
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development & Administration",
    description: "Custom web application development and website administration services.",
    features: [
      "Custom Web Application Development",
      "Content Management Systems",
      "Website Design & Development",
      "Web Server Configuration",
      "SSL Certificate Management",
      "Website Maintenance & Updates",
    ],
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: "LAMP Stack Administration",
    description: "Complete Linux, Apache, MySQL, PHP stack deployment and management.",
    features: [
      "LAMP Stack Installation",
      "Apache Web Server Configuration",
      "MySQL Database Management",
      "PHP Application Deployment",
      "Performance Optimization",
      "Security Configuration",
    ],
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Archives & Records Management",
    description: "Digital archives and electronic records management solutions.",
    features: [
      "Digital Archive Setup",
      "Records Classification Systems",
      "Metadata Standards Implementation",
      "Preservation Strategies",
      "Access Control Systems",
      "Compliance Management",
    ],
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "SUN Solaris Administration",
    description: "Specialized SUN Solaris system administration and management services.",
    features: [
      "Solaris System Installation",
      "System Configuration & Tuning",
      "Zone Management",
      "Storage Management",
      "Network Configuration",
      "System Monitoring",
    ],
  },
]

const consultingAreas = [
  {
    title: "Library Automation",
    description: "Strategic planning and implementation of library automation systems",
  },
  {
    title: "Digital Transformation",
    description: "Complete digital transformation roadmaps for libraries and institutions",
  },
  {
    title: "System Integration",
    description: "Integration of various library systems and third-party applications",
  },
  {
    title: "Staff Training",
    description: "Comprehensive training programs for library staff on new technologies",
  },
  {
    title: "Technology Assessment",
    description: "Evaluation of current systems and recommendations for improvements",
  },
  {
    title: "Project Management",
    description: "End-to-end project management for library technology implementations",
  },
]

export default function ServicesPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Professional Services</h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
              Comprehensive technology solutions for libraries, educational institutions, and organizations seeking to
              modernize their digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Core Services"
            subtitle="Specialized expertise in library technology and infrastructure management"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{service.icon}</div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Consulting Services"
            subtitle="Strategic guidance through MP3 MULTI-SYSTEMS KONCEPT"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {consultingAreas.map((area) => (
              <Card key={area.title}>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-sm sm:text-base mb-2">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            title="Why Choose Our Services"
            subtitle="Proven expertise and commitment to excellence"
            className="mb-8 sm:mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Proven Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Years of experience in library technology and system administration
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Settings className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Custom Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored solutions designed to meet your specific requirements
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Reliable Support</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing support and maintenance for all implemented systems
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Network className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Modern Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Latest technologies and best practices in implementation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Ready to Get Started?</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              Contact us today to discuss your library technology needs and how we can help transform your digital
              infrastructure.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Request Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
