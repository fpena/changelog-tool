export type ChangeType = 'feature' | 'fix' | 'breaking' | 'security' | 'changed' | 'known';

export interface Change {
  id: string;
  type: ChangeType;
  title: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  summary?: string;
  changes: Change[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  changelog: ChangelogEntry[];
}

export interface Client {
  id: string;
  name: string;
  logo?: string;
  description: string;
  projects: Project[];
}

// Local fallback data - used when Storyblok is not configured
export const localClients: Client[] = [
  {
    id: 'bokka-group',
    name: 'Bokka Group Inc',
    description: 'Innovative solutions for modern businesses',
    projects: [
      {
        id: 'builder-signal',
        name: 'Builder Signal',
        description: 'Construction project management and communication platform',
        changelog: [
          {
            version: 'Web App / API',
            date: '2025-11-24',
            summary: 'New editor experience and faster media uploads',
            changes: [
              {
                id: '1',
                type: 'feature',
                title: 'New editor experience (TinyMCE) when creating an editing an update',
              },
              {
                id: '2',
                type: 'changed',
                title: 'Faster experience when uploading photos and videos',
              },
              {
                id: '3',
                type: 'fix',
                title: 'Added default welcome update on home import',
              },
            ],
          },
          {
            version: 'Web App / API',
            date: '2025-11-17',
            summary: 'Bug fixes and stability improvements',
            changes: [
              {
                id: '4',
                type: 'fix',
                title: 'Fixed issue where home was not selected when creating an update',
              },
              {
                id: '5',
                type: 'changed',
                title: 'Converted update create/edit modals to full page routes',
              },
              {
                id: '6',
                type: 'changed',
                title: 'Revised and expanded the default homebuilding phases',
              },
            ],
          },
        ],
      },
    ],
  },
];

// Keep 'clients' export for backwards compatibility
export const clients = localClients;

export function getClient(clientId: string): Client | undefined {
  return localClients.find((c) => c.id === clientId);
}

export function getProject(clientId: string, projectId: string): Project | undefined {
  const client = getClient(clientId);
  return client?.projects.find((p) => p.id === projectId);
}

export function getAllProjects(): { client: Client; project: Project }[] {
  return localClients.flatMap((client) =>
    client.projects.map((project) => ({ client, project }))
  );
}
