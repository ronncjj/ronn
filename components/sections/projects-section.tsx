"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="bg-muted/50 py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Showcasing leadership and technical expertise through impactful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="pb-0">
              <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Mind Over Body Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle>Mind Over Body</CardTitle>
              <CardDescription>Team Lead & Solution Architect</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Led a team of five in designing and implementing a scalable web application, applying Agile
                methodologies and DevOps practices to ensure project success.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Team Leadership</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Solution Architecture</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Agile</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">AWS</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-0">
              <div className="aspect-video relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Lane Detection Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle>Lane Detection System</CardTitle>
              <CardDescription>Research & Development Lead</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Researched and implemented an innovative deep learning solution for lane detection in challenging
                weather conditions, achieving 98% accuracy and demonstrating strong problem-solving abilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Research Leadership</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Problem Solving</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Technical Innovation</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Performance Optimization</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" onClick={() => scrollToSection("contact")}>
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

