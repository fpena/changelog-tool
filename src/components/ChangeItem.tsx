import type { Change } from '../content/changelog/data';
import { ChangeTag } from './ChangeTag';

interface ChangeItemProps {
  change: Change;
}

export function ChangeItem({ change }: ChangeItemProps) {
  return (
    <div className="flex gap-3 py-3 border-b border-[var(--color-border)] last:border-0">
      <div className="flex-shrink-0 pt-0.5">
        <ChangeTag type={change.type} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-[var(--color-text)]">{change.title}</h4>
        {change.description && (
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {change.description}
          </p>
        )}
      </div>
    </div>
  );
}
