// This is a Server Component (no "use client" directive)
import { db } from "@/lib/db"

// Data fetching happens on the server
async function getProjects() {
  // This could be a database call or API request
  return await db.projects.findMany()
}

export default async function ProjectsServerComponent() {
  // Fetch data on the server
  const projects = await getProjects()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="border p-4 rounded-lg">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
