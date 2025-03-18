import { Workflow, Code, LineChart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsSection() {
  return (
    <section id="skills" className="container py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
        <p className="text-muted-foreground max-w-[700px]">
          A unique blend of project management expertise and technical knowledge that enables me to lead teams and
          deliver successful projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Workflow className="h-5 w-5" />
            <CardTitle>Project Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full SDLC Ownership & Delivery</li>
              <li>Stakeholder Management</li>
              <li>Requirements Gathering & Analysis</li>
              <li>Agile Methodologies & Scrum</li>
              <li>Risk Management</li>
              <li>Team Leadership</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Users className="h-5 w-5" />
            <CardTitle>Leadership & Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cross-functional Team Coordination</li>
              <li>Client Communication</li>
              <li>Technical & Business Translation</li>
              <li>Problem Resolution</li>
              <li>Knowledge Sharing</li>
              <li>Presentation Skills</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <Code className="h-5 w-5" />
            <CardTitle>Technical Foundation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Stack Development (.NET, Angular)</li>
              <li>Microservices Architecture</li>
              <li>Cloud Solutions (AWS)</li>
              <li>DevOps & CI/CD</li>
              <li>Database Design</li>
              <li>API Development</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <LineChart className="h-5 w-5" />
            <CardTitle>Business Acumen</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Product Strategy</li>
              <li>Data-Driven Decision Making</li>
              <li>Process Optimization</li>
              <li>User Experience Focus</li>
              <li>Performance Analysis</li>
              <li>Solution Design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

