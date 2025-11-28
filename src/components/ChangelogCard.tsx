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
      <div className="mb-8">
        {/* Version header */}
        <div className="flex items-center gap-4 mb-4 justify-between">
          <h4 className="text-sm font-bold text-[var(--color-text)]">
            {entry.version}
          </h4>
          <span className="text-sm text-[var(--color-text-secondary)]">
            {formattedDate}
          </span>
        </div>

        {/* Summary */}
        {entry.summary && (
          <p className="text-[var(--color-text-secondary)] mb-6 text-lg">
            {entry.summary}
          </p>
        )}

        {/* Changes list */}
        <div className="space-y-1 rounded-lg overflow-hidden">
          {entry.changes.map((change) => (
            <ChangeItem key={change.id} change={change} />
          ))}
        </div>
      </div>
    </div>
  );
}
