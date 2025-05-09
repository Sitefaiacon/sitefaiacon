import { apiClient } from "@/lib/api-client"

// Types
export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  date: string
}

export interface ProjectsFilter {
  category?: string
  limit?: number
}

// Service
export const projectsService = {
  async getProjects(filter?: ProjectsFilter): Promise<Project[]> {
    const queryParams = new URLSearchParams()

    if (filter?.category) {
      queryParams.append("category", filter.category)
    }

    if (filter?.limit) {
      queryParams.append("limit", filter.limit.toString())
    }

    const endpoint = `projects${queryParams.toString() ? `?${queryParams.toString()}` : ""}`
    return apiClient.get<Project[]>(endpoint)
  },

  async getProjectById(id: string): Promise<Project> {
    return apiClient.get<Project>(`projects/${id}`)
  },

  async createProject(project: Omit<Project, "id">): Promise<Project> {
    return apiClient.post<Project>("projects", project)
  },

  async updateProject(id: string, project: Partial<Omit<Project, "id">>): Promise<Project> {
    return apiClient.put<Project>(`projects/${id}`, project)
  },

  async deleteProject(id: string): Promise<void> {
    return apiClient.delete<void>(`projects/${id}`)
  },
}
