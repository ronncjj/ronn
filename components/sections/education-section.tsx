import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationSection() {
  return (
    <section id="education" className="container py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <p className="text-muted-foreground max-w-[700px]">
          Academic foundation in both technical and management disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Graduate Certificate in Architecting Scalable Systems</CardTitle>
            <CardDescription>National University of Singapore – Institute of Systems Science</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Specialized in software architecture, DevOps, platform engineering, and cloud-native solutions, providing
              a strong foundation for technical project management.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Engineering with Honours (2nd Upper)</CardTitle>
            <CardDescription>Nanyang Technological University</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Specialized in Info-Communications Engineering (Computer Engineering), combining technical knowledge with
              problem-solving skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

