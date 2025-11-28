# Changelog Tool

A beautiful changelog and release notes tool for tracking features, fixes, and improvements across client projects. Built with Astro, React, and Tailwind CSS.

## Features

- 📋 **Multi-client support** - Organize changelogs by client and project
- 🏷️ **Change categorization** - Features, fixes, improvements, breaking changes, and security updates
- 🌙 **Dark/Light mode** - System-aware theme with manual toggle
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- ⚡ **Fast & static** - Built with Astro for optimal performance
- 🎨 **Modern UI** - Inspired by Zen Browser's release notes design

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [React](https://react.dev/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

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
│   ├── ClientCard.tsx
│   ├── Sidebar.tsx
│   └── ThemeToggle.tsx
├── content/
│   └── changelog/
│       └── data.ts      # Client/project data
├── layouts/
│   └── Layout.astro     # Main layout
├── pages/
│   ├── index.astro      # Homepage
│   └── [client]/
│       └── [project]/
│           └── index.astro  # Project changelog page
└── styles/
    └── global.css       # Global styles
```

## Adding Content

Edit `src/content/changelog/data.ts` to add clients, projects, and changelog entries:

```typescript
export const clients: Client[] = [
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
                description: 'Feature description',
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
- `improvement` - Improvements to existing features
- `breaking` - Breaking changes
- `security` - Security updates

## License

ISC