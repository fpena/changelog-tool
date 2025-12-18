import type { RoadmapItem, RoadmapStatus } from '../content/changelog/data';

interface RoadmapProps {
  items: RoadmapItem[];
}

const statusConfig: Record<RoadmapStatus, { label: string; color: string; bg: string }> = {
  'planned': { label: 'Planned', color: 'text-[var(--color-text-secondary)]', bg: 'bg-[var(--color-surface)]' },
  'in-progress': { label: 'In Progress', color: 'text-[#CB8B43]', bg: 'bg-[#CB8B43]/10' },
  'completed': { label: 'Completed', color: 'text-[#4CAF50]', bg: 'bg-[#4CAF50]/10' },
};

function StatusBadge({ status }: { status: RoadmapStatus }) {
  const config = statusConfig[status];
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded ${config.color} ${config.bg}`}>
      {config.label}
    </span>
  );
}

export function Roadmap({ items }: RoadmapProps) {
  if (!items || items.length === 0) {
    return (
      <div className="text-[var(--color-text-secondary)] text-center py-12">
        No roadmap items yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]"
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-[var(--color-text)] font-medium">{item.title}</h3>
            <StatusBadge status={item.status} />
          </div>
          {item.description && (
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              {item.description}
            </p>
          )}
          {item.targetDate && (
            <p className="text-xs text-[var(--color-text-secondary)]">
              Target: {item.targetDate}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
