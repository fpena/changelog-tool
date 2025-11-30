# Changelog Tool

A beautiful changelog and release notes tool for tracking features, fixes, and improvements across client projects. Built with Astro, React, and Tailwind CSS.

Each client/project has its own dedicated URL that can be shared directly with clients.

## Features

- 🔗 **Direct URLs** - Each client/project has a unique URL to share with clients
- 🏷️ **Change categorization** - Features, fixes, improvements, breaking changes, and security updates
- 🌙 **Dark/Light mode** - System-aware theme with manual toggle
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- ⚡ **Fast & static** - Built with Astro for optimal performance
- 🎨 **Modern UI** - Inspired by Zen Browser's release notes design
- 📦 **Storyblok CMS** - Optional headless CMS integration for content management

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://react.dev/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Storyblok](https://www.storyblok.com/) - Headless CMS (optional)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ChangeItem.tsx
│   ├── ChangelogCard.tsx
│   ├── ChangelogTimeline.tsx
│   ├── ChangeTag.tsx
│   └── ThemeToggle.tsx
├── content/
│   └── changelog/
│       └── data.ts      # Local client/project data (fallback)
├── lib/
│   ├── dataService.ts   # Data fetching service (Storyblok + local)
│   └── storyblok.ts     # Storyblok API utilities
├── layouts/
│   └── Layout.astro     # Main layout
├── pages/
│   └── [client]/
│       └── [project]/
│           └── index.astro  # Project changelog page
└── styles/
    └── global.css       # Global styles
```

## URL Structure

Each project changelog is accessible at:
```
/{client-id}/{project-id}
```

For example:
- `/acme-corp/inventory-system`
- `/techstart/collaboration-platform`

## Content Management

### Option 1: Storyblok CMS (Recommended)

Storyblok integration allows you to manage clients, projects, and changelog entries through a visual CMS interface.

#### Setup

1. Create a [Storyblok](https://www.storyblok.com/) account
2. Create a new space
3. Copy `.env.example` to `.env` and add your Storyblok preview token:
   ```
   STORYBLOK_TOKEN=your_preview_token_here
   ```

#### Content Types

Create the following content types in Storyblok:

**Client** (folder: `clients/`)
- `name` (Text) - Client display name
- `description` (Text) - Client description  
- `logo` (Asset) - Client logo (optional)
- `projects` (Multi-Options, Stories) - Related project stories

**Project** (folder: `projects/`)
- `name` (Text) - Project display name
- `description` (Text) - Project description
- `changelog` (Blocks) - List of changelog entries

**Changelog Entry** (nestable block)
- `version` (Text) - Version number or label
- `date` (Date) - Release date
- `summary` (Text) - Brief summary (optional)
- `changes` (Blocks) - List of changes

**Change** (nestable block)
- `type` (Single-Option) - One of: feature, fix, breaking, security, changed, known
- `title` (Text) - Change description

### Option 2: Local Data

Edit `src/content/changelog/data.ts` to add clients, projects, and changelog entries:

```typescript
export const localClients: Client[] = [
  {
    id: 'client-slug',
    name: 'Client Name',
    description: 'Client description',
    projects: [
      {
        id: 'project-slug',
        name: 'Project Name',
        description: 'Project description',
        changelog: [
          {
            version: '1.0.0',
            date: '2024-11-25',
            summary: 'Initial release',
            changes: [
              {
                id: '1',
                type: 'feature',
                title: 'New feature',
              },
            ],
          },
        ],
      },
    ],
  },
];
```

### Change Types

- `feature` - New features
- `fix` - Bug fixes
- `changed` - Changes to existing features
- `breaking` - Breaking changes
- `security` - Security updates
- `known` - Known issues

## License

ISC