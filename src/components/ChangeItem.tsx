import type { Change, ChangeType } from '../content/changelog/data';
import { ChangeTag } from './ChangeTag';

interface ChangeItemProps {
  change: Change;
}

const borderColors: Record<ChangeType, string> = {
  feature: 'border-l-[#D19486]',
  fix: 'border-l-[#D16F5B]',
  breaking: 'border-l-red-500',
  security: 'border-l-[#BB3B22]',
  changed: 'border-l-[#CB8B43]',
  known: 'border-l-[#ACAB9F]',
};

export function ChangeItem({ change }: ChangeItemProps) {
  return (
    <div className={`py-1 transition-colors`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 min-w-20">
          <ChangeTag type={change.type} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-[var(--color-text)]">{change.title}</h4>
        </div>
      </div>
    </div>
  );
}
