import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="container py-24 space-y-12 bg-muted/50">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
        <p className="text-muted-foreground max-w-[700px]">
          Leading projects and teams to deliver impactful solutions across different domains.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Lead & Full Stack Developer</CardTitle>
            <CardDescription>NCS Pte Ltd | 2022 – Present</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Donation Management System | People's Association</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Led the end-to-end development of a donation management system, taking ownership of the entire project
                lifecycle from requirements gathering to deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Project Leadership</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Stakeholder Management</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Full SDLC</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Microservices</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Data Statistics Dashboard | Prime Minister Office</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Currently developing web applications and data visualization dashboards, focusing on user experience and
                effective client communication to ensure project success.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Client Communication</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">UX Design</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">Data Visualization</span>
                <span className="bg-muted text-xs px-2 py-1 rounded-md">.NET & Angular</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Analysis Engineer</CardTitle>
            <CardDescription>Micron Semiconductor Asia Pte Ltd | 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Applied data analysis techniques to improve process capabilities and presented findings to
              cross-functional teams, demonstrating strong analytical and communication skills.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-muted text-xs px-2 py-1 rounded-md">Data Analysis</span>
              <span className="bg-muted text-xs px-2 py-1 rounded-md">Process Improvement</span>
              <span className="bg-muted text-xs px-2 py-1 rounded-md">Cross-team Collaboration</span>
              <span className="bg-muted text-xs px-2 py-1 rounded-md">Presentation Skills</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

