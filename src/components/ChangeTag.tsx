import type { ChangeType } from '../content/changelog/data';

interface ChangeTagProps {
  type: ChangeType;
}

const tagConfig: Record<ChangeType, { label: string; className: string }> = {
  feature: { label: 'Feature', className: 'tag tag-feature' },
  fix: { label: 'Fix', className: 'tag tag-fix' },
  improvement: { label: 'Improvement', className: 'tag tag-improvement' },
  breaking: { label: 'Breaking', className: 'tag tag-breaking' },
  security: { label: 'Security', className: 'tag tag-security' },
};

export function ChangeTag({ type }: ChangeTagProps) {
  const config = tagConfig[type];
  return <span className={config.className}>{config.label}</span>;
}
