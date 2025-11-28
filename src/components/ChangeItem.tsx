import type { Change, ChangeType } from '../content/changelog/data';
import { ChangeTag } from './ChangeTag';

interface ChangeItemProps {
  change: Change;
}

const borderColors: Record<ChangeType, string> = {
  feature: 'border-l-emerald-500',
  fix: 'border-l-amber-500',
  improvement: 'border-l-blue-500',
  breaking: 'border-l-red-500',
  security: 'border-l-purple-500',
};

export function ChangeItem({ change }: ChangeItemProps) {
  return (
    <div className={`pl-4 py-4 border-l-2 ${borderColors[change.type]} hover:bg-surface-50 dark:hover:bg-surface-900/50 transition-colors`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-20">
          <ChangeTag type={change.type} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-[var(--color-text)]">{change.title}</h4>
          {change.description && (
            <p className="mt-1 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {change.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
