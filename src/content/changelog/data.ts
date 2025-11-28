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
    id: 'acme-corp',
    name: 'Acme Corporation',
    description: 'Enterprise software solutions for manufacturing',
    projects: [
      {
        id: 'inventory-system',
        name: 'Inventory Management System',
        description: 'Real-time inventory tracking and management',
        changelog: [
          {
            version: '2.4.0',
            date: '2024-11-25',
            summary: 'Major performance improvements and new reporting features',
            changes: [
              {
                id: '1',
                type: 'feature',
                title: 'Advanced Analytics Dashboard with real-time insights and predictive analytics capabilities',
              },
              {
                id: '2',
                type: 'feature',
                title: 'Bulk Import/Export functionality for importing and exporting data in bulk operations',
              },
              {
                id: '4',
                type: 'fix',
                title: 'Stock Alert Notifications system for sending stock alert notifications to users',
              },
              {
                id: '4a',
                type: 'changed',
                title: 'User Interface Layout changes with improved User Interface Layout design and navigation',
              },
            ],
          },
          {
            version: '2.3.1',
            date: '2024-11-10',
            summary: 'Bug fixes and security updates',
            changes: [
              {
                id: '5',
                type: 'security',
                title: 'Authentication Token Refresh mechanism with improved Authentication Token Refresh security',
              },
              {
                id: '6',
                type: 'fix',
                title: 'Report Generation Error fix for Report Generation Error issues in PDF exports',
              },
              {
                id: '6a',
                type: 'known',
                title: 'Slow Loading on IE11 is a known issue with Slow Loading on IE11 performance',
              },
            ],
          },
          {
            version: '2.3.0',
            date: '2024-10-28',
            summary: 'Multi-warehouse support and API improvements',
            changes: [
              {
                id: '7',
                type: 'feature',
                title: 'Multi-Warehouse Support feature for managing inventory across multiple warehouse locations',
              },
              {
                id: '8',
                type: 'breaking',
                title: 'API v2 Migration requires API v2 Migration from deprecated v1 endpoints to v2',
              },
            ],
          },
        ],
      },
      {
        id: 'erp-module',
        name: 'ERP Integration Module',
        description: 'Seamless integration with existing ERP systems',
        changelog: [
          {
            version: '1.2.0',
            date: '2024-11-20',
            summary: 'SAP integration and performance updates',
            changes: [
              {
                id: '10',
                type: 'feature',
                title: 'SAP Business One Connector integration with SAP Business One Connector native support',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'techstart',
    name: 'TechStart Inc.',
    description: 'Innovative startup building the future of work',
    projects: [
      {
        id: 'collaboration-platform',
        name: 'Team Collaboration Platform',
        description: 'Real-time collaboration and project management',
        changelog: [
          {
            version: '3.0.0',
            date: '2024-11-22',
            summary: 'Complete UI overhaul with new features',
            changes: [
              {
                id: '12',
                type: 'breaking',
                title: 'New Architecture implementation with New Architecture for modern tech stack rewrite',
              },
              {
                id: '13',
                type: 'feature',
                title: 'AI-Powered Task Suggestions feature with AI-Powered Task Suggestions based on history',
              },
              {
                id: '14',
                type: 'feature',
                title: 'Video Conferencing Integration with built-in Video Conferencing Integration without leaving platform',
              },
              {
                id: '15a',
                type: 'changed',
                title: 'Notification Preferences changes with updated Notification Preferences default settings configuration',
              },
            ],
          },
          {
            version: '2.9.5',
            date: '2024-11-01',
            summary: 'Stability improvements',
            changes: [
              {
                id: '16',
                type: 'fix',
                title: 'Notification Sync fix for Notification Sync issues with push notifications across devices',
              },
              {
                id: '17',
                type: 'fix',
                title: 'File Upload Progress bar fix for File Upload Progress not updating during uploads',
              },
            ],
          },
        ],
      },
      {
        id: 'mobile-app',
        name: 'Mobile Companion App',
        description: 'iOS and Android app for on-the-go access',
        changelog: [
          {
            version: '1.5.0',
            date: '2024-11-18',
            summary: 'Offline mode and widget support',
            changes: [
              {
                id: '18',
                type: 'feature',
                title: 'Offline Mode feature with Offline Mode support for working without internet connection',
              },
              {
                id: '19',
                type: 'feature',
                title: 'Home Screen Widgets feature with Home Screen Widgets for iOS and Android platforms',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'greenleaf',
    name: 'GreenLeaf Organics',
    description: 'Sustainable agriculture technology',
    projects: [
      {
        id: 'farm-management',
        name: 'Smart Farm Dashboard',
        description: 'IoT-powered farm monitoring and management',
        changelog: [
          {
            version: '4.1.0',
            date: '2024-11-24',
            summary: 'Weather integration and crop planning',
            changes: [
              {
                id: '21',
                type: 'feature',
                title: 'Weather Forecast Integration with real-time Weather Forecast Integration data and forecasts',
              },
              {
                id: '22',
                type: 'feature',
                title: 'Crop Planning Calendar feature with Crop Planning Calendar for planting and harvest schedules',
              },
              {
                id: '24',
                type: 'fix',
                title: 'GPS Mapping fix for GPS Mapping field boundary mapping issues on certain devices',
              },
              {
                id: '24a',
                type: 'known',
                title: 'Weather Data Delay is a known limitation with Weather Data Delay during peak times',
              },
            ],
          },
          {
            version: '4.0.2',
            date: '2024-11-05',
            summary: 'Critical security patch',
            changes: [
              {
                id: '25',
                type: 'security',
                title: 'API Authentication security patch for API Authentication vulnerability in IoT device authentication',
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
