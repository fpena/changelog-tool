import type { ChangeType } from '../content/changelog/data';

interface ChangeTagProps {
  type: ChangeType;
}

const tagConfig: Record<ChangeType, { label: string; color: string }> = {
  feature: { label: 'Added', color: 'text-emerald-600 dark:text-emerald-400' },
  fix: { label: 'Fixed', color: 'text-amber-600 dark:text-amber-400' },
  improvement: { label: 'Improved', color: 'text-blue-600 dark:text-blue-400' },
  breaking: { label: 'Breaking', color: 'text-red-600 dark:text-red-400' },
  security: { label: 'Security', color: 'text-purple-600 dark:text-purple-400' },
};

export function ChangeTag({ type }: ChangeTagProps) {
  const config = tagConfig[type];
  return (
    <span className={`text-sm font-medium ${config.color}`}>
      {config.label}
    </span>
  );
}
