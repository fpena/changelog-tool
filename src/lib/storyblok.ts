import type { ISbStoryData, ISbStoriesParams } from '@storyblok/astro';
import { useStoryblokApi } from '@storyblok/astro';
import type { Client, Project, ChangelogEntry, Change, ChangeType } from '../content/changelog/data';

// Storyblok content types
export interface StoryblokChange {
  _uid: string;
  type: ChangeType;
  title: string;
  component: 'change';
}

export interface StoryblokChangelogEntry {
  _uid: string;
  version: string;
  date: string;
  summary?: string;
  changes: StoryblokChange[];
  component: 'changelog_entry';
}

export interface StoryblokProject {
  _uid: string;
  name: string;
  description: string;
  changelog: StoryblokChangelogEntry[];
  component: 'project';
}

export interface StoryblokClient {
  name: string;
  logo?: { filename: string; alt?: string };
  description: string;
  projects: ISbStoryData<StoryblokProject>[];
  component: 'client';
}

// Fetch all clients from Storyblok
export async function fetchClients(): Promise<Client[]> {
  const storyblokApi = useStoryblokApi();
  
  const params: ISbStoriesParams = {
    version: import.meta.env.DEV ? 'draft' : 'published',
    starts_with: 'clients/',
    resolve_relations: ['client.projects'],
  };

  const { data } = await storyblokApi.get('cdn/stories', params);
  
  return data.stories.map((story: ISbStoryData<StoryblokClient>) => 
    transformStoryblokClient(story)
  );
}

// Fetch a single client by slug
export async function fetchClient(clientSlug: string): Promise<Client | undefined> {
  const storyblokApi = useStoryblokApi();
  
  try {
    const params: ISbStoriesParams = {
      version: import.meta.env.DEV ? 'draft' : 'published',
      resolve_relations: ['client.projects'],
    };

    // Encode slug to prevent path traversal
    const safeSlug = encodeURIComponent(clientSlug);
    const { data } = await storyblokApi.get(`cdn/stories/clients/${safeSlug}`, params);
    return transformStoryblokClient(data.story);
  } catch {
    return undefined;
  }
}

// Fetch a single project by client and project slug
export async function fetchProject(clientSlug: string, projectSlug: string): Promise<{ client: Client; project: Project } | undefined> {
  const storyblokApi = useStoryblokApi();
  
  try {
    const clientParams: ISbStoriesParams = {
      version: import.meta.env.DEV ? 'draft' : 'published',
    };

    // Encode slugs to prevent path traversal
    const safeClientSlug = encodeURIComponent(clientSlug);
    const safeProjectSlug = encodeURIComponent(projectSlug);

    // Fetch client
    const { data: clientData } = await storyblokApi.get(`cdn/stories/clients/${safeClientSlug}`, clientParams);
    
    // Fetch project
    const projectParams: ISbStoriesParams = {
      version: import.meta.env.DEV ? 'draft' : 'published',
    };
    const { data: projectData } = await storyblokApi.get(`cdn/stories/projects/${safeProjectSlug}`, projectParams);
    
    const client = transformStoryblokClient(clientData.story);
    const project = transformStoryblokProject(projectData.story);
    
    return { client, project };
  } catch {
    return undefined;
  }
}

// Fetch all projects with their client information
export async function fetchAllProjects(): Promise<{ client: Client; project: Project }[]> {
  const storyblokApi = useStoryblokApi();
  
  const params: ISbStoriesParams = {
    version: import.meta.env.DEV ? 'draft' : 'published',
    starts_with: 'clients/',
    resolve_relations: ['client.projects'],
  };

  const { data } = await storyblokApi.get('cdn/stories', params);
  
  const results: { client: Client; project: Project }[] = [];
  
  for (const story of data.stories as ISbStoryData<StoryblokClient>[]) {
    const client = transformStoryblokClient(story);
    for (const project of client.projects) {
      results.push({ client, project });
    }
  }
  
  return results;
}

// Transform Storyblok client to our Client type
function transformStoryblokClient(story: ISbStoryData<StoryblokClient>): Client {
  const content = story.content;
  
  return {
    id: story.slug,
    name: content.name,
    logo: content.logo?.filename,
    description: content.description,
    projects: (content.projects || []).map((projectStory) => 
      transformStoryblokProject(projectStory)
    ),
  };
}

// Transform Storyblok project to our Project type
function transformStoryblokProject(story: ISbStoryData<StoryblokProject>): Project {
  const content = story.content;
  
  return {
    id: story.slug,
    name: content.name,
    description: content.description,
    changelog: (content.changelog || []).map((entry) => 
      transformStoryblokChangelogEntry(entry)
    ),
  };
}

// Transform Storyblok changelog entry to our ChangelogEntry type
function transformStoryblokChangelogEntry(entry: StoryblokChangelogEntry): ChangelogEntry {
  return {
    version: entry.version,
    date: entry.date,
    summary: entry.summary,
    changes: (entry.changes || []).map((change) => 
      transformStoryblokChange(change)
    ),
  };
}

// Transform Storyblok change to our Change type
function transformStoryblokChange(change: StoryblokChange): Change {
  return {
    id: change._uid,
    type: change.type,
    title: change.title,
  };
}
