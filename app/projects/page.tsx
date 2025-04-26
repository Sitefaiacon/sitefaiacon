import { OptimizedImage } from "../components/optimized-image"

async function getProjects() {
  // Since this is a server component, we can directly access the file system or database
  // For this example, we'll return mock data
  return [
    { id: 1, title: "Πολυτελής Βίλα", location: "Κασσιόπη, Κέρκυρα" },
    { id: 2, title: "Ανακαίνιση Οικίας", location: "Αχαράβη, Κέρκυρα" },
    { id: 3, title: "Ανακαίνιση Ξενοδοχείου", location: "Πόλη της Κέρκυρας" },
    // Add more projects as needed
  ]
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Τα Έργα μας</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <OptimizedImage
              src={`/images/projects/${project.id}.webp`}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
