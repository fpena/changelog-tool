import type { Client, Project } from '../content/changelog/data';
import { localClients, getClient as getLocalClient, getProject as getLocalProject, getAllProjects as getLocalAllProjects } from '../content/changelog/data';

// Check if Storyblok is configured
function isStoryblokConfigured(): boolean {
  const token = import.meta.env.STORYBLOK_TOKEN;
  return Boolean(token);
}

// Get all clients - tries Storyblok first, falls back to local data
export async function getClients(): Promise<Client[]> {
  if (!isStoryblokConfigured()) {
    return localClients;
  }

  try {
    const { fetchClients } = await import('./storyblok');
    return await fetchClients();
  } catch (error) {
    console.warn('Failed to fetch from Storyblok, using local data:', error);
    return localClients;
  }
}

// Get a single client by ID - tries Storyblok first, falls back to local data
export async function getClient(clientId: string): Promise<Client | undefined> {
  if (!isStoryblokConfigured()) {
    return getLocalClient(clientId);
  }

  try {
    const { fetchClient } = await import('./storyblok');
    return await fetchClient(clientId);
  } catch (error) {
    console.warn('Failed to fetch from Storyblok, using local data:', error);
    return getLocalClient(clientId);
  }
}

// Get a project by client and project IDs - tries Storyblok first, falls back to local data
export async function getProject(clientId: string, projectId: string): Promise<{ client: Client; project: Project } | undefined> {
  if (!isStoryblokConfigured()) {
    const client = getLocalClient(clientId);
    const project = getLocalProject(clientId, projectId);
    if (client && project) {
      return { client, project };
    }
    return undefined;
  }

  try {
    const { fetchProject } = await import('./storyblok');
    return await fetchProject(clientId, projectId);
  } catch (error) {
    console.warn('Failed to fetch from Storyblok, using local data:', error);
    const client = getLocalClient(clientId);
    const project = getLocalProject(clientId, projectId);
    if (client && project) {
      return { client, project };
    }
    return undefined;
  }
}

// Get all projects - tries Storyblok first, falls back to local data
export async function getAllProjects(): Promise<{ client: Client; project: Project }[]> {
  if (!isStoryblokConfigured()) {
    return getLocalAllProjects();
  }

  try {
    const { fetchAllProjects } = await import('./storyblok');
    return await fetchAllProjects();
  } catch (error) {
    console.warn('Failed to fetch from Storyblok, using local data:', error);
    return getLocalAllProjects();
  }
}
