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

export const clients: Client[] = [
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
            version: '2.1.0',
            date: '2024-12-15',
            summary: 'Enhanced reporting and real-time collaboration features',
            changes: [
              {
                id: '1',
                type: 'feature',
                title: 'Advanced Project Dashboard with real-time progress tracking and analytics',
              },
              {
                id: '2',
                type: 'feature',
                title: 'Team Collaboration Tools with instant messaging and file sharing',
              },
              {
                id: '3',
                type: 'changed',
                title: 'Improved mobile app performance and UI responsiveness',
              },
            ],
          },
          {
            version: '2.0.5',
            date: '2024-12-08',
            summary: 'Bug fixes and stability improvements',
            changes: [
              {
                id: '4',
                type: 'fix',
                title: 'Fixed issue with notification delivery delays',
              },
              {
                id: '5',
                type: 'fix',
                title: 'Resolved calendar sync problems with external calendars',
              },
              {
                id: '6',
                type: 'fix',
                title: 'Fixed PDF export formatting issues in reports',
              },
            ],
          },
          {
            version: '2.0.0',
            date: '2024-11-28',
            summary: 'Major release with new architecture and breaking changes',
            changes: [
              {
                id: '7',
                type: 'breaking',
                title: 'API v2 migration - deprecated endpoints will be removed in next release',
              },
              {
                id: '8',
                type: 'feature',
                title: 'New authentication system with multi-factor authentication support',
              },
              {
                id: '9',
                type: 'feature',
                title: 'Document management system with version control',
              },
            ],
          },
          {
            version: '1.9.2',
            date: '2024-11-15',
            summary: 'Security updates and performance optimizations',
            changes: [
              {
                id: '10',
                type: 'security',
                title: 'Security patch for session management vulnerability',
              },
              {
                id: '11',
                type: 'fix',
                title: 'Performance optimization for large project data sets',
              },
              {
                id: '12',
                type: 'known',
                title: 'Known issue: Mobile app may experience slow loading on older devices',
              },
            ],
          },
          {
            version: '1.9.0',
            date: '2024-11-01',
            summary: 'New scheduling features and workflow improvements',
            changes: [
              {
                id: '13',
                type: 'feature',
                title: 'Smart scheduling algorithm with resource optimization',
              },
              {
                id: '14',
                type: 'feature',
                title: 'Custom workflow builder for project templates',
              },
              {
                id: '15',
                type: 'changed',
                title: 'Updated user interface with improved navigation and accessibility',
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getClient(clientId: string): Client | undefined {
  return clients.find((c) => c.id === clientId);
}

export function getProject(clientId: string, projectId: string): Project | undefined {
  const client = getClient(clientId);
  return client?.projects.find((p) => p.id === projectId);
}

export function getAllProjects(): { client: Client; project: Project }[] {
  return clients.flatMap((client) =>
    client.projects.map((project) => ({ client, project }))
  );
}
