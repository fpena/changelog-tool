export type ChangeType = 'feature' | 'fix' | 'improvement' | 'breaking' | 'security';

export interface Change {
  id: string;
  type: ChangeType;
  title: string;
  description?: string;
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
                title: 'Advanced Analytics Dashboard',
                description: 'New dashboard with real-time inventory insights and predictive analytics',
              },
              {
                id: '2',
                type: 'feature',
                title: 'Bulk Import/Export',
                description: 'Support for CSV and Excel file imports with automatic field mapping',
              },
              {
                id: '3',
                type: 'improvement',
                title: 'Database Query Optimization',
                description: 'Reduced query times by 60% for large inventories',
              },
              {
                id: '4',
                type: 'fix',
                title: 'Stock Alert Notifications',
                description: 'Fixed issue where low stock alerts were not being sent',
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
                title: 'Authentication Token Refresh',
                description: 'Improved token refresh mechanism to prevent session hijacking',
              },
              {
                id: '6',
                type: 'fix',
                title: 'Report Generation Error',
                description: 'Fixed PDF export failing for reports with special characters',
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
                title: 'Multi-Warehouse Support',
                description: 'Manage inventory across multiple warehouse locations',
              },
              {
                id: '8',
                type: 'breaking',
                title: 'API v2 Migration',
                description: 'Deprecated v1 endpoints - please migrate to v2 API',
              },
              {
                id: '9',
                type: 'improvement',
                title: 'Mobile Responsive Design',
                description: 'Improved mobile experience for warehouse floor operations',
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
                title: 'SAP Business One Connector',
                description: 'Native integration with SAP Business One',
              },
              {
                id: '11',
                type: 'improvement',
                title: 'Sync Performance',
                description: 'Improved data synchronization speed by 40%',
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
                title: 'New Architecture',
                description: 'Complete rewrite using modern tech stack - some plugins may need updates',
              },
              {
                id: '13',
                type: 'feature',
                title: 'AI-Powered Task Suggestions',
                description: 'Smart task recommendations based on project history',
              },
              {
                id: '14',
                type: 'feature',
                title: 'Video Conferencing Integration',
                description: 'Built-in video calls without leaving the platform',
              },
              {
                id: '15',
                type: 'improvement',
                title: 'Dark Mode',
                description: 'System-wide dark mode support',
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
                title: 'Notification Sync',
                description: 'Fixed push notifications not syncing across devices',
              },
              {
                id: '17',
                type: 'fix',
                title: 'File Upload Progress',
                description: 'Fixed progress bar not updating during large file uploads',
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
                title: 'Offline Mode',
                description: 'Work without internet connection - changes sync when back online',
              },
              {
                id: '19',
                type: 'feature',
                title: 'Home Screen Widgets',
                description: 'Quick access widgets for iOS and Android',
              },
              {
                id: '20',
                type: 'improvement',
                title: 'Battery Optimization',
                description: 'Reduced battery usage by 30%',
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
                title: 'Weather Forecast Integration',
                description: 'Real-time weather data and 14-day forecasts',
              },
              {
                id: '22',
                type: 'feature',
                title: 'Crop Planning Calendar',
                description: 'Visual calendar for planting and harvest schedules',
              },
              {
                id: '23',
                type: 'improvement',
                title: 'Sensor Data Accuracy',
                description: 'Improved soil moisture reading accuracy',
              },
              {
                id: '24',
                type: 'fix',
                title: 'GPS Mapping',
                description: 'Fixed field boundary mapping on certain devices',
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
                title: 'API Authentication',
                description: 'Patched vulnerability in IoT device authentication',
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
