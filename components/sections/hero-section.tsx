"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="container py-24 md:py-32 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Software Engineer with Technical Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Passionate full-stack developer, transforming ideas into rea-life products with a mission to create positive change
            in the world through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => scrollToSection("skills")} className="w-full sm:w-auto">
              View Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("projects")} className="w-full sm:w-auto">
              View Projects
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-background bg-muted">
            <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

