import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="container py-24">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Looking for a project manager who understands both business and technical aspects? I&apos;d love to discuss how I
            can contribute to your team&apos;s success.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Link href="mailto:john.doe@example.com" className="text-sm hover:underline">
                  john.doe@example.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  linkedin.com/in/johndoe
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  github.com/johndoe
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="mailto:john.doe@example.com">Send Me a Message</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

