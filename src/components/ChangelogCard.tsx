import type { ChangelogEntry } from '../content/changelog/data';
import { ChangeItem } from './ChangeItem';

interface ChangelogCardProps {
  entry: ChangelogEntry;
}

export function ChangelogCard({ entry }: ChangelogCardProps) {
  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative" id={`v${entry.version}`}>
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-primary-500/20 -translate-x-[1.25rem] hidden md:block" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-[var(--color-bg)] -translate-x-[1.625rem] hidden md:block" />
      
      <div className="card">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-4 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-primary-500/10 text-primary-500 font-mono font-semibold text-lg">
              v{entry.version}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              {formattedDate}
            </span>
          </div>
          
          {/* Change count badges */}
          <div className="flex items-center gap-2 text-xs">
            {Object.entries(
              entry.changes.reduce((acc, change) => {
                acc[change.type] = (acc[change.type] || 0) + 1;
                return acc;
              }, {} as Record<string, number>)
            ).map(([type, count]) => (
              <span
                key={type}
                className="px-2 py-0.5 rounded-full bg-surface-200 dark:bg-surface-800 text-[var(--color-text-secondary)]"
              >
                {count} {type}{count > 1 ? 's' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Summary */}
        {entry.summary && (
          <p className="text-[var(--color-text-secondary)] mb-4">{entry.summary}</p>
        )}

        {/* Changes list */}
        <div className="space-y-0">
          {entry.changes.map((change) => (
            <ChangeItem key={change.id} change={change} />
          ))}
        </div>
      </div>
    </div>
  );
}
