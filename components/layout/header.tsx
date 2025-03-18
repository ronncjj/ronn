"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">
          John Doe
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-lg font-medium text-left hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-lg font-medium text-left hover:text-primary"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-lg font-medium text-left hover:text-primary"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-lg font-medium text-left hover:text-primary"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-lg font-medium text-left hover:text-primary"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-lg font-medium text-left hover:text-primary"
              >
                Contact
              </button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Button onClick={() => scrollToSection("contact")} className="hidden md:flex">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  )
}

