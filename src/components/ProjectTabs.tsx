import type { Project } from '../content/changelog/data';
import { Tabs } from './Tabs';
import { Roadmap } from './Roadmap';
import { ChangelogTimeline } from './ChangelogTimeline';

interface ProjectTabsProps {
  project: Project;
}

export function ProjectTabs({ project }: ProjectTabsProps) {
  const tabs = [
    {
      id: 'roadmap',
      label: 'Roadmap',
      content: <Roadmap items={project.roadmap || []} />,
    },
    {
      id: 'changelog',
      label: 'Changelog',
      content: <ChangelogTimeline project={project} />,
    },
  ];

  return <Tabs tabs={tabs} defaultTab="roadmap" />;
}
