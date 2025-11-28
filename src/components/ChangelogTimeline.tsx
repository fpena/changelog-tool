import type { Project } from '../content/changelog/data';
import { ChangelogCard } from './ChangelogCard';

interface ChangelogTimelineProps {
  project: Project;
}

export function ChangelogTimeline({ project }: ChangelogTimelineProps) {
  return (
    <div className="space-y-8 md:pl-10">
      {project.changelog.map((entry) => (
        <ChangelogCard key={entry.version} entry={entry} />
      ))}
    </div>
  );
}
