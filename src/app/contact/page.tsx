"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Github, Linkedin, User } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    value: "john@example.com",
    href: "mailto:john@example.com",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
]

const serviceAreas = [
  "Library Management Systems Development",
  "Digital Repository Implementation",
  "IT Infrastructure Consulting",
  "Database Administration Services",
  "Linux System Administration",
  "Web Development & Maintenance",
  "Staff Training & Workshops",
  "Technology Assessment & Planning",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-sm text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-sm text-red-800 dark:text-red-200">
                      Sorry, there was an error sending your message.
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="p-2 bg-muted rounded flex-shrink-0">{item.icon}</div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm">{item.label}</p>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground break-all"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
               <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Professional Consultation
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Available for consulting through MP3 MULTI-SYSTEMS KONCEPT. Specializing in library technology
                    solutions, digital infrastructure, and system implementations.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Service Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {serviceAreas.slice(0, 4).map((area) => (
                        <span key={area} className="px-2 py-1 bg-muted text-xs rounded">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
