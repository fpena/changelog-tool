import type { ChangeType } from '../content/changelog/data';

interface ChangeTagProps {
  type: ChangeType;
}

const tagConfig: Record<ChangeType, { label: string; color: string }> = {
  feature: { label: 'Added', color: 'text-[#D19486]' },
  fix: { label: 'Fixed', color: 'text-[#D16F5B]' },
  breaking: { label: 'Breaking', color: 'text-[#694035]' },
  security: { label: 'Security', color: 'text-[#BB3B22]' },
  changed: { label: 'Changed', color: 'text-[#CB8B43]' },
  known: { label: 'Known', color: 'text-[#ACAB9F]' },
};

export function ChangeTag({ type }: ChangeTagProps) {
  const config = tagConfig[type];
  return (
    <span className={`text-normal font-medium ${config.color}`}>
      {config.label}
    </span>
  );
}
