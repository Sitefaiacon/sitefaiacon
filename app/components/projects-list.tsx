"use client"

import { useApi } from "@/hooks/use-api"
import { projectsService, type Project } from "@/services/projects-service"
import { OptimizedImage } from "./optimized-image"

interface ProjectsListProps {
  category?: string
  limit?: number
}

export function ProjectsList({ category, limit }: ProjectsListProps) {
  const {
    data: projects,
    isLoading,
    error,
  } = useApi(() => projectsService.getProjects({ category, limit }), {
    initialData: [],
    onError: (err) => console.error("Failed to load projects:", err),
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: limit || 6 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded-lg">
        <p className="font-medium">Error loading projects</p>
        <p className="text-sm">{error.message}</p>
      </div>
    )
  }

  if (!projects?.length) {
    return (
      <div className="p-4 bg-gray-50 text-gray-500 rounded-lg">
        <p>No projects found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-48 relative">
        <OptimizedImage src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.category}</p>
        <p className="mt-2 text-sm line-clamp-2">{project.description}</p>
      </div>
    </div>
  )
}
