export type ChangeType = 'feature' | 'fix' | 'breaking' | 'security' | 'changed' | 'known';

export type RoadmapStatus = 'planned' | 'in-progress' | 'completed';

export interface Change {
  id: string;
  type: ChangeType;
  title: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  status: RoadmapStatus;
  targetDate?: string;
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
  roadmap?: RoadmapItem[];
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
            version: 'Exploration',
            date: '2025-12-11',
            summary: 'Template Library v2.5',
            changes: [
              {
                id: '25',
                type: 'changed',
                title: 'Reduced builder decision fatigue: simplified from 96 variants to 32 templates (one per update type)',
              },
              {
                id: '26',
                type: 'changed',
                title: 'Renamed "Exterior Installation" to "Siding, Windows and Doors" and reordered construction phases',
              },
            ],
          },
          {
            version: 'Exploration',
            date: '2025-12-09',
            summary: 'Template Library v2.2',
            changes: [
              {
                id: '24',
                type: 'feature',
                title: '32 templates with 3 variants each (short, standard, long) across 10 phases',
              },
              {
                id: '27',
                type: 'changed',
                title: 'Streamlined template selection UX: browse and apply templates in one view',
              },
            ],
          },
          {
            version: 'Exploration',
            date: '2025-12-04',
            summary: 'Builder onboarding prototypes',
            changes: [
              {
                id: '20',
                type: 'feature',
                title: 'Onboarding flow prototype: new users see homeowner timeline value in 3 clicks',
              },
              {
                id: '21',
                type: 'feature',
                title: 'Home creation wizard prototype: unified 3-step flow (Home, Homeowner, Team)',
              },
              {
                id: '22',
                type: 'changed',
                title: 'Terminology proposal: "App User" to "Team Member" with Admin/Member roles',
              },
              {
                id: '23',
                type: 'feature',
                title: 'Interactive presentation with research findings and key insights',
              },
            ],
          },
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
          {
            version: 'API',
            date: '2025-11-10',
            summary: 'Improved transactional email content and layout',
            changes: [
              {
                id: '7',
                type: 'changed',
                title: 'Improved transactional email content and layout',
              }
            ],
          },
          {
            version: 'Web App / API',
            date: '2025-10-27',
            summary: 'Enhanced URL validation and added template library features',
            changes: [
              {
                id: '8',
                type: 'fix',
                title: 'Enhanced URL validation with stricter domain checks',
              },
              {
                id: '9',
                type: 'feature',
                title: 'Explore and create demo for templates library',
              },
              {
                id: '10',
                type: 'fix',
                title: 'Active homes selection by user role',
              },
            ],
          },
          {
            version: 'Web App',
            date: '2025-10-20',
            summary: 'Layout improvements to home detail page and header layout',
            changes: [
              {
                id: '11',
                type: 'fix',
                title: 'Updated header layout and logo width in FiftyFifty layout',
              },
              {
                id: '12',
                type: 'fix',
                title: 'Added layout improvements to home detail page',
              },
            ],
          },
          {
            version: 'Web App',
            date: '2025-10-13',
            summary: 'Product analytics with PostHog to track platform usage',
            changes: [
              {
                id: '30',
                type: 'feature',
                title: 'Tracking key platform activities: user signups, home creation, updates posted',
              },
              {
                id: '31',
                type: 'feature',
                title: 'Weekly Active Users (WAU) dashboard to measure builder engagement',
              },
            ],
          },
          {
            version: 'Web App / API',
            date: '2025-10-13',
            summary: 'Layout improvements to home detail page and header layout',
            changes: [
              {
                id: '13',
                type: 'changed',
                title: 'Enhanced draft update experience',
              },
              {
                id: '14',
                type: 'feature',
                title: 'Added draft update email reminders',
              },
              {
                id: '15',
                type: 'feature',
                title: 'Added community creation API endpoint',
              },
            ],
          },
          {
            version: 'Process',
            date: '2025-09-25',
            summary: 'Improved coordination and development systems',
            changes: [
              {
                id: '7',
                type: 'changed',
                title: 'Migrated planning from Excel to ClickUp',
              },
              {
                id: '8',
                type: 'feature',
                title: 'Adopted Bokka Group\'s system of epics, features and stories',
              },
              {
                id: '9',
                type: 'feature',
                title: 'Integrated two-week development cycles',
              },
            ],
          },
        ],
        roadmap: [
          {
            id: 'r1',
            title: 'Update templates library',
            description: 'A library of pre-built templates for builders to create higher quality updates faster and share them with homeowners more efficiently',
            status: 'in-progress',
            targetDate: 'December 2025',
          },
          {
            id: 'r2',
            title: 'App user access to web app',
            description: 'Allow app users to access the web app to view their homes, manage updates, and other data',
            status: 'in-progress',
            targetDate: 'December 2025',
          },
          {
            id: 'r3',
            title: 'Draft Management System',
            description: 'Save Draft button with cloud sync, auto-save every 30 seconds to prevent data loss, and redesigned Drafts screen with Saved/Local/Failed sections. Eliminates 12-hour memory limit, enables cross-device work, and team collaboration',
            status: 'in-progress',
            targetDate: 'December 2025',
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
