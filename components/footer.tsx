"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  FlaskConical,
  ArrowRight,
} from "lucide-react"

const footerLinks = {
  academy: [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#about" },
    { name: "Faculty", href: "#tutors" },
    { name: "Facilities", href: "#labs" },
  ],
  programs: [
    { name: "Biology Courses", href: "#courses" },
    { name: "Chemistry Courses", href: "#courses" },
    { name: "Advanced Programs", href: "#courses" },
    { name: "Certification", href: "#certificates" },
  ],
  services: [
    { name: "Private Tutoring", href: "#tutors" },
    { name: "Lab Booking", href: "#labs" },
    { name: "Exam Preparation", href: "#courses" },
    { name: "Research Support", href: "#contact" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Admissions", href: "#admission" },
    { name: "Student Portal", href: "#" },
    { name: "Help Center", href: "#contact" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Academy Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-primary">BioChemistry</h3>
                  <p className="text-xs text-muted-foreground">Academy</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering future scientists through hands-on learning and expert guidance in Biology and Chemistry
                education.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">123 Science Boulevard, Tashkent, Uzbekistan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+998 71 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@biochemistry-academy.uz</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-2">
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Academy</h4>
                <ul className="space-y-3">
                  {footerLinks.academy.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Programs</h4>
                <ul className="space-y-3">
                  {footerLinks.programs.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-1">
              <h4 className="font-heading font-bold text-foreground mb-4">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for the latest updates on courses, events, and scientific discoveries.
              </p>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="font-semibold text-foreground mb-4">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Button key={social.name} variant="outline" size="sm" asChild>
                      <a href={social.href} aria-label={social.name}>
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2024 BioChemistry Academy. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
