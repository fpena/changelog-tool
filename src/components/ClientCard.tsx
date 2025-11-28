import type { Client } from '../content/changelog/data';

interface ClientCardProps {
  client: Client;
}

export function ClientCard({ client }: ClientCardProps) {
  const totalVersions = client.projects.reduce(
    (sum, p) => sum + p.changelog.length,
    0
  );

  const latestUpdate = client.projects
    .flatMap((p) => p.changelog)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return (
    <div className="card group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-[var(--color-text)] group-hover:text-primary-500 transition-colors">
            {client.name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            {client.description}
          </p>
        </div>
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
          {client.name.charAt(0)}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-4">
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
          {client.projects.length} project{client.projects.length !== 1 ? 's' : ''}
        </span>
        <span className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
          {totalVersions} release{totalVersions !== 1 ? 's' : ''}
        </span>
      </div>

      {latestUpdate && (
        <div className="text-xs text-[var(--color-text-secondary)] mb-4">
          Latest: v{latestUpdate.version} •{' '}
          {new Date(latestUpdate.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      )}

      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
          Projects
        </h4>
        <div className="flex flex-wrap gap-2">
          {client.projects.map((project) => (
            <a
              key={project.id}
              href={`/${client.id}/${project.id}`}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface-200 dark:bg-surface-800 text-sm text-[var(--color-text)] hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
